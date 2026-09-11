# Titral — Pitch deck Innovact (Slidev)

Pitch deck de 10 slides suivant la méthodologie Guy Kawasaki, en français,
destiné au comité de sélection de l'incubateur Innovact (Reims / Grand Est).

Design : fond noir pur (`bg-black`), typographie Inter (zinc-100 / zinc-400),
cartes minimalistes `border border-zinc-800 bg-zinc-950/60 rounded-xl`.

## Commandes

```bash
npm install        # installer les dépendations

npm run dev        # présenter en local (http://localhost:3030)
npm run build      # build SPA (dist/) + PDF téléchargeable (dist/slidev-exported.pdf)
npm run export     # exporter le PDF avec les clicks

node verify-overflow.mjs   # vérifier l'absence de débordement sur les 10 slides (nécessite un build)
```

Le frontmatter active `download: true` : le jury peut télécharger le PDF
directement depuis la présentation en ligne.

## Sources des données chiffrées

👉 **Détail complet, nuances et caveats : `FINDINGS.md`** — synthèse de recherche exa/tavily (2025-2026).

Résumé :

- Menlo Ventures, *State of GenAI in the Enterprise* (déc. 2025, confirmé 2026) — concentration 88 %, dépense GenAI 37 Md$, 11 % seulement changent de fournisseur
- IDC EMEA IT Market (mai 2026) — 319 Md$ de dépense IA EMEA 2026 · FutureScape EMEA — 60 % clouds souverains
- IDC Worldwide AI & GenAI Spending Guide (avr. 2026) — 290 Md$ Europe 2029, banque 12,5 %, santé +39,7 %/an
- Vision Compliance (avr. 2026) — 78 % sans action AI Act · Omnibus 2026 : haut risque → déc. 2027, transparence août 2026
- Règlement (UE) 2022/2554 (DORA) — en vigueur, 22 000+ entités, sanctions 10 % CA
- LinkedIns fondateurs + aio.com.br — équipe (Studiare→Kroton 2015, CEA, CFM, AIO 50 000+ étudiants)
- Quest for Change / Innovact — 300 startups, 114 M€ levés 2025

Les chiffres spécifiques à l'entreprise (pricing, traction) sont volontairement
qualitatifs : à compléter avec les données réelles avant présentation.
