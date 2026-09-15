# Titral — Questions & réponses de soutenance

Préparation au grill du **comité de sélection Innovact** (Reims / Grand Est : startup managers,
CCI Marne, Caisse d'Épargne, KPMG Reims, business angels) **et** des **investisseurs pré-seed**
rencontrés ensuite. Le document est adversarial par construction : il attaque le deck là où il
est faible, pas là où il est confortable.

Base factuelle : `slides.md` (v3, 13 slides + annexe), `FINDINGS.md` (sources et caveats,
notamment §8 et §9), `research/06-concurrents.md`.

---

## Comment utiliser ce document

1. **Lisez la Partie 1 (questions) seule, sans les réponses.** Répondez à voix haute, chronomètre
   en main : 45 secondes par réponse maximum. Ce que vous n'arrivez pas à dire en 45 s, vous ne
   le direz pas devant un jury.
2. **Puis seulement, lisez la Partie 2 (réponses).** Les IDs sont stables : `Q04-2` ↔ `R04-2`.
3. **Priorisez par la notation.** Rehearsal time = probabilité × danger. Les `Certaine · Létale`
   passent en premier, les `Possible · Gérable` sont du bonus.
4. **La Partie 3 liste tous les `À préparer :`** — backup slides, chiffres à vérifier, documents
   à avoir sous la main. C'est votre to-do avant la soutenance.
5. **Chaque section de la Partie 1 commence par un encadré `⚠️ À corriger avant la soutenance`** :
   les défauts factuels ou de cohérence de la slide, avec ce qu'elle dit aujourd'hui, pourquoi
   c'est indéfendable, et la correction. Les slides sans défaut portent une ligne
   `✅ Aucun problème factuel identifié`, pour que les 14 aient le même format. Traitez cet
   encadré **avant** de répéter les questions : une slide corrigée supprime la question.

### Notation

| Champ | Valeurs |
| :-- | :-- |
| Probabilité | `Certaine` · `Probable` · `Possible` |
| Danger | `Létale` (peut couler le pitch) · `Dangereuse` (fait perdre le contrôle du récit) · `Gérable` |
| Audience | `[Jury]` incubateur · `[Investisseur]` pré-seed · `[Les deux]` |

### Deux publics, deux grilles de lecture

- **Le jury Innovact** cherche : des fondateurs crédibles et **disponibles**, un marché réel
  atteignable **depuis le Grand Est**, un ancrage local sincère, et l'absence de mauvaise surprise
  (structure juridique, dépendance à une activité tierce, capacité à vivre 12 mois). Il est moins
  sensible au TAM qu'à « allez-vous vraiment être là dans six mois ».
- **L'investisseur pré-seed** cherche : un wedge étroit et douloureux, une défensibilité qui
  survit à un concurrent motivé, un pricing power, un « why now » qui ne repose pas sur une
  réglementation reportée, et une trajectoire qui peut atteindre un ordre de grandeur au-dessus
  du SOM affiché.
- **Attention particulière** : **KPMG Reims finance Innovact**. Votre slide 07 et
  `research/06-concurrents.md` qualifient les audits Big 4 de « RFP theater ». Un associé KPMG
  peut être dans la salle. Voir `Q07-3`.

---

## Les 5 questions à répéter à froid

Ce sont celles qui peuvent réellement couler la soutenance. Si vous ne préparez que cinq réponses,
préparez celles-là — mot pour mot, dans cet ordre.

| ID | Question | Pourquoi c'est létal |
| :-- | :-- | :-- |
| **Q11-1** | « Combien d'entretiens clients avez-vous menés à ce jour, avec qui nommément, et qu'avez-vous appris qui a **changé** ce deck ? » | La vraie réponse est 0 à 2 (`FINDINGS` §8). Or l'ICP, le pricing, les triggers et le funnel du deck en dépendent tous. Une réponse floue transforme tout le deck en fiction. |
| **Q12-3** | « Vous pilotez AIO, société brésilienne, 70 000 étudiants. Quel pourcentage de votre temps va à Titral, à partir de quand, et qui reste sur AIO ? » | Le jury Innovact accompagne des gens, pas des slides. Un doute sur la disponibilité ou sur un conflit AIO/Titral suffit à refuser. |
| **Q13-4** | « Quel est votre besoin de financement, votre runway et votre burn ? Comment vivez-vous les 12 prochains mois ? » | **Le deck ne contient aucun ask, aucun chiffre de burn, aucun plan de trésorerie.** C'est le trou le plus visible pour les deux publics. |
| **Q08-2** | « Langfuse ou Braintrust rejouent déjà des traces ; un gateway route déjà vers 7 fournisseurs. Qu'est-ce qui les empêche de livrer votre produit en un trimestre ? » | Votre barrière déclarée est une **méthode** — pas un brevet, pas un dataset, pas un effet de réseau. Le deck l'admet lui-même en bas de slide 08. |
| **Q05-4** | « Vous rejouez des données de production réelles vers des fournisseurs tiers. Comment passez-vous le RGPD, la DPIA et le comité sécurité d'une banque, en tant que société pré-revenus de deux personnes ? » | C'est le tueur silencieux du modèle : un cycle sécurité de 6 mois est incompatible avec un produit d'appel à 3–10 k€. |

Bonus, si l'auditoire est plutôt investisseur : **Q04-4** (« 500 k€ d'ARR à 3 ans, ce n'est pas un
dossier de capital-risque »).

---

# PARTIE 1 — LES QUESTIONS

## Slide 01 — Titral · Continuous AI Exit Readiness

✅ **Aucun problème factuel identifié** sur cette slide. (Les questions ci-dessous portent sur des
faits non écrits sur la slide : structure juridique, répartition des rôles.)

- **Q01-1** — `Certaine · Gérable` `[Les deux]`
  « "Continuous AI Exit Readiness", concrètement, qu'est-ce que le client reçoit et qu'est-ce
  qu'il n'a pas ? Expliquez-le comme si j'étais son directeur des risques. »

- **Q01-2** — `Probable · Gérable` `[Jury]`
  « Le nom : "Titral" évoque le titrage chimique. Vous vendez à des directions Risques et
  Conformité françaises. Pourquoi un nom que personne ne comprend, en plus d'un sous-titre
  entièrement en anglais ? »

- **Q01-3** — `Probable · Dangereuse` `[Les deux]`
  « Deux fondateurs, tous deux libellés "Fondateur". Qui décide ? Qui vend ? Qui code ?
  Et la société existe-t-elle : SAS immatriculée en France, capital, répartition ? »

- **Q01-4** — `Possible · Dangereuse` `[Investisseur]`
  « Vous vendez la sortie d'un fournisseur d'IA. Mais votre propre produit dépend des API de ces
  mêmes fournisseurs pour rejouer. Que devient Titral si OpenAI ou Anthropic durcit ses
  conditions d'usage sur le benchmarking comparatif ? »

## Slide 02 — L'IA devient critique. La capacité de changer de fournisseur ne suit pas.

✅ **Aucun problème factuel identifié** sur cette slide : les trois chiffres et leurs sources
correspondent à `FINDINGS` (Insee n° 2120 · IBM IBV juin 2026 · règlement 2022/2554) et aucun
montant d'amende DORA n'y figure. La faiblesse est argumentative (biais du sondage IBM,
populations différentes), pas factuelle — voir Q02-1 et Q02-3.

- **Q02-1** — `Probable · Dangereuse` `[Investisseur]`
  « Le 71 % vient d'IBM, qui vend du cloud souverain et de l'IA d'entreprise. C'est du déclaratif
  auto-servi. Avez-vous une preuve non-vendeur que ce problème coûte de l'argent aujourd'hui ? »

- **Q02-2** — `Probable · Dangereuse` `[Les deux]`
  « "Difficile de changer" n'est pas "prêt à payer". Beaucoup d'entreprises vivent très bien avec
  un fournisseur unique. Où est la douleur budgétée ? »

- **Q02-3** — `Possible · Gérable` `[Investisseur]`
  « Vos trois chiffres ne parlent pas du même monde : 58 % concerne les entreprises françaises de
  250 salariés et plus, 22 000 concerne les entités financières européennes, et votre beachhead
  (slide 03) ce sont des éditeurs de 50 à 500 salariés. Sur lequel des trois avez-vous une
  preuve ? »

- **Q02-4** — `Possible · Gérable` `[Les deux]`
  « Si changer était vraiment critique, les entreprises auraient déjà bougé. Le chiffre Menlo dit
  que seulement 11 % ont changé de fournisseur. Vous vendez donc à un marché qui, par
  définition, ne bouge pas ? »

## Slide 03 — Un marché déjà installé, avec une pression réglementaire croissante

