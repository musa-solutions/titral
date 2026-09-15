# Findings — Recherche pour le pitch deck (Titral)

Synthèse des données de recherche utilisées dans `slides.md`, avec sources.
Dernière mise à jour : 2026-09-11 (recherche exa + tavily).

## 1. Concentration fournisseurs & dépense LLM entreprise

**Menlo Ventures, *2025: The State of Generative AI in the Enterprise* (déc. 2025)** — confirmé courant 2026 :
- Dépense GenAI entreprise : **37 Md$ en 2025** (vs 11,5 Md$ 2024, ×3,2 ; 1,7 Md$ 2023)
- Part de la dépense LLM API entreprise : **Anthropic 40 %** (12 % en 2023, 24 % en 2024), **OpenAI 27 %** (50 % en 2023), **Google 21 %** (7 % en 2023)
- **Top 3 US = 88 %** de l'usage LLM API entreprise ; les 12 % restants : Meta Llama, Cohere, Mistral, DeepSeek…
- Anthropic domine le code enterprise : 54 % vs 21 % OpenAI
- Cross-validation par données de paiement : Ramp montre Anthropic 34,4 % vs OpenAI 32,3 % des dépenses AI business ; Anthropic gagne ~70 % des face-à-face chez les nouveaux acheteurs
- **Changement de fournisseur rarissime : 66 % des équipes upgradent chez leur fournisseur, 23 % n'ont rien changé, seulement 11 % ont changé de fournisseur** (enquête Menlo mid-2025, 150 décideurs techniques) → le verrou est comportemental : on subit son modèle au lieu de le choisir
- API fondation seules : 12,5 Md$ en 2025

Sources : menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise · menlovc.com/perspective/2025-mid-year-llm-market-update · valueaddvc.com (août 2026) · report-ai.org (juin 2026)

## 2. Marché IA européen (IDC — chiffres 2026)

**IDC EMEA IT Market 2026, Q2 update (mai 2026)** :
- Dépense IA EMEA : **319 Md$ en 2026**, +19,2 % YoY — **3× plus rapide que la dépense IT totale**
- 48 % des organisations priorisent les agents IA custom ; 93 % voient l'IA comme source de revenus, pas seulement d'efficacité

**IDC Worldwide AI & GenAI Spending Guide (avr. 2026)** :
- Dépense IA Europe : **290 Md$ en 2029**, TCAC 33,7 % (2025-2029)
- GenAI ≈ 54 % de la dépense IA totale en fin de période
- **Banque : 12,5 % du marché IA européen 2026** — 1er segment industriel, top dépensier dans 4 des 5 grands marchés européens
- **Santé : TCAC 39,7 %** (2025-2029) — segment à plus forte croissance
- IDC cite explicitement : la conformité (AI Act, DORA) **génère une demande incrémentale en gouvernance et assurance IA**, surtout banque, assurance, santé

**IDC FutureScape EMEA 2026** :
- **60 % des organisations EMEA ne s'associeront qu'avec des clouds souverains locaux d'ici 2 ans** (« sovereignty: risk mitigation or competitive advantage »)
- Maturité : 51 % des organisations EMEA encore « opportunistic », <1 % « optimized » ; 28 % utilisent déjà l'IA agentique
- IDC : la fragmentation réglementaire issue de l'AI Act est un frein à la croissance ET un moteur de la demande en assurance/gouvernance

## 3. Réglementation européenne — l'état 2026 (⚠️ a changé)

**AI Act — Omnibus IA (accord provisoire du 7 mai 2026)** :
- **Annexe III (haut risque autonome) : reporté du 2 août 2026 au 2 décembre 2027**
- Transparence (art. 50) : **toujours applicable au 2 août 2026** pour les nouveaux systèmes (grâce déc. 2026 pour les existants)
- Annexe I (IA embarquée produit) : → 2028 ; GPAI déjà sur le marché : → août 2027
- Amendes max : 7 % du CA mondial / 35 M€ (supérieures au RGPD)
- ⇒ Ne plus dire « le 2 août 2026 = haut risque ». Framing correct : transparence août 2026, haut risque fin 2027, **DORA s'applique déjà**

**Readiness AI Act (sources 2026)** :
- **78 % des organisations sans action significative de conformité** (Vision Compliance, avr. 2026 — source originale ; reprise par RAIL, Qapitol, CSA)
- 83 % sans inventaire formiel de leurs systèmes IA ; 74 % sans responsable conformité désigné ; 61 % sans processus de documentation technique
- Coût conformité grande entreprise : 8–15 M$ ; certification tierce : 50 k$+ par système IA

**DORA (règlement (UE) 2022/2554)** — inchangé, en vigueur depuis le **17 janvier 2025** :
- 22 000+ entités financières (banques, assurances, payment institutions, crypto)
- Art. 28 : pilotage du risque tiers ICT obligatoire, avec preuve documentée (un questionnaire fournisseur ne suffit pas)
- 19 « Critical Third-Party Providers » désignés (oct. 2025), supervision directe des ESA
- ⚠️ **Correction :** DORA ne prévoit PAS de sanction générique « 10 % du CA mondial ». Pour les fournisseurs ICT tiers critiques, l'art. 35 prévoit des astreintes jusqu'à **1 % du chiffre d'affaires journalier moyen mondial par jour** (max 6 mois). Au niveau des États membres (ACPR/AMF) : jusqu'à 10 M€. L'argument fort reste l'obligation elle-même — des stratégies de sortie « suffisamment testées » (art. 28)
- **DORA = le levier contraignant de court terme** (l'Omnibus ayant affaibli l'urgence AI Act)

