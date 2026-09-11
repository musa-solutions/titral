import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { chromium } from 'playwright-chromium'
const root = path.resolve('dist')
const port = 4174
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.json': 'application/json' }
const server = http.createServer((req, res) => {
  let p = path.join(root, req.url === '/' ? 'index.html' : decodeURIComponent(req.url.split('?')[0]))
  if (!p.startsWith(root)) { res.writeHead(403); return res.end() }
  if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) p = path.join(root, 'index.html')
  res.writeHead(200, { 'content-type': mime[path.extname(p)] || 'application/octet-stream' })
  fs.createReadStream(p).pipe(res)
})
await new Promise(r => server.listen(port, r))
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
await page.goto(`http://localhost:${port}/4`, { waitUntil: 'networkidle' })
await page.waitForTimeout(600)
console.log(await page.evaluate(() => {
  const pages = [...document.querySelectorAll('.slidev-page')]
  const el = pages.find(p => p.getBoundingClientRect().width > 0)
  const f = el.querySelector('.deck-footer')
  return JSON.stringify({ attrs: [...f.attributes].map(a => a.name), matched: [...document.styleSheets].length })
}))
server.close(); await browser.close()
