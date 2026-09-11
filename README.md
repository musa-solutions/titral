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

- Menlo Ventures, *LLM Market Update* (déc. 2025) — concentration de la dépense LLM entreprise
- IDC, *Worldwide AI & GenAI Spending Guide* (avr. 2026) — dépense IA européenne 2029
- RAIL (avr. 2026) — état de préparation AI Act
- Règlements (UE) 2022/2554 (DORA) et 2024/1689 (AI Act)
- Communiqué Bercy (nov. 2025) — accord France-Allemagne Mistral × SAP
- Quest for Change / Innovact — chiffres du réseau 2025

Les chiffres spécifiques à l'entreprise (pricing, traction) sont volontairement
qualitatifs : à compléter avec les données réelles avant présentation.
