// Overflow verification for the built Slidev deck (history routing).
// Serves dist/ over HTTP, visits each slide, and measures whether any
// visible element extends beyond the slide's bounding box.
// NOTE: 13 main slides + 1 appendix (OED "Sous le capot") = 14 slides are live.
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { chromium } from 'playwright-chromium'

const root = path.resolve('dist')
const port = 4173

const mime = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.json': 'application/json',
}

const server = http.createServer((req, res) => {
  let p = path.join(root, req.url === '/' ? 'index.html' : decodeURIComponent(req.url.split('?')[0]))
  if (!p.startsWith(root)) { res.writeHead(403); return res.end() }
  if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) p = path.join(root, 'index.html')
  res.writeHead(200, { 'content-type': mime[path.extname(p)] || 'application/octet-stream' })
  fs.createReadStream(p).pipe(res)
})

await new Promise(r => server.listen(port, r))

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 960, height: 540 } })
const errors = []
page.on('pageerror', e => { if (!/Wake Lock/.test(e.message)) errors.push(`pageerror: ${e.message}`) })
page.on('console', m => { if (m.type() === 'error' && !/Failed to patch FloatingVue/.test(m.text())) errors.push(`console: ${m.text()}`) })

const NUM_SLIDES = 14
const report = []

for (let i = 1; i <= NUM_SLIDES; i++) {
  await page.goto(`http://localhost:${port}/${i}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(500)
  const res = await page.evaluate(() => {
    const pages = [...document.querySelectorAll('.slidev-page')]
    const el = pages.find(p => p.getBoundingClientRect().width > 0)
    if (!el) return { error: 'no visible .slidev-page element' }
    const kicker = el.querySelector('.kicker')?.textContent || '?'
    const r = el.getBoundingClientRect()
    let maxOverB = 0, maxOverR = 0, worstB = '', worstR = ''
    for (const c of el.querySelectorAll('*')) {
      const cr = c.getBoundingClientRect()
      if (cr.width === 0 && cr.height === 0) continue
      const cs = getComputedStyle(c)
      if (cs.display === 'none' || cs.visibility === 'hidden') continue
      const overB = cr.bottom - r.bottom
      const overR = cr.right - r.right
      if (overB > maxOverB) { maxOverB = overB; worstB = `<${c.tagName.toLowerCase()}> "${(c.textContent || '').trim().slice(0, 40)}"` }
      if (overR > maxOverR) { maxOverR = overR; worstR = `<${c.tagName.toLowerCase()}> "${(c.textContent || '').trim().slice(0, 40)}"` }
    }
    // mermaid renders into a shadow root — probe it for render errors / size
    let mermaid = null
    const mm = el.querySelector('.mermaid')
    if (mm) {
      const sr = mm.shadowRoot
      const svg = sr?.querySelector('svg')
      const pre = sr?.querySelector('pre')
      mermaid = svg
        ? { ok: true, w: Math.round(svg.getBoundingClientRect().width), h: Math.round(svg.getBoundingClientRect().height) }
        : { ok: false, error: pre?.textContent?.slice(0, 120) || 'no svg' }
    }
    return { kicker, overflowBottom: +maxOverB.toFixed(1), overflowRight: +maxOverR.toFixed(1), worstBottom: worstB, worstRight: worstR, mermaid }
  })
  res.slide = i
  report.push(res)
}

server.close()
await browser.close()

let fail = false
for (const r of report) {
  const bad = r.error || r.overflowBottom > 2 || r.overflowRight > 2 || (r.mermaid && !r.mermaid.ok)
  if (bad) fail = true
  const m = r.mermaid ? ` · mermaid ${r.mermaid.ok ? `${r.mermaid.w}x${r.mermaid.h}px` : 'ERROR: ' + r.mermaid.error}` : ''
  console.log(`${bad ? '✗' : '✓'} slide ${String(r.slide).padStart(2)} [${r.kicker ?? r.error}]: bottom ${r.overflowBottom}px, right ${r.overflowRight}px${m}${bad ? ` WORST_B=[${r.worstBottom}] WORST_R=[${r.worstRight}]` : ''}`)
}
if (errors.length) { console.log('\nJS errors:'); errors.forEach(e => console.log('  ' + e)) }
console.log(fail || errors.length ? '\nRESULT: FAIL' : '\nRESULT: PASS')
process.exit(fail || errors.length ? 1 : 0)