> ⚠️ **À corriger avant la soutenance — slide 03**
>
> **1. La citation présentée comme un verbatim client** — `LETALE`, cf. `Q03-1`
> · *Ce que dit la slide* : dans la carte « Beachhead », un bloc entre guillemets avec un filet
> d'accent — « Quelle est votre stratégie de sortie d'OpenAI ? » — un contrat bloqué — sans
> attribution. Le traitement typographique la fait lire comme un verbatim terrain.
> · *Pourquoi c'est indéfendable* : c'est une reconstitution du vécu des fondateurs. À ce jour
> **0 à 2 entretiens de discovery formels** (`FINDINGS` §8, qui précise qu'aucune donnée de
> traction n'est revendiquée). Un juré qui demande « qui l'a dite ? » obtient un aveu au pire
> moment du pitch.
> · *Correction* : deux options. **(a)** Attribuer honnêtement : « ce que nous avons entendu sur
> nos propres workloads — à confirmer en discovery ». **(b)** Retirer les guillemets et en faire
> une hypothèse assumée : « Le déclencheur que nous testons : la question de sortie posée en
> RFP. » Dans les deux cas, **dire l'origine à l'oral avant qu'on la demande**.

- **Q03-1** — `Certaine · Létale` `[Les deux]`
  « La citation "Quelle est votre stratégie de sortie d'OpenAI ? — un contrat bloqué" : qui l'a
  dite, quand, dans quel contexte ? Combien de fois l'avez-vous entendue ? »

- **Q03-2** — `Probable · Dangereuse` `[Investisseur]`
  « Votre beachhead — les éditeurs SaaS — n'est **pas** soumis à DORA. Il subit la question de
  ses clients bancaires. Vous vendez donc à quelqu'un qui n'a aucune obligation légale, pour
  répondre à quelqu'un d'autre. C'est un achat forcé de seconde main : pourquoi ne
  paieraient-ils pas 0 € et ne répondraient-ils pas simplement "oui, on a un plan B" ? »

- **Q03-3** — `Probable · Dangereuse` `[Investisseur]`
  « Un éditeur SaaS de 50 salariés ne paie pas pour un dossier de conformité, il paie pour signer
  un contrat. Combien de contrats bloqués avez-vous identifiés, et pour quel montant ? »

- **Q03-4** — `Possible · Gérable` `[Jury]`
  « Le ≈100 000 mélange les millésimes Eurostat 2024 et 2025 et deux tailles d'entreprise. Ce
  chiffre a-t-il un sens autre que décoratif ? »

- **Q03-5** — `Probable · Dangereuse` `[Jury]`
  « "Où les trouver : Forum Fintech ACPR/AMF, France Digitale, réseaux CCI". Êtes-vous membre de
  l'un d'eux ? Y avez-vous déjà pris la parole ? Sinon, ce n'est pas un canal, c'est une liste
  d'envies. »

## Slide 04 — Un marché étroit, forcé — et assumé

> ⚠️ **À corriger avant la soutenance — slide 04** (la slide la plus exposée du deck)
>
> **1. La borne est sous le chiffre qu'elle borne** — `Q04-1`
> · *Slide* : ligne « TAM · Europe ≈ 1,5 → 10 Md€ », note « borné par conformité AI Act UE
> ≈ 560 M€ (DMR) · gouvernance IA ≈ 450 M€ (Gartner) ».
> · *Problème* : 560 + 450 = 1 010 M€ < 1 500 M€. Une borne inférieure au chiffre annoncé est
> auto-contradictoire ; c'est la première chose qu'un investisseur avec une calculette relève.
> · *Correction* : remplacer « borné par » par la **composition** (`FINDINGS` §9, au taux
> 1 $ ≈ 0,92 € affiché sur la slide) : conformité AI Act UE 609,4 M$ ≈ **560 M€** (Dimension
> Market Research, avr. 2026) + conformity assessment 0,8 Md$ ≈ **735 M€** (Fact.MR, juin 2026)
> + model risk management IA reste-Europe ~0,3 Md$ ≈ **275 M€** (MarketsandMarkets, août 2026)
> ≈ **1,57 Md€**. Libellé proposé : « somme de trois périmètres — estimation Titral ».
>
> **2. Le chiffre Gartner est mondial, présenté dans une ligne « Europe »** — `Q04-1`
> · *Slide* : « gouvernance IA ≈ 450 M€ (Gartner) » à l'intérieur de la ligne « TAM · Europe ».
> · *Problème* : `FINDINGS` §9 le donne comme **492 M$ monde** (Gartner, févr. 2026). Le
> périmètre géographique est faux tel qu'affiché.
> · *Correction* : soit le retirer de la ligne Europe, soit le libeller « gouvernance IA
> ≈ 450 M€ **monde** — repère de cohérence », hors du calcul du TAM européen.
>
> **3. Millésimes hétérogènes derrière le « ≈ 2 000 entités financières FR »** — mineur
> · *Slide* : « ≈ 2 000 entités financières FR sous DORA (ACPR + AMF) ».
> · *Problème* : l'agrégat de `FINDINGS` §9 mélange 776 entités bancaires **fin 2022**, 639
> organismes d'assurance **2024** et ~640 sociétés de gestion **2025**.
> · *Correction* : le dire « ordre de grandeur, sources ACPR/AMF 2022-2025 » et ne jamais le
> présenter comme un décompte à date.
>
> **4. Le « ×7 » et le « 35 %/an » ne sont pas le même chiffre** — à ne pas dire à l'oral
> · *Slide* : « ≈ 1,5 → 10 Md€ (2026→2035, ×7) ». Le ×7 est arithmétiquement juste.
> · *Problème* : cela équivaut à **≈ 23 %/an**, pas aux « ~35 %/an » de la synthèse
> `FINDINGS` §9 (qui reprend le TCAC 37,3 % de DMR sur son seul périmètre). Par ailleurs le
> 10 Md€ de 2035 ≈ le 10 534,9 M$ de DMR seul, donc la base de 2035 n'est pas la base composite
> de 2026.
> · *Correction* : à l'oral, dire « ×7 sur neuf ans, soit un peu plus de 20 % par an, borne haute
> DMR pour 2035 ». **Ne pas prononcer « 35 % par an »** en montrant 1,5 → 10 Md€.
>
> **5. Résolu — ne pas re-casser** : le « ≈ 13 % du TAM UE » du SAM est juste (200/1 500) et
> `FINDINGS` §9 a été aligné sur 13 %. Toute future réécriture doit conserver 13 %.

- **Q04-1** — `Probable · Dangereuse` `[Investisseur]`
  « Votre TAM 2026 est à ≈1,5 Md€ mais la note de bas de slide le dit "borné par" 560 M€ (DMR) et
  450 M€ (Gartner). 560 + 450 < 1 500. Votre borne est **sous** votre chiffre. Comment
  arrive-t-on à 1,5 Md€ ? »

- **Q04-2** — `Probable · Dangereuse` `[Investisseur]`
  « Le SAM France à 200 M€ est présenté comme ≈13 % du TAM UE. Pourquoi 13 % ? La France pèse
  environ 15 % du PIB de l'UE et environ 18 % de sa population active : votre part de marché
  ressemble à un chiffre choisi, pas calculé — quelle est la méthode ? »

- **Q04-3** — `Possible · Dangereuse` `[Investisseur]`
  « Le TAM que vous citez est celui de la **conformité AI Act et de la gouvernance IA**. Vous ne
  vendez ni l'une ni l'autre : vous vendez un test de substituabilité. Quelle part de ces
  budgets peut réellement atterrir sur votre ligne, et sur quel budget précis
  (Risques ? DSI ? Achats ?) »

- **Q04-4** — `Probable · Létale` `[Investisseur]`
  « 500 k€ d'ARR à 2–3 ans, ce n'est pas un dossier de capital-risque, c'est un cabinet de
  conseil. Où est le chemin vers 10 M€, et qu'est-ce qui change dans le produit pour y aller ? »

- **Q04-5** — `Possible · Gérable` `[Jury]`
  « Vous affichez 9,7 Md€ et 265 Md€ pour aussitôt écrire "pas notre marché". Pourquoi mettre des
  chiffres que vous désavouez dans la même phrase ? »

- **Q04-6** — `Possible · Dangereuse` `[Investisseur]`
  « 2 000 entités DORA en France, 20 à 30 comptes visés, 15–30 k€ par compte. Avec un cycle de
  vente de 9 à 12 mois annoncé sur la slide 10, il vous faut combien de commerciaux et combien
  de temps pour saturer ce SAM ? Le marché n'est pas étroit, il est minuscule. »

## Slide 05 — Testez et prouvez votre capacité de sortie

> ⚠️ **À corriger avant la soutenance — slide 05**
>
> **1. Le « Client Index » recopie la colonne Exactitude** — `Q05-3`
> · *Slide* : Exactitude 97 / 93 / 91 et Client Index 97 / 93 / 91 — colonnes identiques
> (vérifié dans le balisage, largeurs de jauge 97 % / 93 % / 91 %).
> · *Problème* : l'index est présenté comme une agrégation pondérée qualité / coût / latence.
> S'il vaut exactement l'exactitude, il n'agrège rien — et la colonne Prix (76 / 118 / 63) n'a
> visiblement aucun poids. Un lecteur attentif en conclut que le composite est décoratif.
> · *Correction* : changer les valeurs de la maquette pour que la pondération soit visible — par
> exemple Mistral (moins bon en exactitude que la référence mais moitié moins cher) doit sortir
> **au-dessus** de Claude sur l'index, sinon renommer la colonne « Exactitude pondérée ».
>
> **2. Aucun intervalle de confiance nulle part** — `Q14-5`
> · *Slide* : tous les scores sont des points secs (97, 96, 1, 118…).
> · *Problème* : la promesse du deck est « un verdict fiable à partir d'un échantillon minimal »
> (OED, annexe). Un verdict d'échantillon sans barre d'erreur est exactement ce qu'un auditeur
> ou un directeur des risques refuse de signer — et la question arrive dès qu'un juré technique
> lit le tableau.
> · *Correction* : afficher un « ± » sur au moins la colonne Exactitude, ou une note de bas de
> tableau « IC 95 % sur échantillon OED, n = … sessions ». Cohérent avec `R14-5` (verdict pris
> sur le bord défavorable de l'intervalle, pas sur la moyenne).
>
> **3. Rappel de cadrage** (pas un défaut, mais à dire) : le tableau est une **maquette
> illustrative** — modèles réels, scores non mesurés chez un client. À annoncer avant qu'on le
> demande, cf. `Q05-1`.

- **Q05-1** — `Certaine · Létale` `[Les deux]`
  « Ce tableau : résultat réel sur un client réel, ou maquette ? Si c'est une maquette, dites-le
  maintenant — et montrez-moi le premier vrai. »

- **Q05-2** — `Probable · Dangereuse` `[Investisseur]`
  « Vous notez la "Conformité" à 96 sur 100. Qui juge ? Un LLM-juge ? Un humain ? Comment un
  directeur des risques défend-il devant l'ACPR un score produit par un modèle d'IA notant un
  autre modèle d'IA ? »

- **Q05-3** — `Probable · Dangereuse` `[Investisseur]`
  « Votre "Client Index" vaut 97, 93, 91 — exactement les valeurs de la colonne Exactitude. Donc
  l'index composite n'ajoute rien ? Et qui fixe les seuils PASS / CONDITIONAL / FAIL ? Gemini
  échoue à 91 alors que Claude passe conditionnellement à 93 : deux points d'écart décident d'une
  migration à plusieurs centaines de milliers d'euros ? »

- **Q05-4** — `Certaine · Létale` `[Les deux]`
  « Vous rejouez des données de production réelles vers des fournisseurs tiers. RGPD, DPIA,
  sous-traitants, résidence des données, secret bancaire. Comment passez-vous le comité sécurité
  d'une banque en tant que société de deux personnes sans certification ? »

- **Q05-5** — `Probable · Dangereuse` `[Investisseur]`
  « Qui paie les tokens du rejeu ? Si c'est vous, un exit test à 3 k€ peut coûter 3 k€ de compute
  et votre marge brute est nulle. Si c'est le client, votre prix affiché est faux. »

- **Q05-6** — `Possible · Dangereuse` `[Investisseur]`
  « Un verdict "PASS" sur Mistral peut être invalidé la semaine suivante par une mise à jour de
  modèle. Vous vendez donc une photographie périmée — ou alors le "continu" n'est pas une option
  d'upsell, c'est une obligation. Laquelle des deux ? »

## Slide 06 — DORA impose des sorties prouvées. Le reste amplifie.

> ⚠️ **À corriger avant la soutenance — slide 06**
>
> **1. Le « 7 % » ne parle pas du sujet de la slide** — `Q06-3`
> · *Slide* : colonne AI Act, bas de colonne, « 7 % — du CA mondial — amende plafond ».
> · *Problème* : d'après `FINDINGS` §3, le plafond de 7 % du CA mondial (ou 35 M€) sanctionne les
> **pratiques interdites** de l'AI Act. Il n'a aucun lien avec l'absence de stratégie de sortie
> testée, qui est le sujet du deck. Placé là, il invite une question qui **affaiblit** le récit
> réglementaire au lieu de le renforcer.
> · *Correction* : retirer le chiffre, ou le remplacer par un chiffre qui sert le propos — par
> exemple **78 % des organisations sans action de conformité significative** (Vision Compliance,
> avr. 2026, `FINDINGS` §3) ou **83 % sans inventaire formel de leurs systèmes IA**. Et
> maintenir la règle : aucun montant d'amende DORA dans le deck (pas de « 10 % du CA » ;
> art. 35 = astreintes jusqu'à 1 % du CA journalier mondial moyen par jour, 6 mois max, pour les
> fournisseurs ICT critiques ; ACPR/AMF jusqu'à 10 M€).
>
> **2. « AOÛT 2026 → FIN 2027 » repose sur un accord provisoire** — ajout de ma relecture
> · *Slide* : la colonne AI Act présente le calendrier comme acté ; la source dit « Omnibus 2026 ».
> · *Problème* : `FINDINGS` §3 qualifie l'Omnibus IA d'**accord provisoire du 7 mai 2026**. Un
> juré juriste ou un investisseur qui suit le dossier relèvera qu'un texte non définitivement
> adopté est présenté comme du droit en vigueur.
> · *Correction* : dire à l'oral « report **prévu** par l'Omnibus, accord provisoire de mai 2026 »
> et garder la formulation prudente sur la slide. Cela renforce la crédibilité au lieu de la
> réduire : c'est vous qui connaissez le statut du texte.
>
> **3. À vérifier avant de l'affirmer** : ma réponse `R06-4` affirme qu'aucun des 19 fournisseurs
> tiers critiques désignés par les ESA (oct. 2025) n'est un fournisseur d'IA. `FINDINGS` §3
> documente les 19 CTPP mais **pas** leur nature. Vérifier la liste publiée par les ESA avant de
> le dire devant le jury, ou formuler « à ma connaissance, essentiellement du cloud et du
> paiement ».

- **Q06-1** — `Certaine · Létale` `[Les deux]`
  « DORA est en vigueur depuis janvier 2025. Si l'article 28 imposait vraiment ce que vous
  décrivez, le marché existerait déjà. Connaissez-vous **un seul cas** où un régulateur, l'ACPR
  ou l'AMF, a exigé un test de sortie sur un fournisseur d'**IA** ? »

- **Q06-2** — `Probable · Dangereuse` `[Investisseur]`
  « L'Omnibus a repoussé le haut risque de l'AI Act à décembre 2027. Votre "pourquoi maintenant"
  vient donc de perdre 18 mois. Qu'est-ce qui reste urgent en 2026 ? »

- **Q06-3** — `Probable · Dangereuse` `[Les deux]`
  « Le 7 % du chiffre d'affaires que vous affichez concerne les pratiques **interdites** de l'AI
  Act, pas le défaut de plan de sortie. Et DORA ne prévoit aucune amende générique. Le bâton
  est-il aussi lourd que la slide le suggère ? »

- **Q06-4** — `Possible · Gérable` `[Investisseur]`
  « Les 19 fournisseurs tiers critiques désignés par les ESA sont essentiellement des acteurs du
  cloud et du paiement. Aucun fournisseur d'IA n'y figure. Votre chiffre parle donc d'un autre
  problème que le vôtre, non ? »

- **Q06-5** — `Possible · Gérable` `[Les deux]`
  « Un LLM appelé par une application bancaire est-il juridiquement un service ICT "supportant une
  fonction critique ou importante" au sens de DORA ? Qui l'a tranché ? »

## Slide 07 — Une brique encore manquante : prouver la substituabilité

> ⚠️ **Hygiène documentaire, pas erreur de slide — slide 07**
>
> · *La slide est factuellement défendable* : « GRC · audits conformité — documentent le modèle en
> place, ne migrent jamais » est une caractérisation, pas une attaque, et elle tient.
> · *Le problème est dans un autre document* : `research/06-concurrents.md` qualifie les audits
> Big 4 de « RFP theater producing glossy scorecards » et de « scorecards figées », en nommant
> Deloitte, PwC, EY et **KPMG**. Or **KPMG Reims cofinance Innovact** (`FINDINGS` §7).
> · *Correction* : reformuler ces deux expressions **avant tout envoi** du dossier ou de l'annexe
> concurrentielle au jury, et ne jamais les prononcer. Message de remplacement : la limite n'est
> pas la qualité du travail des cabinets mais sa **fréquence** — un audit est juste le jour du
> rendu, périmé à la mise à jour de modèle suivante. Positionnement : sous eux, pas contre eux
> (cf. `R07-3`, et le canal prescripteur de la slide 10).
> · *Aucun chiffre de la slide 07 n'est en cause.*

- **Q07-1** — `Probable · Dangereuse` `[Investisseur]`
  « Ce 2×2 a des axes choisis pour que votre coin soit vide. Avec les axes "coût d'intégration"
  et "base installée", vous êtes seuls dans le coin **désavantageux**. Pourquoi ces axes-là ? »

- **Q07-2** — `Probable · Dangereuse` `[Investisseur]`
  « Braintrust et Langfuse font déjà du replay de traces et de la comparaison multi-modèles.
  OpenRouter compare des modèles nativement. Votre différence est-elle un produit, ou une
  intention commerciale ? »

- **Q07-3** — `Probable · Dangereuse` `[Jury]` — **KPMG est financeur d'Innovact**
  « Vous écrivez que les audits conseil sont du "RFP theater" produisant des "scorecards figées".
  Je suis associé chez l'un de ces cabinets. Vous nous remplacez, ou vous nous vendez quelque
  chose ? »

- **Q07-4** — `Possible · Dangereuse` `[Investisseur]`
  « Vous dites que les gateways sont des partenaires. Un gateway voit déjà passer tout le trafic
  de son client vers tous les fournisseurs. Il est **mieux** placé que vous pour faire ce
  benchmark. Pourquoi partenaire et pas prédateur ? »

- **Q07-5** — `Possible · Gérable` `[Jury]`
  « Où est votre vrai concurrent : le tableur Excel du directeur des risques, et l'inaction. Que
  répondez-vous à "on le fera en interne avec deux stagiaires" ? »

## Slide 08 — La barrière n'est pas le produit, c'est la méthode

✅ **Aucun problème factuel identifié** sur cette slide : elle ne contient aucun chiffre et elle
affiche elle-même le risque de comblement. La faiblesse est stratégique — « track record » présenté
comme barrière à l'entrée (`Q08-4`) — pas factuelle.

- **Q08-1** — `Certaine · Létale` `[Les deux]`
  « "La barrière, c'est la méthode." Une méthode ne se dépose pas. Brevet ? Publication ? Dataset
  propriétaire ? Effet de réseau ? Qu'est-ce qui est **opposable** chez vous ? »

- **Q08-2** — `Certaine · Létale` `[Investisseur]`
  « Vous écrivez vous-même en bas de slide que le risque de comblement existe. Qu'est-ce qui
  empêche Langfuse d'ajouter le rejeu cross-fournisseur en un trimestre — et vous, que
  faites-vous pendant ce trimestre ? »

- **Q08-3** — `Probable · Dangereuse` `[Investisseur]`
  « L'OED est de la littérature académique publique depuis les années 1970. Deux bons doctorants
  la réimplémentent. Où est l'avance de six ans, mesurable ? »

- **Q08-4** — `Probable · Dangereuse` `[Investisseur]`
  « Vous citez le "track record d'exécution des fondateurs (AIO)" **comme barrière à l'entrée**.
  Un track record n'est pas une barrière, c'est une raison de vous financer. Ce n'est pas la même
  chose. Quelle est la barrière une fois le premier client signé ? »

- **Q08-5** — `Possible · Dangereuse` `[Investisseur]`
  « Y a-t-il un actif qui s'accumule client après client — un référentiel de tâches, des
  distributions de performance par usage, un modèle de coût ? Si oui, c'est ça votre moat, pas
  l'OED. Si non, chaque client repart de zéro et vous êtes une agence. »

## Slide 09 — Land & expand — de l'exit test à l'assurance continue

> ⚠️ **À corriger avant la soutenance — slide 09** (même item que sur la slide 10)
>
> **1. « Exit test » désigne deux choses différentes selon la slide** — `Q10-2`
> · *Slide 09* : « Titral AI Exit Test — hypothèse : 3–10 k€ one-shot ». *Slide 10* : l'entonnoir
> se termine par « 10 exit tests → 2–3 design partners rémunérés ».
> · *Problème* : les deux lectures sont incompatibles. Si les 10 exit tests sont vendus au prix de
> la slide 09, il y a 10 clients payants (30 à 100 k€ à M+6) et non 2–3, et le deck sous-estime
> sa propre ambition. Si ce sont des pilotes gratuits, alors le produit d'appel de la slide 09
> n'a pas de prix dans l'entonnoir. Un jury lit l'incohérence en dix secondes.
> · *Correction* : trois termes, un sens chacun, appliqués aux slides 09, 10 et 11 —
> **pilote de cadrage** (gratuit ou symbolique, données du prospect) → **exit test** (produit
> payant, 3–10 k€) → **design partner** (engagement payant avec périmètre et calendrier). Puis
> reconstruire l'entonnoir avec ce vocabulaire.

- **Q09-1** — `Certaine · Létale` `[Les deux]`
  « Vos prix sont libellés "hypothèses". Sur quoi reposent-ils ? Combien de personnes ont dit
  "à 8 k€ j'achète" ? »

- **Q09-2** — `Probable · Dangereuse` `[Investisseur]`
  « 3–10 k€, c'est en dessous du seuil qui justifie un cycle d'achat de 3 à 6 mois. Vous vendez
  cher en effort et pas cher en prix : votre CAC va dépasser votre première commande. Comment
  ça tient ? »

- **Q09-3** — `Probable · Dangereuse` `[Investisseur]`
  « "CAC < 5 k€ founder-led" : votre temps y est-il valorisé ? Sans salaire fondateur, ce n'est
  pas un CAC, c'est un artefact comptable. Refaites le calcul avec deux salaires de marché. »

- **Q09-4** — `Probable · Dangereuse` `[Investisseur]`
  « Pourquoi un client renouvellerait-il 15–30 k€ par an après avoir reçu son plan de sortie ?
  L'exigence DORA est un réexamen **périodique** — annuel suffit peut-être. Vous vendez du
  continu à un marché qui n'a besoin que d'annuel. »

- **Q09-5** — `Possible · Dangereuse` `[Investisseur]`
  « Quel est votre coût de livraison réel d'un exit test — jours-homme plus compute ? Si vous
  ne le savez pas, vous ne savez pas si votre pricing est viable. »

- **Q09-6** — `Possible · Gérable` `[Jury]`
  « Un cabinet de conseil facture cette prestation 50 à 100 k€. Vous à 3–10 k€. Vous détruisez
  votre propre pricing power avant même d'avoir un client : pourquoi ne pas entrer à 25 k€ ? »

## Slide 10 — Un GTM déclenché par les événements, pas par les secteurs

> ⚠️ **À corriger avant la soutenance — slide 10**
>
> **1. L'entonnoir contredit le pricing de la slide 09** — `Q10-2`
> · *Slide* : « 300 contacts → 30 démos → 10 exit tests → 2–3 design partners rémunérés » ; la
> slide 09 vend l'exit test 3–10 k€.
> · *Problème* : soit 10 clients payants (et le « 2–3 » est faux), soit 10 pilotes gratuits (et
> « exit test » ne veut pas dire la même chose que sur la slide 09). Voir le détail dans l'encadré
> de la slide 09.
> · *Correction* : renommer l'étape « 10 pilotes de cadrage » et réserver « exit test » au produit
> payant, sur les trois slides concernées (09, 10, 11).
>
> **2. « J+6 » se lit comme six jours** — `Q13-5`
> · *Slide* : « Pipeline cible · J+6 ».
> · *Problème* : devant un jury français, `J+n` signifie « jour + n ». Le deck veut dire des mois
> (la slide 13 titre elle-même « Jalons 6–12 mois »). Deux lectures possibles = perte de
> crédibilité immédiate ou, pire, promesse involontaire à six jours.
> · *Correction* : `J+6` → **`M+6`** (mois à compter de l'entrée en incubation). Occurrences à
> traiter en même temps : slide 11 « 20 entretiens (J+3) → 2–3 design partners rémunérés (J+6) »
> et slide 13 « J+6 / J+9 / J+12 ». **Attention** : toutes les réponses de la Partie 2 de ce
> document utilisent déjà M+3 / M+6 / M+9 / M+12 — tant que le deck n'est pas corrigé, vous
> direz à l'oral autre chose que ce qui est projeté.

- **Q10-1** — `Certaine · Létale` `[Les deux]`
  « 300 contacts → 30 démos, soit 10 % de conversion en froid. Le standard du cold outbound est
  de 1 à 3 %. Puis 30 démos → 10 exit tests, 33 %. D'où viennent ces taux ? »

- **Q10-2** — `Probable · Dangereuse` `[Les deux]`
  « Votre entonnoir dit 10 exit tests **puis** 2–3 design partners rémunérés. La slide 09 vend
  l'exit test 3–10 k€. Donc soit vos 10 exit tests sont gratuits — et votre produit d'appel n'a
  pas de prix — soit vous avez 10 clients payants et non 3. Lequel ? »

- **Q10-3** — `Probable · Dangereuse` `[Jury]`
  « "≈150 éditeurs SaaS / IA B2B français" : cette liste existe-t-elle sur votre disque, avec des
  noms ? Montrez-la. »

- **Q10-4** — `Probable · Dangereuse` `[Investisseur]`
  « Vos trois triggers sont réactifs : vous attendez qu'un RFP tombe, qu'une revue DORA s'ouvre,
  qu'un prix bouge. Comment construit-on un pipeline prévisible sur des événements que vous ne
  contrôlez pas et dont vous n'êtes pas informés ? »

- **Q10-5** — `Possible · Dangereuse` `[Investisseur]`
  « De 10 clients à 100 par "références publiables" : vos clients accepteront-ils de publier
  qu'ils préparent la sortie de leur fournisseur d'IA ? C'est une information sensible,
  contractuellement et politiquement. »

- **Q10-6** — `Possible · Gérable` `[Jury]`
  « "60 % du temps fondateur sur 6 mois" — 60 % de quoi ? Et les 40 % restants vont où ? »

## Slide 11 — Ce qui est prouvé, ce qui reste à prouver

> ⚠️ **À corriger avant la soutenance — slide 11**
>
> **1. « Projet Google Foundation » laisse croire à un adossement Google** — `Q11-3`
> · *Slide* : « Briques testées sur des workloads IA en production — projet Google Foundation »
> (formulation reprise sur la slide 12 : « dans le cadre d'un projet Google Foundation »).
> · *Problème* : l'intitulé est trop vague pour être vérifiable et assez évocateur pour être lu
> comme une validation par Google. `FINDINGS` ne documente ni le programme, ni les dates, ni la
> nature du soutien. Devant un jury qui peut vérifier, c'est un risque de crédibilité
> disproportionné par rapport au gain.
> · *Correction* : soit le **nom exact du programme**, les dates, la nature du soutien (crédits
> cloud ? subvention ? contrat ? programme d'accompagnement ?) et un référent nommé ; soit une
> reformulation neutre du type « briques éprouvées sur des workloads IA en production (projet
> client, sous NDA) ». Choisir avant la soutenance, pas pendant.
>
> **2. « J+3 / J+6 » se lisent comme des jours** — `Q13-5`
> · *Slide* : « Jalon immédiat et mesurable — 20 entretiens (J+3) → 2–3 design partners rémunérés
> (J+6) ».
> · *Correction* : `M+3` et `M+6`. Voir l'encadré de la slide 10 pour les autres occurrences.
>
> **3. Vocabulaire « design partner »** : à harmoniser avec les slides 09 et 10 (pilote de cadrage
> vs exit test payant vs design partner) — voir l'encadré de la slide 09.
>
> ✅ *Pour mémoire, ce que cette slide fait bien* : « Pré-revenus — stade early » est écrit noir sur
> blanc et l'échelle de preuve place « design partner payant » du côté non acquis. C'est la slide
> la plus honnête du deck : ne l'affaiblissez pas en la surinterprétant à l'oral.

- **Q11-1** — `Certaine · Létale` `[Les deux]`
  « Combien d'entretiens clients avez-vous menés à ce jour, avec qui nommément, et
  qu'avez-vous appris qui a **changé** ce deck ? »

- **Q11-2** — `Certaine · Dangereuse` `[Les deux]`
  « "Méthodologie OED et pipeline de rejeu opérationnels — 10 mois de construction" : construits
  pour Titral, ou récupérés d'AIO ? Que peut-on voir tourner **aujourd'hui**, en direct ? »

- **Q11-3** — `Probable · Dangereuse` `[Jury]`
  « "Projet Google Foundation" : c'est quoi exactement ? Un programme, une subvention, un contrat,
  un crédit cloud ? Montant, dates, référent ? »

- **Q11-4** — `Probable · Dangereuse` `[Les deux]`
  « "Problème observé en direct sur des systèmes IA en production" : les vôtres, chez AIO. C'est
  n=1 et c'est vous-mêmes. En quoi est-ce une validation de marché ? »

- **Q11-5** — `Probable · Létale` `[Les deux]`
  « 20 entretiens à J+3 et 2–3 design partners payants à J+6. Vous êtes deux, à temps partiel,
  sans réseau français dans la finance. Qu'est-ce qui vous a empêché de faire ces 20 entretiens
  **avant** aujourd'hui ? »

## Slide 12 — Une équipe qui a déjà construit et opéré l'IA en production

> ⚠️ **À corriger avant la soutenance — slide 12**
>
> **1. « Projet Google Foundation », même problème que sur la slide 11** — `Q11-3`
> · *Slide* : troisième preuve d'exécution — « 2026 : briques opérationnelles construites sur des
> cas réels dans le cadre d'un projet Google Foundation ».
> · *Problème* : placé dans une bande intitulée « Preuves d'exécution », à côté de
> « Studiare → Kroton » et « AIO », l'intitulé se lit comme un troisième adossement institutionnel.
> Ni le programme, ni les dates, ni la nature du soutien ne sont documentés dans `FINDINGS`.
> · *Correction* : nom exact du programme + dates + nature du soutien + référent, ou reformulation
> neutre. Même décision que pour la slide 11, à prendre une seule fois pour les deux.
>
> ✅ *Le reste de la slide est vérifié* dans `FINDINGS` §6 (Studiare → Kroton 2015 ; AIO 2020,
> 70 000+ étudiants ; Morgan Stanley / Santander / Banco BBM ; CEA Saclay ; Polytechnique ; DEA
> El Karoui). Deux points restent non chiffrables et il faut le dire plutôt que de broder : le
> **montant** de l'acquisition Studiare n'est pas public (`Q12-1`), et « Fondateur » sans CEO/CTO
> est une décision éditoriale assumée (`FINDINGS` §8).

- **Q12-1** — `Probable · Gérable` `[Les deux]`
  « Studiare, acquise par Kroton en 2015 : pour quel montant, et quel a été votre gain personnel ?
  Un exit sans chiffre reste une affirmation. »

- **Q12-2** — `Probable · Dangereuse` `[Investisseur]`
  « Deux profils quant / physicien / data. Personne n'a jamais vendu à une direction des risques
  européenne. Votre cycle de vente annoncé est de 9 à 12 mois avec comité d'achat. Qui fait
  ça ? »

- **Q12-3** — `Certaine · Létale` `[Jury]`
  « AIO tourne au Brésil avec 70 000 étudiants. Quel pourcentage de votre temps va à Titral, à
  partir de quelle date, et qui opère AIO pendant ce temps ? Y a-t-il un risque de conflit
  d'intérêts ou de propriété intellectuelle entre AIO et Titral ? »

- **Q12-4** — `Probable · Dangereuse` `[Jury]`
  « Vous pitchez un produit de conformité **européen** depuis une base opérationnelle
  **brésilienne**. Où sont les données, où est la société, qui signe le contrat de
  sous-traitance RGPD ? »

- **Q12-5** — `Possible · Gérable` `[Les deux]`
  « Qui est le premier recrutement, quand, et payé comment ? »

## Slide 13 — Pourquoi Innovact, pourquoi maintenant

> ⚠️ **À corriger avant la soutenance — slide 13**
>
> **1. « J+6 / J+9 / J+12 » contredit le titre de la même slide** — `Q13-5`
> · *Slide* : le bloc s'intitule « Jalons 6–12 mois » et les trois jalons sont notés
> « J+6 », « J+9 », « J+12 ».
> · *Problème* : `J+n` = jour + n en français. Le titre dit mois, la notation dit jours, sur la
> **même slide** — c'est l'incohérence la plus facile à relever de tout le deck, et elle porte sur
> vos engagements devant le jury.
> · *Correction* : `M+6 / M+9 / M+12`, en précisant le point de départ (« à compter de l'entrée en
> incubation »). Idem slides 10 et 11. Les réponses de la Partie 2 utilisent déjà M+.
>
> **2. « Adhérents CCI Marne = premier pipeline » n'est pas vérifié** — `Q13-2`
> · *Slide* : « adhérents CCI Marne = premier pipeline : banques, mutuelles, assurances
> champenoises », en gras.
> · *Problème* : affirmation non étayée — rien dans `FINDINGS` ne documente la présence d'un
> acheteur DORA décisionnaire dans le périmètre de la CCI Marne, et pour les réseaux bancaires la
> décision d'achat est généralement nationale. Devant un jury dont la CCI Marne est membre
> fondateur, une affirmation fausse sur leur propre écosystème coûte cher.
> · *Correction* : dégonfler en « accès aux **entretiens** et aux introductions », et poser la
> question au jury plutôt que de lui répondre à sa place.
>
> ✅ *Chiffres vérifiés* : Quest for Change 300 startups et 114 M€ levés en 2025 (`FINDINGS` §7).

- **Q13-1** — `Certaine · Dangereuse` `[Jury]`
  « "Fondateur installé à Reims depuis trois ans" — au singulier. Et l'autre ? Combien de jours
  par mois serez-vous physiquement à Reims ? »

- **Q13-2** — `Probable · Dangereuse` `[Jury]`
  « "Adhérents CCI Marne = premier pipeline : banques, mutuelles, assurances champenoises". Une
  agence régionale de banque n'achète pas de logiciel : la décision est à Paris. Avez-vous
  vérifié qu'il existe un acheteur DORA dans le périmètre de la CCI Marne ? »

- **Q13-3** — `Probable · Dangereuse` `[Jury]`
  « Qu'attendez-vous précisément d'Innovact, en une phrase, et à quoi verrons-nous dans six mois
  que nous avons servi à quelque chose ? »

- **Q13-4** — `Certaine · Létale` `[Les deux]`
  « Quel est votre besoin de financement, votre burn mensuel, votre runway actuel ? Ce deck ne
  contient aucun chiffre financier vous concernant. »

- **Q13-5** — `Probable · Dangereuse` `[Les deux]`
  « Vos jalons s'appellent J+6, J+9, J+12. J comme jour ? Comme mois ? À partir de quand ?
  Et si les 2–3 design partners ne signent pas à J+6, quel est le plan B ? »

- **Q13-6** — `Possible · Gérable` `[Jury]`
  « Pourquoi Innovact et pas Station F, Wilco ou un accélérateur fintech parisien, où sont vos
  clients ? Soyez honnêtes : Reims est-il un choix ou une conséquence ? »

## Annexe — Création et exécution des simulations réalistes des workflows IA

✅ **Aucun problème factuel identifié** sur cette page : aucun chiffre, aucune source, aucune
affirmation de traction. Réserve méthodologique et non factuelle : la page promet un « verdict
fiable sur tout le périmètre » sans jamais montrer d'intervalle de confiance — même angle mort que
la maquette de la slide 05 (voir son encadré et `Q14-5`).

- **Q14-1** — `Probable · Dangereuse` `[Investisseur]`
  « Comment prouvez-vous que votre échantillon OED donne le **même** verdict qu'un rejeu
  exhaustif ? Avez-vous déjà fait tourner les deux côte à côte ? »

- **Q14-2** — `Probable · Dangereuse` `[Investisseur]`
  « Les workflows réels sont agentiques : appels d'outils, écritures en base, effets de bord,
  non-déterminisme, multi-tours. On ne "rejoue" pas ça comme une requête HTTP. Comment
  gérez-vous les effets de bord et les états ? »

- **Q14-3** — `Probable · Dangereuse` `[Les deux]`
  « Installer un SDK dans le chemin de production d'une banque, c'est un projet de six mois avec
  revue d'architecture. Votre plan B, l'ingestion de logs, suppose des logs complets — ce qui est
  rare. Combien de temps entre la signature et le premier verdict ? »

- **Q14-4** — `Possible · Dangereuse` `[Investisseur]`
  « Rejouer sur un fournisseur alternatif sans réécrire les prompts sous-estime la cible :
  chaque modèle a besoin de son propre prompt engineering. Votre verdict "FAIL" est peut-être un
  échec de portage, pas un échec de modèle. Comment évitez-vous ce biais ? »

- **Q14-5** — `Possible · Gérable` `[Investisseur]`
  « Vous donnez un intervalle de confiance avec votre verdict ? Un directeur des risques ne peut
  pas signer un point sans incertitude. »

---
---

# PARTIE 2 — LES RÉPONSES

Règles de diction : 3 à 6 phrases, on cite la source comme elle est citée dans le deck, on ne
revendique **jamais** de traction inexistante. Quand la réponse est « on ne sait pas encore », on
le dit et on donne la date qui tranche. `Si on insiste :` = la deuxième pression.

## R01 — Titral · Continuous AI Exit Readiness

**R01-1** — Il reçoit trois livrables : un classement de ses alternatives réelles sur ses propres
flux (qualité, coût, latence, effort de portage), un plan de sortie applicatif par applicatif, et
un dossier de preuves daté et rejouable pour l'article 28 de DORA. Ce qu'il n'a pas : nous ne
migrons pas à sa place et nous ne remplaçons pas son gateway — nous disons **vers quoi** aller,
pas **comment** y aller. Concrètement, il passe de « nous avons un plan B sur le papier » à « nous
avons mesuré que le flux support client peut basculer sur Mistral avec 3 points de qualité en
moins et 24 % de coût en moins ».
*Si on insiste :* « La phrase test, c'est celle de la slide 02 : "si notre fournisseur devient
indisponible demain, vers quoi basculer et avec quel impact ?" Aujourd'hui personne ne sait
répondre avec un chiffre. »

**R01-2** — Le nom vient du titrage : mesurer précisément à partir d'un échantillon minimal — c'est
exactement notre méthode, et c'est explicité sur la slide d'ouverture. L'anglais est assumé parce
que nos acheteurs vivent dans un vocabulaire anglophone : DORA exit strategy, TPRM, vendor
lock-in. Cela dit, c'est une hypothèse marketing comme les autres et elle passera au test des
20 entretiens : si « test de réversibilité fournisseur » convertit mieux, nous changerons le
sous-titre — pas la technologie.

**R01-3** — La répartition opérationnelle est claire même si les titres du deck sont volontairement
neutres : Murilo porte la méthode OED et la relation investisseurs, Thiago porte la plateforme et
la livraison client ; le développement commercial est founder-led et partagé sur les six premiers
mois. Sur la structure : **c'est une décision à trancher et un point sur lequel nous voulons
l'aide d'Innovact** — nous visons une SAS française domiciliée dans le Grand Est, capital réparti
50/50 avec vesting sur quatre ans. Nous préférons vous dire l'état réel plutôt que d'annoncer une
société qui n'a pas encore d'extrait Kbis.
*Si on insiste :* donner la date cible d'immatriculation et le nom du cabinet qui la prépare.
**À préparer :** décision écrite sur la forme juridique, le siège, la répartition du capital et le
vesting — une slide backup « structure » avec dates.

**R01-4** — Le risque existe et il est asymétrique : nos rejeux sont des appels API payants et
standards, faits avec le consentement du client sur ses propres données ; nous ne publions aucun
leaderboard public, ce qui est justement ce que les CGU de la plupart des fournisseurs interdisent
(benchmark comparatif publié). Notre position est celle d'un client qui compare ses propres
options, pas celle d'un évaluateur public — c'est une des raisons pour lesquelles la slide 05
insiste sur « benchmark client, pas leaderboard public ». Si un fournisseur durcissait ses
conditions, cela nous coûterait ce fournisseur comme **cible** de migration, pas notre produit.
**À préparer :** revue des CGU d'OpenAI, Anthropic, Google, Mistral sur le benchmarking, une page,
à avoir sous la main.

## R02 — Le problème

**R02-1** — Vous avez raison sur le biais, et c'est pour cela que nous ne construisons pas
l'argument sur un seul chiffre. Le 71 % vient d'IBM IBV, *The Calculus of AI Sovereignty*
(juin 2026, 1 000 dirigeants) — déclaratif, effectivement. Le chiffre qui n'est pas déclaratif,
c'est Menlo Ventures (déc. 2025, 150 décideurs techniques) : 66 % des équipes upgradent chez leur
fournisseur, 23 % ne changent rien, **11 % seulement changent de fournisseur** — la substitution
est un événement rare, donc non maîtrisé. Et la contrainte, elle, n'est pas déclarative du tout :
l'article 28 de DORA est en vigueur depuis le 17 janvier 2025. La preuve qu'il y a un budget, elle,
nous ne l'avons pas encore : elle sortira des 20 entretiens.

**R02-2** — Exact, et c'est notre principale hypothèse à valider. Notre pari est que la douleur
n'est pas ressentie par la DSI mais **importée** par le client ou le régulateur : le déclencheur
n'est pas « je veux changer de fournisseur », c'est « on me demande de prouver que je peux ». C'est
pourquoi la slide 10 organise tout le GTM autour de trois événements et non autour de secteurs.
Si les 20 entretiens montrent qu'aucun de ces trois événements ne produit de budget, l'hypothèse
est fausse et nous préférerons le savoir en trois semaines qu'en trois ans.

**R02-3** — Aucun des trois n'est notre preuve, ce sont trois cadrages du même phénomène et nous
l'assumons : Insee (n° 2120, données 2025) montre que l'IA est installée chez les grandes
entreprises françaises, IBM que la dépendance est perçue, DORA qu'il existe 22 000 entités
légalement tenues de tester leurs sorties. La cohérence est temporelle : les éditeurs SaaS sont le
point d'entrée **parce que** leurs clients sont dans les 22 000 — ils reçoivent la question avant
d'y être soumis. Notre preuve à nous, aujourd'hui, est technologique, pas commerciale : la
slide 11 le dit noir sur blanc.

**R02-4** — C'est précisément l'inverse de notre lecture : 11 % de changements ne veut pas dire
« pas de besoin », cela veut dire « pas de capacité ». On ne change pas ce qu'on ne sait pas
mesurer — le verrou est comportemental et informationnel. Notre produit n'est d'ailleurs pas de
faire changer les gens : nous vendons la **preuve de réversibilité**, qui a de la valeur même
quand le client reste chez son fournisseur — comme levier de négociation et comme pièce de
conformité. Un client qui ne migre pas mais renégocie de 15 % a payé son exit test cent fois.

## R03 — Qui achète / Marché

> ⚠️ **Fix-list slide 03** (détail : Partie 1) — la citation « stratégie de sortie d'OpenAI » doit
> être attribuée honnêtement ou perdre ses guillemets. `LETALE` si on la découvre en séance.

**R03-1** — Réponse honnête : c'est une reconstitution de ce que nous avons vécu et entendu dans
notre propre activité IA en production, pas un verbatim client sourcé. Nous ne l'avons pas
comptée : à ce jour nous avons entre zéro et deux entretiens de discovery formels, et c'est écrit
dans nos findings. C'est exactement pour ça que le jalon des 20 entretiens à trois mois existe :
notre objectif n'est pas de vous convaincre que la citation est fréquente, c'est de compter combien
de fois elle revient sur 20 conversations, et avec quel montant de contrat derrière.
*Si on insiste :* « Si sur 20 entretiens moins de cinq ont vécu ce blocage, notre beachhead est
faux et nous basculons sur l'entrée directe entités DORA. »
**À préparer :** slide backup « discovery » — les 20 noms cibles, le script d'entretien, les trois
questions qui invalident l'hypothèse.

**R03-2** — Oui, et c'est un choix : l'éditeur SaaS n'a pas l'obligation, il a **l'urgence**. La
contrainte est portée par son client bancaire, mais le coût du blocage est porté par lui — un
contrat qui ne se signe pas se chiffre immédiatement, une amende hypothétique non. Répondre « oui,
on a un plan B » gratuitement fonctionne jusqu'au moment où l'acheteur demande la preuve, et c'est
exactement ce que l'article 28 de DORA impose à l'acheteur d'obtenir : des stratégies de sortie
documentées **et testées**. Notre pari est que la personne qui paie 5 k€ est le CEO ou le CRO d'un
éditeur avec 300 k€ d'ARR bloqués, pas un responsable conformité avec un budget annuel.

**R03-3** — Zéro identifié nommément à ce jour — nous sommes pré-revenus et sans discovery
significative, et nous ne prétendrons pas le contraire. Ce que nous savons faire, c'est le
mesurer : la première question du script d'entretien est « avez-vous reçu une question de sortie
ou de fallback dans un RFP ces 12 derniers mois, et quel montant était en jeu ? ». À M+3 nous
aurons une distribution sur 20 réponses ; à M+6 nous aurons 2 à 3 design partners payants ou la
démonstration que ce segment ne paie pas.

**R03-4** — Il a un sens et un seul : un ordre de grandeur du terrain, et la slide l'écrit comme
tel avec son calcul apparent (251 k × 30,4 % + 55 k × 55 %, Eurostat 2024-2025). Ce n'est ni un TAM
ni une cible — la phrase juste en dessous dit « nous n'attaquons pas les 100 000 ». Nous préférons
un ordre de grandeur transparent, avec ses millésimes visibles, à un chiffre d'étude payante que
nous ne pourrions pas reconstruire devant vous.

**R03-5** — Aujourd'hui : non, aucun. C'est une liste de canaux identifiés, pas de canaux activés,
et c'est un des trois besoins que nous venons chercher chez Innovact — avec la CCI Marne comme
membre fondateur, vous êtes justement le raccourci vers ces réseaux. Le jalon vérifiable que nous
vous proposons : dans les 90 jours, membre de France Digitale et présence à un événement
ACPR/AMF ou DORA, avec un compte-rendu de rendez-vous à la clé.

## R04 — Marché adressable

> ⚠️ **Fix-list slide 04** (détail : Partie 1) — « borné par » → addition des trois sources
> (560 + 735 + 275 ≈ 1,57 Md€) · Gartner 450 M€ = **monde**, pas Europe · « ≈ 2 000 entités FR » =
> millésimes 2022-2025 · ne pas dire « 35 %/an » devant un ×7 sur neuf ans (≈ 23 %/an) ·
> 13 % du SAM : résolu, ne pas re-casser.

**R04-1** — La formulation « borné par » de la note est maladroite et je la corrige : 1,5 Md€ n'est
pas borné par ces deux chiffres, il est **composé** de trois périmètres additionnés — conformité AI
Act Europe 609 M$ (Dimension Market Research, avr. 2026), conformity assessment 0,8 Md$ (Fact.MR,
juin 2026) et model risk management IA reste-Europe ~0,3 Md$ (MarketsandMarkets, août 2026), soit
environ 1,7 Md$ ≈ 1,5 Md€ au taux de 0,92 indiqué sur la slide. Le 450 M€ de Gartner est un chiffre
**mondial** sur la gouvernance IA, il sert de contrôle de cohérence, pas de borne européenne.
C'est une estimation Titral top-down, la slide et nos findings le disent, et elle sera remplacée
par du bottom-up dès que nous aurons un prix validé.
*Si on insiste :* « Le seul TAM qui compte pour vous à ce stade, c'est 2 000 entités × un prix
validé. Aujourd'hui le prix n'est pas validé, donc je vous donne le top-down en assumant sa
faiblesse. »
**À préparer :** la ligne d'addition des trois sources, chiffrée, sur une slide backup — et
corriger le mot « borné » dans la note de la slide 04.

**R04-2** — C'est un chiffre choisi, pas calculé, et il faut l'appeler par son nom : nous avons
retenu une part France comprise entre 13 et 15 % du marché européen de la conformité, cohérente
avec le poids de la France dans l'UE et avec Fact.MR qui la classe deuxième base européenne de
conformity assessment avec +36,9 % par an. La slide affiche 13 %, soit exactement 200 sur 1 500, et
nos notes de recherche sont alignées sur cette valeur : c'est la borne prudente des deux. Le SAM
défendable, celui que je vous invite à retenir, est le bottom-up : ≈2 000 entités financières
françaises sous DORA (ACPR/AMF), plus santé et fournisseurs du public — ordre de grandeur, sources
ACPR/AMF de millésimes 2022 à 2025.

**R04-3** — La part atterrissable est petite et nous l'assumons : nous n'attaquons pas le budget
« gouvernance IA » global mais une ligne précise — le test de réversibilité fournisseur, arbitré
par le directeur des risques ou le CTO, sur le budget résilience/TPRM déjà existant depuis DORA.
L'ancrage de prix pertinent n'est donc pas le TAM, c'est ce que ces organisations paient déjà pour
des outils voisins : les offres entreprise d'observabilité LLM démarrent autour de 2,5 k$ par mois
(tarifs publics Langfuse, LangSmith, Braintrust). Notre SOM à 500 k€ se lit d'ailleurs comme
« moins de 1 % de pénétration du SAM » — nous n'avons pas besoin que le TAM soit juste pour que
le dossier tienne.

**R04-4** — D'accord, et c'est volontaire : le SOM à 500 k€ est le jalon de **crédibilité** à 2-3
ans, pas le plafond du dossier. Le chemin vers 10 M€ passe par trois changements documentés sur la
slide 04 : sortir de France (le TAM européen va de 1,5 à 10 Md€ d'ici 2035, ~35 %/an, DMR),
passer du one-shot à l'assurance continue à 50–100 k€ par portefeuille entreprise (slide 09), et
transformer le rejeu en produit distribué via les clouds et modèles souverains — le marché
institutionnel existe déjà, l'accord France-Allemagne Mistral × SAP le montre. À 100 comptes
entreprise × 60 k€, on est à 6 M€ d'ARR sans quitter les secteurs régulés européens.
*Si on insiste :* « Ce que nous vous demandons de financer, c'est la preuve que le premier palier
existe. Si les 500 k€ n'arrivent pas, aucun des paliers suivants n'a d'intérêt. »
**À préparer :** slide backup « chemin vers 10 M€ » — 3 leviers, 3 hypothèses chiffrées, dates.

**R04-5** — Parce que ces deux chiffres sont ce que le jury et les investisseurs vont chercher de
toute façon, et que nous préférons les montrer avec leur étiquette honnête plutôt que de les
laisser croire que nous les revendiquons. Le 265 Md€ d'IA d'entreprise UE en 2029 (IDC) est la
dépense de nos clients : c'est ce qui rend leur dépendance chère, donc notre question pertinente.
Le 9,7 Md€ est un indicateur de direction réglementaire, pas une hypothèse de revenus. Un deck qui
n'affiche que ses gros chiffres favorables est moins crédible qu'un deck qui les désavoue lui-même.

**R04-6** — Le SAM France est effectivement petit — et c'est pour ça qu'il est nommé « marché
étroit, forcé et assumé » et non « marché immense ». La séquence tient parce que l'entrée se fait
par les éditeurs SaaS (cycle 3–6 mois, un seul acheteur), qui financent l'apprentissage, et que
les entités DORA (9–12 mois, comité) viennent ensuite avec un panier trois à cinq fois plus gros.
Sur les moyens : 20–30 comptes à 3 ans, c'est atteignable founder-led plus un commercial à partir
de M+12 ; nous ne prétendons pas saturer 2 000 entités, nous prétendons prouver la répétabilité
sur 20.

## R05 — Le produit

> ⚠️ **Fix-list slide 05** (détail : Partie 1) — Client Index identique à Exactitude (97/93/91) :
> le composite doit se différencier · aucun intervalle de confiance dans le tableau · annoncer la
> maquette avant qu'on la découvre.

**R05-1** — C'est une maquette illustrative, construite sur la structure réelle de nos rapports, et
je le dis avant que vous ne le demandiez : les modèles cités sont réels, les scores sont
représentatifs et non mesurés chez un client. Le pipeline qui produit ce tableau, lui, existe et
tourne — dix mois de construction sur nos propres cas de production. Le premier tableau réel,
publiable, avec un client nommé, c'est le jalon M+9 de la slide 13.
*Si on insiste :* proposer une démo live sur un jeu de données neutre, séance tenante ou dans la
semaine.
**À préparer :** un rapport de démonstration sur données publiques ou anonymisées AIO, exécuté en
vrai, imprimé, à donner au jury. C'est le meilleur antidote au soupçon de vaporware.

**R05-2** — Sur la conformité, nous ne produisons pas un jugement juridique : nous mesurons des
règles vérifiables et auditables — présence d'un refus attendu, fuite de donnée personnelle dans
la réponse, citation de source absente, format imposé non respecté — avec un jeu de règles validé
par le client au démarrage. Là où un juge LLM est utilisé, il est calibré contre un échantillon
annoté humainement et nous publions le taux d'accord ; là où une règle est déterministe, elle est
préférée. Ce qui rend le dossier opposable devant l'ACPR, ce n'est pas le score : c'est que chaque
score soit rattaché à une session horodatée, rejouable, avec sa méthode de notation versionnée.
**À préparer :** une page « méthodologie de notation » — définitions, part de règles
déterministes, protocole de calibration humaine, taux d'accord cible.

**R05-3** — Bonne lecture, et sur la maquette c'est un raccourci de présentation à corriger : le
Client Index est une agrégation pondérée qualité/coût/latence dont les poids sont **fixés par le
client**, pas par nous — c'est le principe même d'un benchmark client. Les verdicts ne sont pas des
seuils sur une note globale mais une logique de veto : une régression critique, c'est-à-dire une
session où l'alternative produit un résultat inacceptable selon les règles du client, bloque le
PASS quelle que soit la note — c'est pourquoi Gemini échoue à 91 avec 4 régressions quand Claude
passe conditionnellement à 93 avec 2. Et le verdict n'est jamais un ordre de migrer : c'est
l'entrée d'une décision humaine documentée.
**À préparer :** corriger la maquette pour que le Client Index diffère de la colonne exactitude —
sinon la question revient à chaque présentation.

**R05-4** — C'est le vrai obstacle de notre modèle et nous le traitons par l'architecture, pas par
la promesse. Trois principes : anonymisation et minimisation à la source, dans l'environnement du
client, avant toute sortie ; rejeu uniquement vers les fournisseurs et régions que le client a
lui-même approuvés, sous ses propres contrats ; et mode « bring your own keys » où les appels
partent des comptes du client, ce qui fait de nous un outil et non un nouveau sous-traitant de
données. Nous ne sommes pas certifiés — nous sommes deux personnes pré-revenus — donc notre plan
d'entrée passe d'abord par les éditeurs SaaS, dont la revue sécurité se compte en semaines, et
c'est une raison de plus de commencer par eux plutôt que par une banque.
*Si on insiste :* « ISO 27001 n'est pas un objectif à M+6, c'est un objectif à M+18, financé par
les premiers revenus. Nous le disons plutôt que de le promettre. »
**À préparer :** schéma d'architecture des données sur une slide backup (où vit la donnée, qui
appelle qui, avec quelles clés) + modèle de DPA + le questionnaire sécurité standard rempli
d'avance.

**R05-5** — En Land, le client fournit ses propres clés ou nous refacturons le compute à
l'identique : notre prix est du logiciel et de la méthode, pas de la revente de tokens. Et c'est
exactement ce que l'OED achète : là où un shadow deployment rejoue tout le trafic, nous ne rejouons
que les sessions les plus informatives, ce qui divise le compute par un ordre de grandeur — c'est
la raison économique d'exister du produit, pas un détail technique. Le chiffre que nous n'avons
pas encore : le coût de livraison complet, jours-homme inclus, d'un premier exit test. Nous
l'aurons mesuré sur le premier design partner, à M+6, et c'est ce chiffre qui fixera le prix
définitif.

**R05-6** — Les deux, et c'est le cœur du business model : la photographie se périme, donc la
valeur récurrente est réelle. C'est pour cela que le produit s'appelle *Continuous* Exit
Assurance et que les triggers de la slide 10 incluent explicitement « un fournisseur change de
modèle, de termes ou de prix ». Le rejeu déclenché par événement n'est vendable que s'il est
économique — et c'est encore l'OED qui le rend économique. Si nos entretiens montrent qu'un
réexamen annuel suffit aux clients, nous vendrons un abonnement annuel moins cher plutôt que de
prétendre qu'ils ont besoin de continu.

## R06 — Pourquoi maintenant

> ⚠️ **Fix-list slide 06** (détail : Partie 1) — le « 7 % » relève des pratiques interdites de
> l'AI Act : à retirer ou à remplacer (78 % sans action de conformité, Vision Compliance avr. 2026) ·
> l'Omnibus est un **accord provisoire** du 7 mai 2026, à dire comme tel · vérifier la nature des
> 19 CTPP avant d'affirmer qu'aucun n'est un fournisseur d'IA.

**R06-1** — À notre connaissance, non : nous n'avons pas de cas documenté d'un régulateur français
exigeant un test de sortie sur un fournisseur d'**IA** spécifiquement, et je ne vais pas vous
inventer une décision de l'ACPR. Ce que le texte dit est plus solide qu'un précédent :
l'article 28 de DORA impose des stratégies de sortie documentées, **suffisamment testées** et
réexaminées pour les services ICT supportant des fonctions critiques, et 19 fournisseurs tiers
critiques sont sous supervision directe des ESA depuis octobre 2025. Notre pari explicite est
que l'IA générative entre dans ce périmètre à mesure qu'elle devient critique — et que le premier
à savoir le prouver prend le standard. C'est un pari sur le calendrier, pas sur le texte.
*Si on insiste :* « Si nous nous trompons sur DORA, le trigger qui reste est commercial : la
question dans les RFP. Elle ne dépend d'aucun régulateur. »
**À préparer :** le verbatim exact de l'art. 28 §8 imprimé, et deux exemples réels de questions
de sortie dans des RFP publics.

**R06-2** — Oui, et nous avons corrigé le deck en conséquence plutôt que de garder l'ancien récit :
l'Omnibus (accord provisoire du 7 mai 2026) repousse l'annexe III du 2 août 2026 à décembre 2027,
et c'est pourquoi la slide 06 titre « DORA impose, le reste amplifie » et non l'inverse. Ce qui
reste applicable en 2026 : DORA depuis janvier 2025, et la transparence de l'article 50 de l'AI
Act au 2 août 2026. L'AI Act est notre tailwind d'expansion pour 2027-2029, pas notre urgence de
2026 — la slide l'affiche dans cet ordre. Accessoirement, un report est plutôt une bonne nouvelle
pour une société qui doit être prête quand la vague arrive.

**R06-3** — Vous avez raison sur les deux points et c'est déjà tranché dans nos findings : DORA ne
prévoit **aucune** amende générique de 10 % du chiffre d'affaires — pour les fournisseurs ICT tiers
critiques, l'article 35 prévoit des astreintes jusqu'à 1 % du chiffre d'affaires journalier moyen
mondial par jour sur six mois maximum, et au niveau français l'ACPR et l'AMF plafonnent à 10 M€.
C'est précisément pour ça qu'aucun montant d'amende DORA n'apparaît dans le deck. Le 7 % affiché
est bien le plafond AI Act (7 % du CA mondial ou 35 M€) et il est placé dans la colonne AI Act —
mais je le concède, il s'applique aux pratiques interdites et pas au défaut de plan de sortie.
L'argument fort n'a jamais été l'amende : c'est l'obligation elle-même, plus le contrat bloqué.
**À préparer :** décider s'il faut retirer le « 7 % » de la slide 06 — il attire une question qui
affaiblit le récit pour un gain rhétorique faible.

**R06-4** — Exact, les 19 CTPP désignés en octobre 2025 sont essentiellement du cloud et de
l'infrastructure, aucun fournisseur d'IA pure. C'est pour nous un indicateur de trajectoire, pas
une preuve : le mécanisme de supervision directe des dépendances technologiques existe et
fonctionne, et l'IA générative est le prochain candidat évident à mesure qu'elle devient critique.
Si vous trouvez ce chiffre trompeur à cette place, c'est un signal utile — il illustre la
mécanique DORA, pas notre marché.

**R06-5** — Personne ne l'a tranché de façon générale, et c'est le client qui qualifie : DORA
demande à l'entité financière de classer ses services ICT selon leur support à des fonctions
critiques ou importantes. Un LLM au cœur d'un parcours de souscription ou d'un service client
réglementé y entre naturellement ; un LLM pour la génération de contenu marketing n'y entre pas.
Notre produit sert d'ailleurs les deux cas : dans le premier il produit la preuve exigée, dans le
second il produit un levier de négociation et une économie de coût.

## R07 — Concurrence

> ⚠️ **Hygiène documentaire, slide 07** (détail : Partie 1) — la slide est saine ; « RFP theater »
> et « scorecards figées » sont dans `research/06-concurrents.md`, à reformuler avant tout envoi.
> **KPMG Reims cofinance Innovact.**

**R07-1** — Les axes sont ceux de la décision que nous adressons, et ils sont défendables :
« données génériques vs vos workloads réels » et « photographie vs verdict actionnable » — c'est
la différence entre savoir qu'un modèle est bon en moyenne et savoir qu'il tient **votre** flux.
Sur vos axes, vous avez raison, et nous ne le cachons pas : nous sommes chers à intégrer et sans
base installée, c'est le prix d'un produit jeune. C'est aussi pourquoi le premier segment n'est pas
la banque mais l'éditeur SaaS, chez qui l'intégration se compte en jours.

**R07-2** — La différence est le référentiel, et elle est structurelle : Langfuse et Braintrust
rejouent vos traces contre **votre propre pipeline** pour détecter une régression — c'est du test
de non-régression, l'objet comparé est votre code. Nous rejouons vos traces contre des
**fournisseurs alternatifs** pour arbitrer une migration, ce qui suppose trois choses qu'ils n'ont
pas : un échantillonnage OED pour que le coût ne soit pas multiplié par le nombre de combinaisons
fournisseur × modèle, une notion de coût et de résidence de données par fournisseur, et un
livrable destiné au directeur des risques, pas au développeur. Le test qui tranche : demandez à
l'un d'eux de vous produire un dossier art. 28 opposable — ce n'est pas dans leur promesse ni dans
leur acheteur.
*Si on insiste :* « Leur acheteur est l'ingénieur, le nôtre est celui qui signe la réponse au
régulateur ou au client. Deux acheteurs, deux produits. »

**R07-3** — Nous vous vendons quelque chose, et l'expression du document de travail est trop
cavalière — je la retire. La limite que nous visons n'est pas la qualité du travail des cabinets,
c'est la **fréquence** : un audit est vrai le jour où il est rendu et devient obsolète à la
prochaine mise à jour de modèle, ce qui peut arriver dans les six semaines. Notre place naturelle
est en dessous de vous : nous fournissons la mesure continue et rejouable, vous fournissez le
jugement, la méthodologie de contrôle et la signature devant le régulateur. Le canal partenaire
avec les cabinets de conformité et de risque figure d'ailleurs explicitement dans notre plan de
passage à 100 clients, slide 10.
**À préparer :** reformuler « RFP theater » et « scorecards figées » dans
`research/06-concurrents.md` avant tout envoi au jury — KPMG Reims est financeur d'Innovact.

**R07-4** — Le gateway a le trafic, c'est vrai, mais il a un conflit d'intérêts que nous n'avons
pas : il est rémunéré sur le routage et parfois sur la marge fournisseur, donc son verdict de
substituabilité n'est pas neutre aux yeux d'un directeur des risques. Il lui manque aussi
l'échantillonnage OED — sans lui, rejouer tout le trafic sur N fournisseurs coûte plus cher que le
service lui-même — et le livrable de conformité. Notre positionnement est complémentaire par
construction : nous disons vers quoi migrer, ils exécutent le basculement, et l'intégration en
aval de notre verdict est un canal de distribution pour nous. Que l'un d'eux devienne prédateur
est un vrai risque : notre réponse est la vitesse et la spécialisation sur le livrable
réglementaire.

**R07-5** — C'est le concurrent principal, et nous le nommons : le statu quo. Un tableur maison
donne un score sur 40 prompts choisis à la main, sur un modèle, à une date — ce n'est pas rejouable
et ça ne survit pas à une question d'auditeur du type « votre échantillon est-il représentatif de
votre production ? ». Notre réponse commerciale n'est pas « ne le faites pas en interne », c'est
« faites-le une fois en interne, vous verrez ce que coûte le refaire chaque trimestre ». Le seul
argument qui gagne à ce jeu, c'est le coût récurrent de la mesure — donc encore l'OED.

## R08 — Avantage concurrentiel

**R08-1** — Rien n'est opposable juridiquement aujourd'hui : pas de brevet, pas de dataset
propriétaire, pas d'effet de réseau — et un brevet sur une méthode statistique serait faible en
Europe de toute façon. Ce que nous avons est une avance d'exécution : dix mois de construction sur
des cas réels, six ans de pratique de l'OED, et un pipeline qui tourne. Ce qui devient défendable
avec les clients, c'est un actif que nous n'avons pas encore : un référentiel de tâches et de
profils de performance par usage, qui rend chaque nouveau verdict plus rapide et plus précis que
celui du concurrent partant de zéro. Je préfère vous dire que la barrière est à construire plutôt
que de vous vendre un moat qui n'existe pas.
*Si on insiste :* « À ce stade, le vrai moat d'une société de deux personnes, c'est la vitesse
d'apprentissage sur les trois premiers clients. C'est ce que nous venons chercher. »

**R08-2** — Rien ne les empêche techniquement, et la slide le dit — nous préférons afficher le
risque que le cacher. Trois raisons pour lesquelles ils ne le feront pas vite : leur acheteur est
l'ingénieur et non la direction des risques, donc le livrable de conformité n'est pas dans leur
roadmap ; leur modèle économique est à l'usage, donc réduire d'un ordre de grandeur le volume
rejoué est contraire à leur intérêt ; et faire du rejeu cross-fournisseur exhaustif sans
échantillonnage optimal coûte trop cher pour être vendu en continu. Pendant ce trimestre, nous
faisons la seule chose qui compte : deux ou trois design partners dans un secteur régulé, et le
premier rapport « sortie prouvée » publiable — la référence est plus dure à copier que la
fonctionnalité.

**R08-3** — La littérature est publique, l'implémentation ne l'est pas — et c'est vrai de toute
méthode statistique appliquée. Ce qui prend du temps, ce n'est pas de coder un critère
d'information, c'est de savoir quelles sessions comptent comme « informatives » pour un flux RAG
de support client par opposition à une extraction documentaire, comment gérer le multi-tours, et
comment garantir que le verdict sur l'échantillon tient sur tout le périmètre. C'est un savoir de
terrain, accumulé sur des workloads réels — pas une lecture d'article. Deux bons doctorants le
referont : en douze à dix-huit mois, sans clients pendant ce temps.

**R08-4** — Vous avez raison sur le vocabulaire : un track record est une raison de nous financer,
pas une barrière à l'entrée, et la formulation de la slide mélange les deux. La barrière après le
premier client, si nous exécutons, ce sont trois choses : le référentiel de tâches et de profils
de performance qui s'accumule, le dossier de preuves reconnu par des auditeurs comme conforme à
l'art. 28 — ce qui crée une norme de fait — et le coût de changement une fois le SDK dans le
chemin de production. Aucune des trois n'existe aujourd'hui. C'est ce que les 18 prochains mois
doivent construire.

**R08-5** — Oui, et c'est notre thèse de défensibilité à moyen terme : chaque client nous apprend
la structure d'un usage — quelles tâches, quelles distributions d'entrées, quelles régressions
comptent — et cet apprentissage est transférable même sans partager une seule donnée client, parce
qu'il porte sur la **méthode d'échantillonnage** et les profils par tâche, pas sur les données.
C'est ce qui fait la différence entre notre trajectoire et celle d'une agence : le troisième exit
test doit coûter la moitié du premier. Nous le mesurerons dès les deux premiers design partners,
et c'est un des indicateurs que nous vous proposons de suivre avec nous.
**À préparer :** définir et afficher l'indicateur « coût de livraison du n-ième exit test » comme
métrique de moat.

## R09 — Business model

> ⚠️ **Fix-list slide 09** (détail : Partie 1) — « exit test » veut dire deux choses selon la
> slide 09 (3–10 k€) et la slide 10 (10 unités avant 2–3 design partners payants). Trancher le
> vocabulaire : pilote de cadrage → exit test payant → design partner.

**R09-1** — Ils reposent sur trois ancrages, et sur zéro engagement client — c'est pourquoi la
slide écrit « pricing hypotheses, cibles de discovery ». Les ancrages : les offres entreprise
d'observabilité LLM démarrent autour de 2,5 k$ par mois (tarifs publics Langfuse, LangSmith,
Braintrust), un audit conseil équivalent se facture plusieurs dizaines de milliers d'euros, et
notre Land à 3–10 k€ est délibérément sous le seuil d'un achat qui déclenche un comité. Combien de
personnes ont dit « à 8 k€ j'achète » : aucune à ce jour. Nous aurons 20 réponses à cette question
exacte à M+3, et deux ou trois signatures — ou pas — à M+6.

**R09-2** — C'est le bon risque à soulever, et il y a deux issues possibles que nous acceptons
d'avance. Si le cycle éditeur se révèle proche de 3 mois avec un seul décideur, un Land à 5–10 k€
suivi d'un Expand à 15–30 k€ donne un payback acceptable — c'est l'hypothèse affichée. Si le cycle
dérive au-delà, la conclusion n'est pas de vendre plus de Land mais de **monter le prix
d'entrée** et de vendre directement l'assurance continue, en acceptant moins de clients plus gros.
La variable que nous testons en discovery n'est donc pas seulement « combien », c'est « à quel
prix le cycle reste court ».

**R09-3** — Non, notre temps n'y est pas valorisé, et c'est une faiblesse du chiffre : « CAC < 5 k€
founder-led » mesure les dépenses externes, pas le coût complet. Avec deux salaires de marché
chargés, l'acquisition des dix premiers clients coûte de l'ordre de plusieurs dizaines de milliers
d'euros par client — ce qui est normal en phase d'apprentissage et n'a rien à voir avec un CAC
d'état stationnaire. Le seul CAC qui a un sens se mesurera sur les clients 11 à 30, quand le canal
sera identifié. Nous préférons vous dire ça que de défendre un chiffre flatteur.
**À préparer :** un mini-modèle économique en deux scénarios (avec et sans salaire fondateur), une
page, à sortir si la question vient.

**R09-4** — Trois raisons de renouveler, dont une seule est réglementaire. La première est que le
monde bouge sous le client : les modèles sont dépréciés, les prix changent, les workloads dérivent
— l'étude IBM IBV mesure en moyenne six disruptions IA par organisation sur deux ans. La deuxième
est le levier de négociation : une preuve fraîche de substituabilité se réutilise à chaque
renégociation de contrat fournisseur. La troisième est la conformité, effectivement peut-être
annuelle. Si les entretiens montrent qu'annuel suffit, nous vendrons un abonnement annuel — cela
change le prix, pas la nature du produit.

**R09-5** — Nous ne le savons pas encore avec précision, et c'est un chiffre que nous refusons
d'inventer : l'estimation interne est de quelques jours-homme d'intégration plus un compute
d'échantillon, mais elle n'a jamais été confrontée à un vrai client, avec un vrai SI, une vraie
revue sécurité. Le premier design partner sert exactement à ça — nous en ferons un livrable de
mesure, pas seulement une vente. La date : M+6.

**R09-6** — C'est un point qui nous a divisés en interne et votre argument est fort. La raison du
prix bas est l'accès : à 3–10 k€ un CEO d'éditeur signe seul, sans appel d'offres, ce qui nous
donne dix cycles d'apprentissage là où 25 k€ n'en donnerait que deux. Le risque que vous
identifiez — s'ancrer bas et ne plus pouvoir monter — est réel, et nous le limitons en présentant
le Land comme un **pilote périmétré à une application**, pas comme le prix du produit ; le prix du
produit, c'est l'assurance continue. Si les entretiens montrent une élasticité faible, nous
monterons le Land avant d'avoir un historique de prix bas à défendre.

## R10 — Go-to-market

> ⚠️ **Fix-list slide 10** (détail : Partie 1) — entonnoir incohérent avec le prix de la slide 09 ·
> « Pipeline cible · J+6 » → `M+6`. Tant que le deck n'est pas corrigé, les réponses ci-dessous
> (M+3 / M+6) ne disent pas la même chose que ce qui est projeté.

**R10-1** — Ce sont des hypothèses de travail, affichées comme telles sur la slide, et vos ordres
de grandeur sont les bons pour du cold pur — nous ne prévoyons pas du cold pur. Le mix visé est
l'introduction chaude, le réseau (dont la CCI Marne et France Digitale), et l'événement déclencheur
identifié — un RFP en cours, une revue DORA ouverte — ce qui change complètement les taux. Cela
étant dit : si le taux réel est 3 %, il ne faut pas 300 contacts mais 1 000, et c'est une révision
de plan de charge, pas un changement de thèse. Le chiffre que nous vous proposons de juger à M+3
n'est pas le taux prédit, c'est le taux **mesuré** sur les 20 premiers entretiens.

**R10-2** — La formulation de la slide prête à confusion et je clarifie : les 10 « exit tests »
sont des exercices de cadrage et de démonstration sur les données du prospect, non facturés ou
facturés au symbolique, et les 2–3 design partners sont ceux qui signent un engagement payant avec
un périmètre et un calendrier. Autrement dit, la conversion vers du revenu est de 2–3 sur 300
contacts — c'est délibérément prudent. Le prix de 3–10 k€ de la slide 09 est le prix cible du
Land en régime, pas celui du design partner, qui achète un partenariat, pas un produit fini.
**À préparer :** homogénéiser le vocabulaire entre slides 09, 10 et 11 — « exit test » (produit
payant) vs « pilote de cadrage » (gratuit) vs « design partner » (engagement payant).

**R10-3** — Elle n'existe pas encore sous forme nominative de 150 lignes : nous avons la méthode de
construction — croisement France Digitale, annuaires d'éditeurs, offres d'emploi mentionnant des
API LLM, participants aux forums fintech — et une première dizaine de noms. Nous ne vous
présenterons pas un tableur générique comme une preuve de pipeline. Le jalon vérifiable : la liste
nominative de 150 comptes avec les personnes contact, disponible sous 30 jours, et nous acceptons
qu'elle soit revue par notre startup manager.
**À préparer :** construire réellement la liste 150 comptes avant la soutenance si le calendrier
le permet — c'est le document qui convertit le mieux un jury sceptique.

**R10-4** — Les triggers sont réactifs pour le client, mais ils sont **observables** pour nous, et
c'est là que se joue la construction du pipeline : les appels d'offres publics sont publiés, les
échéances DORA sont datées, les dépréciations de modèles et changements de prix des fournisseurs
sont annoncés publiquement. La brique manquante à construire est une veille systématique sur ces
trois signaux, qui déclenche une prise de contact dans les jours qui suivent. Et le canal
partenaire — cabinets de conformité, gateways souverains — est précisément là pour que d'autres
nous signalent l'événement avant nous.

**R10-5** — Bonne objection : une partie de nos clients ne pourra pas être citée, en tout cas pas
nommément. Le contournement est standard dans la conformité : des références sectorielles
anonymisées (« un éditeur SaaS de 200 personnes vendant à trois banques françaises »), des
méthodologies publiées sans données, et une ou deux références nommées obtenues en échange d'une
remise. Le canal qui ne dépend pas de la publication, et c'est pour cela qu'il est sur la slide,
c'est le prescripteur : un consultant conformité qui a vu le livrable le recommande sans que le
client soit cité.

**R10-6** — 60 % du temps de chacun des deux fondateurs consacré à la vente founder-led sur les
six premiers mois, le reste allant au produit et à la livraison. Je dois être précis sur ce que ce
chiffre suppose : il suppose que notre engagement sur AIO soit réduit et cadré, et c'est un point
que je préfère traiter de front — voir la question sur AIO. Sans cela, ce 60 % n'est pas crédible
et vous auriez raison de ne pas y croire.

## R11 — Validation

> ⚠️ **Fix-list slide 11** (détail : Partie 1) — « projet Google Foundation » : nommer le programme,
> les dates, la nature du soutien et un référent, ou reformuler · « (J+3) / (J+6) » → `M+3` / `M+6` ·
> harmoniser « design partner » avec les slides 09 et 10.

**R11-1** — Entre zéro et deux entretiens formels de discovery à ce jour. C'est écrit dans nos
notes de recherche, la slide 11 dit « validation commerciale en cours » et je ne vais pas
l'habiller autrement : tout ce qui concerne le pricing, l'ICP et le funnel dans ce deck est une
hypothèse fondatrice, étiquetée comme telle sur les slides. Ce que nous avons à la place, c'est un
problème rencontré nous-mêmes en production pendant dix mois et une solution technique qui tourne.
Le jalon qui règle ça est daté et vérifiable : 20 entretiens à M+3, 2–3 design partners payants à
M+6 — et nous acceptons d'être jugés sur ce jalon-là.
*Si on insiste :* « Nous avons choisi de construire la technologie d'abord parce que nous vivions
le problème. C'est un biais d'ingénieur, nous le savons, et c'est exactement le déséquilibre que
nous venons corriger chez Innovact. »
**À préparer :** avoir déjà réalisé 3 à 5 entretiens **avant** la soutenance, avec des verbatims
citables. C'est le meilleur investissement disponible d'ici la présentation.

**R11-2** — Les briques viennent de nos dix derniers mois de travail sur des workloads IA en
production dans le cadre d'un projet Google Foundation, et elles ont été construites parce que
nous avions le problème — donc oui, elles préexistent à Titral en tant que société, et non, ce
n'est pas un produit fini. Ce qui tourne aujourd'hui : la capture de sessions, l'échantillonnage
OED, le rejeu multi-fournisseurs et la génération de métriques comparatives par tâche. Ce qui
n'existe pas : l'interface client, le dossier de conformité automatisé, le mode continu
industrialisé. Je peux vous montrer le pipeline sur un jeu de données neutre, séance tenante si
vous voulez.
**À préparer :** une démo de 3 minutes, hors ligne, sans dépendance réseau, prête à lancer.

**R11-3** — Il faut que je sois précis parce que la formulation de la slide est trop vague : le
projet est un travail sur des workloads IA en production mené dans le cadre d'un programme Google,
et je vous en donne le périmètre, les dates et le référent plutôt qu'un logo. Ce que cela prouve
est limité et je ne surinterprète pas : que nos briques ont tourné sur des cas réels, pas que
Google valide Titral. **À préparer :** intitulé exact du programme, dates, montant ou nature du
soutien, nom du référent, et reformulation de la slide 11 et 12 pour ne pas laisser croire à un
adossement. Le risque de surinterprétation d'un logo devant un jury est réel.

**R11-4** — C'est n=1 et c'est nous, vous avez raison — c'est une validation du **problème**
technique, pas du marché, et la slide 11 place justement « problème observé » du côté prouvé et
« design partner payant » du côté à prouver. La valeur de ce n=1 est qu'il nous a donné la
solution avant d'avoir le client, ce qui est rare et raccourcit notre time-to-value. Sa faiblesse
est qu'il ne dit rien sur la disposition à payer d'une entité régulée européenne. Nous ne
confondons pas les deux et nous datons la levée de l'incertitude : M+3, M+6.

**R11-5** — Réponse honnête : nous avons priorisé la construction technique et la recherche de
marché documentaire, et nous avons sous-investi la discovery — c'est une erreur de séquencement, pas
un manque de volonté. À cela s'ajoute la vraie contrainte : nous n'avons pas de réseau français
dans la finance et le taux de réponse à froid depuis un compte inconnu est faible. C'est le premier
service que nous attendons d'Innovact, et c'est mesurable : accès aux adhérents CCI Marne et à
France Digitale, avec 20 entretiens sous 90 jours comme engagement de notre part. Nous commençons
d'ailleurs sans attendre votre décision.

## R12 — Équipe

> ⚠️ **Fix-list slide 12** (détail : Partie 1) — « projet Google Foundation » figure dans la bande
> « Preuves d'exécution » : même décision que pour la slide 11, prise une seule fois. Le reste de la
> slide est vérifié (`FINDINGS` §6) ; le montant de l'exit Studiare n'est pas public.

**R12-1** — Le montant n'a pas été rendu public et je ne vais pas en inventer un ; ce que je peux
documenter, c'est l'opération elle-même — Studiare, adaptive learning, acquise par Kroton en 2015,
l'un des premiers exits en éducation au Brésil — et le fait que ce n'était pas un exit de grande
taille. Ce qu'il prouve n'est pas une richesse, c'est un cycle complet mené jusqu'au bout :
construire, vendre à un acquéreur industriel, sortir. Je peux vous mettre en contact avec des
personnes de l'écosystème brésilien qui l'ont vécu de près.
**À préparer :** deux références appelables (une sur Studiare/Kroton, une sur AIO), avec accord
préalable.

**R12-2** — C'est le trou de l'équipe et nous ne le maquillons pas : personne chez nous n'a vendu à
une direction des risques européenne. Ce que nous avons de connexe : Murilo a passé des années
comme quant chez Morgan Stanley, Santander et Banco BBM, donc le vocabulaire du risque et le
fonctionnement d'un comité bancaire ne sont pas étrangers ; et l'entrée par les éditeurs SaaS
existe justement parce qu'un CEO d'éditeur est un acheteur accessible en founder-led. Notre plan
est le suivant : les dix premiers clients par les fondateurs, puis un profil commercial senior
secteur régulé au premier recrutement, financé par le pré-seed. Un mentor ou un business angel
ayant vendu de la conformité à des banques françaises est explicitement ce que nous cherchons chez
Innovact.

**R12-3** — Réponse directe. AIO continue d'opérer au Brésil avec son équipe locale ; notre
implication passe à un rôle de supervision, non opérationnel, avec un engagement chiffré et une
date — c'est la condition pour que le « 60 % du temps fondateur » de la slide 10 soit crédible.
Sur la propriété intellectuelle : les briques OED ont été développées dans le contexte de nos
travaux et doivent être formellement apportées à la société Titral, avec un accord écrit qui
sépare les deux entreprises — c'est un point de nettoyage juridique que nous voulons faire avec
l'appui d'Innovact avant tout tour de financement.
*Si on insiste :* donner le pourcentage exact, la date de bascule, et le nom de la personne qui
opère AIO.
**À préparer :** engagement écrit de disponibilité (dates, pourcentage, opérateur d'AIO) + note
sur la PI et la séparation AIO/Titral. **C'est l'item le plus important de cette liste pour le
jury Innovact.**

**R12-4** — La société cible est une société française, dans le Grand Est, et c'est sous cette
entité que sont signés les contrats et les engagements RGPD — c'est aussi une des raisons pour
lesquelles nous venons chez vous plutôt que de rester ailleurs. L'architecture technique est
conçue pour que la donnée client ne quitte ni son environnement ni les régions qu'il a approuvées,
avec un mode où les appels partent des clés du client — le domicile des fondateurs devient un
non-sujet, ce qui est plus solide qu'un discours. Sur le fond, notre expérience brésilienne est un
atout d'exécution et un handicap de réseau : nous vous demandons de couvrir le second.

**R12-5** — Le premier recrutement est un profil commercial ou avant-vente senior sur les secteurs
régulés, visé après les premiers design partners et financé par le pré-seed du jalon M+12. En
attendant, tout est founder-led, sans salaire de marché. Un second recrutement produit ne se
justifie qu'une fois la répétabilité du livrable démontrée. **À préparer :** un plan de
recrutement à 18 mois, deux lignes, avec le déclencheur de chaque embauche.

## R13 — Pourquoi Innovact

> ⚠️ **Fix-list slide 13** (détail : Partie 1) — « J+6 / J+9 / J+12 » sous un titre « Jalons
> 6–12 mois » : passer en `M+` · « adhérents CCI Marne = premier pipeline » n'est pas vérifié, à
> dégonfler en accès à des entretiens et introductions.

**R13-1** — Murilo est installé à Reims depuis trois ans ; Thiago n'y est pas résident et la slide
est exacte en le disant au singulier — je préfère le préciser que de laisser croire à deux
implantations. L'engagement que nous vous proposons est concret : une présence hebdomadaire dans
vos locaux pour au moins un fondateur, la société domiciliée dans le Grand Est, et la présence des
deux fondateurs aux temps collectifs du programme. **À préparer :** engagement de présence chiffré
(jours par mois, par fondateur) — le jury le demandera et une réponse floue coûte cher.

**R13-2** — Nous n'avons pas encore vérifié la présence d'un acheteur DORA dans le périmètre exact
de la CCI Marne, et je ne vais pas prétendre le contraire. Ce que nous savons : le tissu local
compte des mutuelles, des caisses régionales et des assureurs qui sont des entités du périmètre
DORA, et vous êtes mieux placés que nous pour savoir si la décision d'achat y est locale ou
parisienne. Notre hypothèse de travail est plus modeste que la slide ne le laisse entendre : le
réseau CCI est un accès à des **entretiens** et à des introductions, le premier revenu viendra
probablement d'éditeurs SaaS non locaux. Si vous nous dites que ce pipeline local n'existe pas,
c'est une information précieuse et nous corrigeons la slide.

**R13-3** — Trois choses précises : un startup manager ex-entrepreneur pour transposer notre
expérience brésilienne au marché français, l'accès à vos réseaux — CCI Marne, Investor Days,
business angels — pour les 20 premiers entretiens et le pré-seed, et un cadrage structurel
(société, PI, plan de financement). À six mois, ce qui prouvera que vous avez servi : 20 entretiens
réalisés avec verbatims, 2–3 design partners payants, la structure juridique en place et un
pré-seed engagé. Si aucun des quatre n'est là à M+6, nous aurons échoué et il faudra le dire.

**R13-4** — Le deck ne le chiffre pas et c'est un manque. La réalité : nous sommes pré-revenus,
sans levée à ce jour, les fondateurs ne se versent pas de salaire de marché, le burn est donc
essentiellement du compute et des frais de structure — quelques centaines à quelques milliers
d'euros par mois. Ce que nous visons : un pré-seed de plusieurs centaines de milliers d'euros à
M+12, dimensionné pour 18 mois de piste et un premier recrutement commercial, complété par les
dispositifs français que nous connaissons mal et sur lesquels nous voulons votre appui —
Bourse French Tech, subventions Grand Est, prêt d'amorçage.
**À préparer :** une slide backup « besoin & emploi des fonds » — montant, durée, répartition,
jalons associés. **Sans ce chiffre, la question revient à chaque rendez-vous investisseur.**

**R13-5** — J comme mois à compter de l'entrée en incubation : M+6, M+9, M+12 — la notation du deck
est ambiguë et nous la corrigeons. Le plan B si les design partners ne signent pas à M+6 : nous
aurons alors 20 à 30 entretiens qui nous diront **pourquoi** — mauvais segment, mauvais prix,
mauvais déclencheur — et nous avons trois pivots préparés dans cet ordre : entrée directe entités
DORA au lieu des éditeurs, canal par les cabinets de conformité et les gateways plutôt que la
vente directe, et repositionnement sur l'optimisation de coût IA, qui utilise exactement la même
technologie avec un acheteur plus facile. Le point non négociable est le calendrier de décision,
pas le segment.
**À préparer :** remplacer J+ par M+ dans le deck et une slide backup « les 3 pivots » avec leur
condition de déclenchement.

**R13-6** — Reims est une conséquence devenue un choix : Murilo y vit depuis trois ans, et nous
avons regardé les alternatives parisiennes. Notre lecture est qu'à notre stade, ce qui manque n'est
pas la densité d'événements mais un accompagnement individuel par un ex-entrepreneur et un accès
réel à des acheteurs — Innovact a vingt ans d'existence, un startup manager dédié et un réseau
Quest for Change de 300 startups avec 114 M€ levés en 2025. Nous irons chercher les clients
parisiens depuis Reims, ce qui est à 45 minutes de train. Et nous préférons être un dossier suivi
de près chez vous qu'un dossier parmi mille ailleurs.

## R14 — Annexe · sous le capot

**R14-1** — Le protocole est celui de la validation croisée : sur un flux, nous rejouons
l'échantillon OED **et** un rejeu exhaustif ou massif de référence, puis nous comparons les
verdicts et publions l'écart. C'est ce que nous avons fait sur nos propres workloads pendant les
dix derniers mois ; ce n'est pas encore documenté sous forme de rapport client publiable, et c'est
un livrable que nous devons produire. Le principe que nous nous imposons : aucun verdict sans
intervalle de confiance, et une validation exhaustive de référence sur au moins un flux par
client, au démarrage. C'est aussi, commercialement, le meilleur argument de vente : nous prouvons
notre propre méthode avant de la facturer.
**À préparer :** une note technique de 2 pages « validation de l'échantillonnage » avec un exemple
chiffré — c'est ce que demandera un investisseur technique ou un CTO client.

**R14-2** — C'est la difficulté réelle du produit et nous la traitons par périmètre plutôt que par
promesse : nous commençons par les tâches où le rejeu est bien défini — RAG, extraction, synthèse,
classification, génération de code — c'est exactement ce que dit la troisième colonne de l'annexe.
Pour les workflows agentiques, les appels d'outils sont **enregistrés puis simulés** à la
relecture : le modèle alternatif reçoit les mêmes observations, ses actions sont comparées à celles
de la référence, et aucun effet de bord n'est réexécuté. Cela introduit une limite que nous
annonçons au client : dès que la trajectoire divergerait fortement, nous mesurons la divergence
au lieu de prétendre simuler la suite. Le multi-tours long est un chantier de roadmap, pas une
capacité acquise.

**R14-3** — Deux modes, et le plus rapide est celui sans SDK : ingestion des logs existants, ce qui
suppose des logs contenant entrée, sortie et contexte — souvent partiels, effectivement. Le
délai réaliste que nous annonçons est de quelques semaines chez un éditeur SaaS et de plusieurs
mois chez une entité financière, et c'est une des raisons du séquencement de la slide 03 : les
éditeurs d'abord. Le chiffre honnête est que nous n'avons pas encore mesuré ce délai chez un
client tiers ; le premier design partner le mesurera, à M+6.

**R14-4** — Vous décrivez un biais que nous devons neutraliser explicitement, sinon notre verdict
est faux et notre crédibilité disparaît au premier contre-test. Notre règle est de rapporter deux
niveaux : la substituabilité « à prompt constant », qui est le scénario réel d'une bascule
d'urgence, et la substituabilité « après adaptation », qui inclut un budget d'adaptation de prompt
borné et rapporté en effort de migration — c'est précisément à quoi sert la colonne « effort de
migration » du produit. Un FAIL à prompt constant qui devient PASS après deux jours d'adaptation
est une information utile pour le client, pas une contradiction. Et l'optimisation de prompt par
modèle est un candidat d'upsell évident.

**R14-5** — Oui, et c'est non négociable pour nous : un verdict sans incertitude n'est pas
opposable devant un auditeur. Chaque métrique est rapportée avec son intervalle de confiance
dérivé du plan d'échantillonnage, et le verdict PASS / CONDITIONAL / FAIL découle du bord
défavorable de l'intervalle, pas de la moyenne. C'est aussi ce qui donne un levier commercial :
si le client veut resserrer l'intervalle, il achète plus d'échantillons — l'incertitude devient un
paramètre de prix.
**À préparer :** faire apparaître un intervalle de confiance dans la maquette de tableau de la
slide 05 — aujourd'hui son absence est une invitation à cette question.

---
---

# PARTIE 3 — Récapitulatif « À préparer »

À traiter avant la soutenance. Trié par valeur décroissante.

## Priorité 1 — sans ça, une question létale reste sans réponse

1. **3 à 5 entretiens de discovery réels, avec verbatims citables** (`R11-1`, `R03-1`, `R03-3`,
   `R09-1`). Le seul investissement qui transforme quatre questions létales en réponses solides.
2. **Engagement écrit de disponibilité et séparation AIO / Titral** (`R12-3`) : pourcentage de
   temps, date de bascule, qui opère AIO, note sur la propriété intellectuelle des briques OED.
   L'item le plus important pour le jury Innovact.
3. **Slide backup « besoin et emploi des fonds »** (`R13-4`) : montant, durée de piste,
   répartition, jalons. Le deck n'a aucun chiffre financier sur Titral — c'est le trou le plus
   visible.
4. **Décision de structure juridique** (`R01-3`) : forme, siège Grand Est, capital, vesting, date
   d'immatriculation.
5. **Un rapport de démonstration exécuté en vrai** sur données publiques ou AIO anonymisées, plus
   une démo hors ligne de 3 minutes (`R05-1`, `R11-2`). Antidote au soupçon de maquette.

## Priorité 2 — corrections factuelles et de cohérence (à faire faire, ne pas éditer soi-même)

C'est la même liste que les encadrés `⚠️ À corriger` en tête de chaque section de la Partie 1,
vue par tâche plutôt que par slide.

6. **Slide 04 · remplacer « borné par » par le détail de l'addition** : conformité AI Act UE
   609,4 M$ ≈ 560 M€ (DMR) + conformity assessment 0,8 Md$ ≈ 735 M€ (Fact.MR) + MRM IA
   ~0,3 Md$ ≈ 275 M€ (M&M) ≈ 1,57 Md€. Aujourd'hui la borne affichée est **inférieure** au chiffre
   qu'elle borne (`R04-1`).
7. **Slide 04 · requalifier le chiffre Gartner** : 492 M$ ≈ 450 M€ est un chiffre **mondial**
   (`FINDINGS` §9), présenté aujourd'hui dans une ligne « TAM · Europe » — le sortir du calcul ou
   le libeller « monde, repère de cohérence » (`R04-1`).
8. **Slide 04 · deux précisions de langage** : « ≈ 2 000 entités FR » est un agrégat de millésimes
   2022 à 2025, à dire comme ordre de grandeur ; et ne jamais prononcer « 35 %/an » devant un ×7
   sur neuf ans, qui vaut ≈ 23 %/an (`R04-1`, `R04-2`).
9. ~~Aligner 13 % / 15 %~~ — **résolu** : la slide 04 affiche 13 % (= 200/1 500) et `FINDINGS` §9 a
   été aligné. Ne pas re-casser lors d'une réécriture (`R04-2`).
10. **Slides 10, 11 et 13 · remplacer J+3 / J+6 / J+9 / J+12 par M+3 / M+6 / M+9 / M+12**, avec le
    point de départ précisé. La slide 13 titre « Jalons 6–12 mois » juste au-dessus de « J+6 » :
    contradiction interne. Les réponses de la Partie 2 utilisent déjà M+ (`R13-5`).
11. **Slides 09, 10 et 11 · clarifier « exit test » vs « pilote de cadrage » vs « design partner »** :
    l'entonnoir affiche 10 exit tests puis 2–3 design partners rémunérés alors que l'exit test est
    vendu 3–10 k€ (`R10-2`).
12. **Slide 05 · maquette** : différencier le Client Index de la colonne Exactitude (aujourd'hui
    97/93/91 dans les deux) et faire apparaître un intervalle de confiance (`R05-3`, `R14-5`).
13. **Slides 11 et 12 · préciser ou retirer « projet Google Foundation »** : intitulé exact, dates,
    nature du soutien, référent — le risque de laisser croire à un adossement Google est réel
    (`R11-3`).
14. **Slide 06 · arbitrer le « 7 % »** (plafond AI Act des pratiques interdites, sans lien avec le
    défaut de plan de sortie) : retirer ou remplacer, par exemple par 78 % des organisations sans
    action de conformité significative (Vision Compliance, avr. 2026) (`R06-3`).
15. **Slide 06 · dire que l'Omnibus est un accord provisoire** du 7 mai 2026 et non du droit acté
    (`FINDINGS` §3) ; et vérifier la nature des 19 CTPP avant d'affirmer qu'aucun n'est un
    fournisseur d'IA (`R06-4`).
16. **Slide 13 · dégonfler « adhérents CCI Marne = premier pipeline »** en accès à des entretiens
    et des introductions : la présence d'un acheteur DORA décisionnaire dans le périmètre n'est pas
    vérifiée (`R13-2`).
17. **`research/06-concurrents.md` · reformuler « RFP theater » et « scorecards figées »** avant
    tout envoi — KPMG Reims cofinance Innovact (`R07-3`). La slide 07 elle-même est saine.

## Priorité 3 — documents de soutien à avoir sous la main

18. **Schéma d'architecture des données** (où vit la donnée, quelles clés, quelles régions) +
    modèle de DPA + questionnaire sécurité standard rempli d'avance (`R05-4`).
19. **Page « méthodologie de notation »** : définitions des métriques, part de règles
    déterministes, protocole de calibration humaine, taux d'accord (`R05-2`).
20. **Note technique 2 pages « validation de l'échantillonnage OED »** avec un exemple chiffré
    échantillon vs exhaustif (`R14-1`).
21. **Verbatim de l'art. 28 §8 de DORA imprimé** + 2 exemples réels de questions de sortie dans
    des RFP publics (`R06-1`).
22. **Liste nominative de 150 comptes cibles** avec personnes contact (`R10-3`).
23. **Mini-modèle économique en deux scénarios**, avec et sans salaire fondateur (`R09-3`) +
    indicateur « coût de livraison du n-ième exit test » (`R08-5`).
24. **Slide backup « chemin vers 10 M€ »** (`R04-4`) et **slide backup « les 3 pivots »** avec
    leurs conditions de déclenchement (`R13-5`).
25. **Deux références appelables** (Studiare/Kroton, AIO) avec accord préalable (`R12-1`) +
    **plan de recrutement à 18 mois** (`R12-5`) + **engagement de présence à Reims chiffré**
    (`R13-1`).
26. **Revue des CGU des fournisseurs d'IA sur le benchmarking comparatif**, une page (`R01-4`).

---

## Trois phrases à ne jamais prononcer

- « Nous avons déjà des clients intéressés » — vous n'en avez pas de documentés ; dites
  « pré-revenus, jalon à M+6 ».
- « DORA prévoit des amendes jusqu'à 10 % du chiffre d'affaires » — c'est faux
  (`FINDINGS.md` §3), et un juré du secteur financier le sait.
- « Personne ne fait ça » — dites « personne ne le fait pour arbitrer une migration, et voici le
  test qui le vérifie ».