## 4. Paysage concurrentiel (validation des axes du 2×2)

**Axes retenus : X = Données génériques → Vos workloads de production · Y = Photographie → Verdict actionnable**
- **Leaderboards publics** (LMSYS, HELM, MMLU) : continus mais hors-sol, aucune donnée entreprise → quadrant bas-gauche
- **Observabilité LLM** (LangSmith, Langfuse, Braintrust, Arize Phoenix, Helicone) : rejouent les traces de production **pour la régression de votre propre pipeline** (« replay testing »), jamais pour arbitrer un fournisseur → bas-droite. Prix : LangSmith 39 $/siège + usage ; Braintrust 249 $/mois ; Langfuse Core 29 $ → Enterprise 2 499 $/mois ; offres entreprise ~2,5 k$/mois = ancrage de prix du marché
- **Audits conseil** (Big 4, white papers type « 40 critères », « 600-prompt datasets ») : verdicts mais manuels, ponctuels, sur jeux *représentatifs* (« RFP theater producing glossy scorecards ») → haut-gauche
- **Gateways souverains** (Orq.ai EU, Soverana, OpenRouter, LiteLLM, Helicone AI Gateway) : réduisent le coût du changement d'API, **sans dire vers quoi migrer** → partenaires, pas concurrents. Orq revendique 94 % au EU Cloud Sovereignty Framework ; Soverana route vers Mistral/Llama/Qwen sur 7 providers EU
- **AI assurance / gouvernance** (TrustLayers, Sigilla, Svalv) : evidence trails, DORA/AI Act readiness — auditent *ce que fait* l'IA, pas *quel fournisseur choisir*
- ⇒ Quadrant haut-droite vide : **personne ne rejoue vos workloads de production contre des alternatives pour arbitrer la migration**

## 5. Souveraineté IA française/européenne — momentum

- **Mistral AI** : première décacorne IA française (~11,7 Md€ de valorisation, série C menée par ASML sept. 2025), run-rate > 400 M$ 2025 → > 1 Md$ attendu 2026, **100+ grands clients entreprise**, modèles open-weight Apache 2.0, partenaires Airbus, EDF, BMW, SAP
- **Accord France-Allemagne Mistral × SAP pour l'IA souveraine des administrations (nov. 2025)** : accord-cadre contraignant prévu mi-2026, cas d'usage déployés 2026-2030 — la migration souveraine devient un programme institutionnel
- Idée-force (Fortune, août 2026) : Mistral = « l'option la plus alignée avec les exigences de souveraineté européenne » ; la question n'est plus « existe-t-il une alternative » mais « **quels workloads peuvent basculer sans perte** » — exactement la question à laquelle répond Titral

## 6. Équipe (LinkedIn + aio.com.br, vérifiés)

**Murilo Vasconcelos Andrade — CEO**
- Fondateur & CEO d'AIO (Brésil, 2020) — edtech IA : 50 000+ étudiants, +60 % d'efficacité d'étude revendiquée
- Fondateur de **Studiare** (adaptive learning), **acquise par Kroton en 2015**
- Ex-quant : Morgan Stanley (Londres), Santander (Madrid), Banco BBM (Rio) ; CTO de plusieurs startups
- École polytechnique (maths appliquées) · DEA El Karoui, Paris VI (mention bien) · IME (Brésil)
- Or Olympiade brésilienne de maths · argent IMC (mondial universitaire) · ACM ICPC ×3
- Reims depuis 3 ans

**Thiago Sabetta — CTO**
- Co-fondateur & CTO d'AIO — 50 000+ étudiants
- Chercheur CEA Saclay — publication *Nonequilibrium steady states in the quantum XXZ spin chain* (American Physical Society)
- Data chez Capital Fund Management (CFM) · Toucan Toco · Engineering Manager Zefir · Consultant Elée
- École polytechnique · USP

## 7. Innovact / Quest for Change (chiffres 2025)

- Incubateur d'excellence du Grand Est, 20+ ans à Reims, financé par Grand Reims (CCI Marne membre fondateur, Caisse d'Épargne, KPMG Reims, groupe Frey…)
- Réseau **Quest for Change : 5 incubateurs, 6 territoires, 300+ startups accompagnées**
- Chiffres 2025 du réseau : **33 M€ de CA cumulé, 114 M€ levés, 1 700 emplois créés**
- Offre : startup manager ex-entrepreneur dédié, Investor Days + plateforme de business angels, co-working à 3 min de la gare, programmes séquencés, accès experts

## 8. Caveats / décisions éditoriales

- **Menlo déc. 2025 reste LA référence concentration** : pas de mise à jour mid-2026 publiée ; les analyses 2026 (Ramp, valueaddvc, report-ai) confirment le classement. « 88 % » daté mais validé — libellé slide : « confirmé 2026 ».
- **11 % changent de fournisseur (Menlo)** : chiffre puissant pour le verrou comportemental — intégré slide 2.
- Chiffres entreprise (pricing, traction) : volontairement **qualitatifs** (décision fondateur, brainstorm session) — à compléter avant soutenance.
- Le **78 %** : citer **Vision Compliance (avr. 2026)** comme source originale (RAIL/Qapitol/CSA la reprennent).
- Ancrage de prix observabilité (~2,5 k$/mois entreprise) : extrapolé des tarifs publics Langfuse/LangSmith/Braintrust — dire « offres entreprise à partir de ~2,5 k$/mois ».
