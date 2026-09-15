# Titral — Pitch deck Innovact (Slidev)

Pitch deck de 14 slides + 1 annexe en français, destiné au comité de
sélection de l'incubateur Innovact (Reims / Grand Est).

**Positionnement : Continuous AI Exit Readiness** — Titral teste et prouve
la capacité des entreprises à sortir d'un fournisseur d'IA sans dégrader
leurs opérations. Le benchmarking sur données réelles (OED) est la
technologie ; l'exit readiness est le produit.

Structure (v2, recentrée marché/ICP/GTM) :

1. Titral — Continuous AI Exit Readiness
2. Problème — l'IA devient critique, la capacité de changer de fournisseur ne suit pas (58 % · 71 % · ≈22 000)
3. Qui achète / Marché — beachhead éditeurs SaaS/IA B2B, expansion entités DORA, ≈100 000 entreprises EU
4. Marché adressable — TAM ≈1,5 Md€ → 10 Md€ · SAM France ≈200 M€ · SOM 2-3 ans ≈500 k€ ARR
5. Le produit — AI Exit Test → rapport (qualité, coût, latence, effort, résidence, verdict)
6. Pourquoi maintenant — DORA (art. 28 : sorties « suffisamment testées ») + tailwinds AI Act / souveraineté
7. Concurrence — gateways, evals/observabilité, GRC, cloud exit : personne ne prouve la substituabilité
8. Avantage concurrentiel — la barrière : preuve sur production réelle + méthode OED
9. Business model — LAND : AI Exit Test 3-10 k€ → EXPAND : Continuous Exit Assurance 15-30 k€ ARR
10. Go-to-market — déclenché par les événements (RFP, revue DORA/TPRM, disruption modèle/prix)
11. Validation — preuve technologique vs validation commerciale (honnête : 0 client payant)
12. Équipe — repeat entrepreneurs (Studiare→Kroton 2015, AIO 70 000+ étudiants)
13. Pourquoi Innovact — ancrage Reims, jalons 6-12 mois, écosystème Grand Est
- Annexe — Sous le capot : rejeu de production, échantillonnage OED, benchmarks par tâche

Design : fond noir pur (`bg-black`), typographie Inter (zinc-100 / zinc-400),
cartes minimalistes `border border-zinc-800 bg-zinc-950/60 rounded-xl`.

## Commandes

```bash
npm install        # installer les dépendations

npm run dev        # présenter en local (http://localhost:3030)
npm run build      # build SPA (dist/) + PDF téléchargeable (dist/slidev-exported.pdf)
npm run export     # exporter le PDF avec les clicks

node verify-overflow.mjs   # vérifier l'absence de débordement sur les 15 slides (nécessite un build)
```

Le frontmatter active `download: true` : le jury peut télécharger le PDF
directement depuis la présentation en ligne.

## Sources des données chiffrées

👉 **Détail complet, nuances et caveats : `FINDINGS.md`** — synthèse de recherche exa/tavily (2025-2026).

Résumé (sources v2, toutes vérifiées à l'original) :

- Insee Première n° 2120 (données 2025) — 58 % des entreprises françaises de 250 salariés ou plus utilisent l'IA
- IBM Institute for Business Value, *The Calculus of AI Sovereignty* (juin 2026) — 71 % : changer de fournisseur IA difficile ; 91 % ne comprennent pas leurs dépendances
- Eurostat SBS 2024 — ≈251 000 entreprises moyennes + ≈55 000 grandes dans l'économie UE
- Eurostat, usage de l'IA 2025 (KS-01-26-009) — 30,4 % des moyennes, 55,0 % des grandes ⇒ ≈100 000 utilisatrices d'IA (ordre de grandeur)
- Règlement (UE) 2022/2554 (DORA) — art. 28 : stratégies de sortie documentées, suffisamment testées, réexaminées ; ≈22 000 entités financières. ⚠️ Pas d'amende « 10 % du CA » dans DORA (correction : astreintes 1 %/jour du CA journalier moyen pour les fournisseurs ICT critiques, art. 35)
- Règlement (UE) 2024/1689 (AI Act) + Omnibus 2026 — transparence août 2026, haut risque fin 2027 (tailwind)
- LinkedIns fondateurs + aio.com.br — équipe (Studiare→Kroton 2015, CEA, CFM, AIO 70 000+ étudiants)
- Quest for Change / Innovact — 300 startups, 114 M€ levés en 2025

Les chiffres spécifiques à l'entreprise (pricing, trajectoire ARR, traction)
sont **volontairement libellés hypothèses** : à valider en customer discovery
avant présentation.
