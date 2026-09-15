# Titral — Pitch deck Innovact (Slidev)

Pitch deck de 13 slides + 1 annexe en français, destiné au comité de
sélection de l'incubateur Innovact (Reims / Grand Est).

**Positionnement : Continuous AI Exit Readiness** — Titral teste et prouve
la capacité des entreprises à sortir d'un fournisseur d'IA sans dégrader
leurs opérations. Le benchmarking sur données réelles (OED) est la
technologie ; l'exit readiness est le produit.

Structure (v3 — recentrée marché / ICP / GTM) :

1. Titral — Continuous AI Exit Readiness
2. Problème — l'IA devient critique, la capacité de changer de fournisseur ne suit pas (58 % · 71 % · ≈22 000)
3. Qui achète / Marché — beachhead éditeurs SaaS/IA B2B, expansion entités DORA, ≈100 000 entreprises EU
4. Marché adressable — TAM ≈1,5 Md€ → 10 Md€ · SAM France ≈200 M€ · SOM 2-3 ans ≈500 k€ ARR
5. Le produit — AI Exit Test → rapport (qualité, coût, latence, effort, résidence, verdict)
6. Pourquoi maintenant — DORA (art. 28 : sorties « suffisamment testées ») + tailwinds AI Act / souveraineté
7. Concurrence — gateways, evals/observabilité, GRC, cloud exit : personne ne prouve la substituabilité
8. Avantage concurrentiel — la barrière : preuve sur production réelle + méthode OED
9. Business model — LAND : AI Exit Test 3-10 k€ → EXPAND : Continuous Exit Assurance 15-30 k€ ARR
10. Go-to-market — déclenché par les événements (RFP, revue DORA/TPRM, disruption
   modèle/prix) · pipeline cible chiffré (300 contacts → 30 démos → 10 exit tests → 2–3
   design partners) · co-sell clouds souverains · 60 % du temps fondateur sur 6 mois
11. Validation — preuve technologique vs validation commerciale (honnête : pré-revenus)
   · jalon discovery mesurable : 20 entretiens (J+3) → design partners (J+6)
12. Équipe — repeat entrepreneurs (Studiare→Kroton 2015, AIO 70 000+ étudiants)
13. Pourquoi Innovact — ancrage Reims, jalons 6-12 mois, écosystème Grand Est
- Annexe — Sous le capot : rejeu de production, échantillonnage OED, benchmarks par tâche

Design : fond noir avec vignette radiale (`styles/index.css`), Inter pour le
texte et JetBrains Mono pour les libellés. Le thème repose sur un système
restreint, défini en variables CSS :

- **quatre rôles de texte** — `--ink` (titres, chiffres, mots accentués),
  `--ink-2` (corps), `--ink-3` (libellés, légendes), `--ink-4` (sources,
  pagination). L'emphase dans le corps passe par le poids, jamais par un
  nouveau gris.
- **un accent unique** — `--accent` (or `#c4a570`) pour le fil conducteur :
  filets, jalons franchis, chiffres clés.
- **des composants nommés** — `.card` / `.card-hl` (filet 1 px, rayon 2 px),
  `.kicker`, `.h-title`, `.eyebrow`, `.stat` (tous les chiffres de tête à la
  même taille), `.meter` (barres proportionnelles), `.lead`, `.deck-footer`.
- **une échelle typographique de 8 tailles** au total sur l'ensemble du deck.

`colorSchema: light` est volontaire : le deck peint lui-même sa surface
sombre, ce qui laisse le mode présentateur et l'interface Slidev en clair.

## Commandes

```bash
npm install        # installer les dépendances

npm run dev        # présenter en local (http://localhost:3030)
npm run build      # build SPA (dist/) + PDF téléchargeable (dist/slidev-exported.pdf)
npm run export     # exporter le PDF avec les clicks

node verify-overflow.mjs   # vérifier l'absence de débordement sur les 14 pages (13 slides + annexe ; nécessite un build)
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

Les montants de la slide 04 sont libellés en euros ; les sources d'origine en
dollars sont converties à 1 $ ≈ 0,92 €, taux indiqué sur la slide.

Les chiffres spécifiques à l'entreprise (pricing, trajectoire ARR, traction)
sont **volontairement libellés hypothèses** : à valider en customer discovery
avant présentation.
