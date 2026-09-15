# Notes présentateur Slidev — blocs prêts à coller

Le même matériau que `docs/questions-reponses.md`, condensé en 14 blocs de notes présentateur
(un par page : 13 slides + annexe). Chaque bloc est un commentaire HTML autonome à coller **en
dernier commentaire HTML de la slide** correspondante dans `slides.md`.

**Arbitrage entre les deux formats.** Le document autonome et les notes présentateur ne servent
pas le même moment : le document gagne pour la **répétition** — il permet de lire les questions
sans les réponses, de travailler par ordre de danger plutôt que par ordre de slides, de porter les
nuances (« si on insiste », les `À préparer :`) et de se partager entre les deux fondateurs ou avec
un startup manager ; les notes gagnent pour le **live** — l'information arrive au bon endroit sans
navigation, en mode présentateur, quand il reste huit secondes entre la question et la réponse. Ma
recommandation : les deux, avec une division du travail stricte. On répète sur le document
(`questions-reponses.md`, y compris la Partie 3 des choses à préparer), et on pitche sur les notes,
qui ne contiennent que le noyau de réponse en une ligne, le drapeau de danger et le chiffre avec sa
source. Ne jamais mettre de paragraphe dans les notes : sous pression on ne lit pas, on scanne.
Corollaire : si un seul format doit exister, garder le document — les notes en dérivent
mécaniquement, l'inverse est faux.

**Conventions dans les blocs** — `[C]` certaine, `[P]` probable, `[?]` possible ·
`LETALE` / `DANGER` / `ok` · `>` = noyau de réponse à dire · `!!` = piège, ne pas improviser ·
`**#**` = chiffre et source. Les IDs renvoient au document (`Q05-4` ↔ `R05-4`).

**Chaque bloc s'ouvre par une section `!! A CORRIGER`** : les défauts factuels ou de cohérence de la
slide, une ligne chacun, avec la correction. Les slides sans défaut portent la ligne
`!! Aucun problème factuel identifié`, pour que les 14 blocs aient la même forme et s'insèrent
mécaniquement. Cette section est un rappel de préparation : quand la slide est corrigée, la ligne
disparaît.

**Contrainte technique** : aucun double tiret à l'intérieur des blocs (interdit dans un commentaire
HTML). Les blocs ci-dessous respectent cette contrainte, ne pas y introduire de `- -` collés.

---

## Bloc 01 — Slide 01 · Titral · Continuous AI Exit Readiness

```
<!--
S01 · TITRAL — CONTINUOUS AI EXIT READINESS

!! Aucun problème factuel identifié sur cette slide.

Q01-1 [C][ok] Concrètement le client reçoit quoi ?
> 3 livrables : classement des alternatives sur ses flux · plan de sortie par appli · dossier de preuves art. 28. On dit vers quoi migrer, pas comment.

Q01-3 [P][DANGER] Qui décide ? La société existe-t-elle ?
> Murilo : méthode OED + investisseurs. Thiago : plateforme + livraison. Vente founder-led partagée. SAS française Grand Est à immatriculer, 50/50 vesting 4 ans. Ne pas prétendre qu'elle existe.

Q01-2 [P][ok] Pourquoi ce nom, pourquoi l'anglais ?
> Titral = titrage : mesurer juste sur un échantillon minimal. Anglais = vocabulaire des acheteurs (DORA exit strategy, TPRM). Hypothèse testée en discovery.

Q01-4 [?][DANGER] Et si un fournisseur interdit le benchmarking ?
> Benchmark client, jamais publié : nous sommes un client qui compare ses options. Perte = une cible de migration, pas le produit.

!! Ne jamais dire « nous avons des clients intéressés » → « pré-revenus, jalon M+6 ».
-->
```

## Bloc 02 — Slide 02 · L'IA devient critique. La capacité de changer de fournisseur ne suit pas.

```
<!--
S02 · PROBLÈME

!! Aucun problème factuel identifié. Chiffres et sources conformes à FINDINGS, aucun montant d'amende DORA affiché. Faiblesse argumentative seulement (biais du sondage IBM, populations différentes).

Q02-1 [P][DANGER] 71 % vient d'IBM, qui vend du souverain. Preuve non vendeur ?
> Vrai biais. Le chiffre dur : Menlo déc. 2025, 11 % seulement ont changé de fournisseur (66 % upgradent en interne, 23 % rien). Et DORA art. 28 est en vigueur depuis le 17/01/2025, ce n'est pas déclaratif.

Q02-2 [P][DANGER] « Difficile » n'est pas « prêt à payer ». Où est le budget ?
> Douleur importée, pas ressentie : le déclencheur est « on me demande de prouver ». D'où un GTM par événements (S10). Preuve du budget : pas encore, elle sort des 20 entretiens (M+3).

Q02-4 [?][ok] 11 % changent : marché immobile ?
> 11 % = pas de capacité, pas d'absence de besoin. On vend la preuve de réversibilité, utile même sans migrer (levier de renégociation).

Q02-3 [?][ok] Vos 3 chiffres parlent de 3 populations.
> Assumé : 3 cadrages. Cohérence temporelle : les éditeurs SaaS reçoivent la question parce que leurs clients sont dans les 22 000.

**#** 58 % Insee Première n° 2120 (250+ sal., 2025) · 71 % IBM IBV juin 2026 (n=1 000) · 22 000 entités DORA · 11 % Menlo déc. 2025 (n=150)
-->
```

## Bloc 03 — Slide 03 · Un marché déjà installé, avec une pression réglementaire croissante

```
<!--
S03 · QUI ACHÈTE / MARCHÉ

!! A CORRIGER

- Citation « Quelle est votre stratégie de sortie d'OpenAI ? » présentée comme un verbatim client : c'est une reconstitution, 0 à 2 entretiens réels (FINDINGS §8) → l'attribuer honnêtement ou retirer les guillemets. LETALE si le jury le découvre avant vous.

Q03-1 [C][LETALE] La citation « stratégie de sortie d'OpenAI, contrat bloqué » : qui, quand ?
> Reconstitution de notre vécu en production, pas un verbatim client sourcé. 0 à 2 entretiens formels à ce jour, c'est écrit dans nos findings. Le jalon compte combien de fois elle revient sur 20 entretiens (M+3).

!! Ne pas broder. La franchise est la seule sortie de cette question.

Q03-2 [P][DANGER] Les éditeurs SaaS ne sont pas soumis à DORA.
> Choix assumé : pas l'obligation, l'urgence. Un contrat non signé se chiffre tout de suite, une amende hypothétique non. Le « oui on a un plan B » gratuit tombe dès que l'acheteur exige la preuve, ce que l'art. 28 lui impose d'obtenir.

Q03-3 [P][DANGER] Combien de contrats bloqués identifiés, pour quel montant ?
> Zéro nommément. Première question du script d'entretien. Distribution sur 20 réponses à M+3, 2 à 3 design partners payants ou infirmation à M+6.

Q03-5 [P][DANGER] Membre du Forum Fintech, de France Digitale, des réseaux CCI ?
> Non, aucun aujourd'hui. Canaux identifiés, pas activés : c'est un des 3 besoins Innovact. Engagement 90 jours : adhésion France Digitale + 1 événement DORA / ACPR.

Q03-4 [?][ok] Le 100 000 mélange les millésimes.
> Ordre de grandeur affiché avec son calcul (251 k × 30,4 % + 55 k × 55 %, Eurostat 2024-2025). Ni TAM ni cible : « nous n'attaquons pas les 100 000 ».
-->
```

## Bloc 04 — Slide 04 · Un marché étroit, forcé — et assumé

```
<!--
S04 · MARCHÉ ADRESSABLE

!! A CORRIGER

- « borné par 560 M€ + 450 M€ » sous un TAM de 1,5 Md€ : la borne est SOUS le chiffre → dire « somme de 3 périmètres » : 560 M€ DMR + 735 M€ Fact.MR + 275 M€ M&M ≈ 1,57 Md€ (FINDINGS §9, taux 0,92).
- Gartner 450 M€ = MONDE (492 M$), affiché dans la ligne « TAM · Europe » → le sortir du calcul ou le libeller « monde, repère de cohérence ».
- « ≈ 2 000 entités FR sous DORA » agrège des millésimes 2022 à 2025 → dire « ordre de grandeur, ACPR/AMF ».
- ×7 de 2026 à 2035 ≈ 23 %/an : ne PAS dire « 35 %/an ». Le 10 Md€ de 2035 est la borne haute DMR seule, pas la somme des 3.
- Résolu, ne pas re-casser : 13 % du SAM = 200/1 500, FINDINGS aligné.

Q04-1 [P][DANGER] TAM 1,5 Md€ mais « borné par » 560 + 450 M€. La borne est sous le chiffre.
> Le mot « borné » est maladroit : c'est une addition de 3 périmètres. DMR 609 M$ (conformité AI Act EU) + Fact.MR 800 M$ (conformity assessment) + M&M ~300 M$ (MRM IA) ≈ 1,7 Md$ ≈ 1,5 Md€ à 0,92. Le 450 M€ Gartner est mondial : contrôle de cohérence, pas borne.

!! Avoir la ligne d'addition en tête, chiffre par chiffre.

Q04-4 [P][LETALE] 500 k€ d'ARR à 3 ans, ce n'est pas du capital-risque.
> Le SOM est le jalon de crédibilité, pas le plafond. 3 leviers vers 10 M€ : Europe (TAM ×7 d'ici 2035, ~35 %/an DMR), portefeuille entreprise 50 à 100 k€ ARR, distribution via clouds et modèles souverains. 100 comptes × 60 k€ = 6 M€.

Q04-2 [P][DANGER] Pourquoi 13 % pour le SAM France ?
> Chiffre choisi, pas calculé : ordre de 13 à 15 %, France 2e base européenne (Fact.MR, +36,9 %/an). 13 % = 200/1 500, findings alignés. Le SAM défendable est bottom-up : ~2 000 entités DORA FR (ACPR/AMF) + santé + fournisseurs du public.

Q04-3 [?][DANGER] Ce TAM est celui de la conformité, pas de votre produit.
> Vrai. Notre ligne : test de réversibilité fournisseur sur budget résilience / TPRM. Ancrage de prix réel : offres entreprise d'observabilité LLM à partir de ~2,5 k$/mois (Langfuse, LangSmith, Braintrust).

Q04-6 [?][DANGER] Marché minuscule vu le cycle de 9 à 12 mois.
> Entrée éditeurs (3 à 6 mois, 1 décideur) qui finance l'apprentissage, puis entités DORA (panier ×3 à ×5). Objectif : prouver la répétabilité sur 20 comptes, pas saturer 2 000.

**#** TAM 1,5 → 10 Md€ (est. Titral) · SAM FR ~200 M€ · SOM ~500 k€ ARR (20-30 comptes × 15-30 k€) · 1 $ ≈ 0,92 €
-->
```

## Bloc 05 — Slide 05 · Testez et prouvez votre capacité de sortie

```
<!--
S05 · LE PRODUIT

!! A CORRIGER

- Client Index 97 / 93 / 91 = colonne Exactitude à l'identique (vérifié dans le balisage) : le composite n'agrège rien et la colonne Prix n'a aucun poids → changer les valeurs de la maquette ou renommer « Exactitude pondérée ».
- Aucun intervalle de confiance dans le tableau alors que la promesse est « verdict fiable sur échantillon minimal » → ajouter un ± sur l'exactitude ou une note « IC 95 % sur échantillon OED, n = … ».
- Annoncer que le tableau est une maquette AVANT qu'on le demande.

Q05-1 [C][LETALE] Vrai résultat client ou maquette ?
> Maquette illustrative, à dire AVANT qu'on le demande. Modèles réels, scores représentatifs non mesurés chez un client. Le pipeline qui la produit tourne (10 mois sur nos cas de production). Premier tableau réel publiable : M+9. Proposer la démo.

Q05-4 [C][LETALE] RGPD, DPIA, comité sécurité d'une banque ?
> 3 principes : anonymisation et minimisation à la source chez le client · rejeu vers les seuls fournisseurs et régions qu'il a approuvés, sous ses contrats · mode « bring your own keys » : nous sommes un outil, pas un nouveau sous-traitant. Pas de certification : ISO 27001 à M+18, financée par les revenus. D'où l'entrée par les éditeurs (revue en semaines).

Q05-2 [P][DANGER] Qui note la « conformité » ? Un LLM juge un LLM ?
> Règles vérifiables validées par le client (refus attendu, fuite de PII, source absente, format). Juge LLM calibré contre annotation humaine, taux d'accord publié ; règle déterministe préférée. L'opposabilité vient de la traçabilité : session horodatée, rejouable, méthode versionnée.

Q05-3 [P][DANGER] Client Index = colonne Exactitude ? Qui fixe les seuils ?
> Raccourci de maquette à corriger. Index = agrégation pondérée qualité / coût / latence, poids fixés par le CLIENT. Verdict = logique de veto : une régression critique bloque le PASS quelle que soit la note (Gemini 91 avec 4 régressions échoue, Claude 93 avec 2 passe sous conditions).

Q05-5 [P][DANGER] Qui paie les tokens ?
> Clés du client ou refacturation à l'identique : on vend la méthode, pas des tokens. L'OED divise le compute par un ordre de grandeur vs shadow deployment. Coût de livraison complet : pas encore mesuré, mesuré sur le 1er design partner (M+6).

Q05-6 [?][DANGER] Un verdict périmé la semaine suivante ?
> Oui : c'est la valeur du récurrent. D'où Continuous Exit Assurance et le trigger 3 (changement de modèle, termes, prix). Si annuel suffit au marché, on vendra de l'annuel moins cher.
-->
```

## Bloc 06 — Slide 06 · DORA impose des sorties prouvées. Le reste amplifie.

```
<!--
S06 · POURQUOI MAINTENANT

!! A CORRIGER

- « 7 % du CA mondial » = plafond AI Act des pratiques INTERDITES (FINDINGS §3), aucun lien avec le défaut de plan de sortie testé → retirer, ou remplacer par 78 % des organisations sans action de conformité (Vision Compliance, avr. 2026).
- « AOÛT 2026 → FIN 2027 » repose sur l'Omnibus, accord PROVISOIRE du 7 mai 2026 → dire « report prévu », pas « acté ».
- À vérifier avant de l'affirmer : la nature des 19 CTPP (aucun fournisseur d'IA ? non documenté dans FINDINGS).

Q06-1 [C][LETALE] Un régulateur a-t-il déjà exigé un test de sortie sur un fournisseur d'IA ?
> À notre connaissance, non, et ne pas inventer de décision ACPR. Le texte est plus solide qu'un précédent : art. 28, stratégies de sortie documentées, suffisamment testées, réexaminées ; 19 fournisseurs tiers critiques sous supervision ESA depuis oct. 2025. Pari assumé sur le calendrier, pas sur le texte. Repli : le trigger RFP ne dépend d'aucun régulateur.

Q06-3 [P][DANGER] Le 7 % ne concerne pas le défaut de plan de sortie. Et DORA n'a pas d'amende générique.
> Exact, et c'est déjà corrigé dans le deck : aucun montant DORA affiché. DORA art. 35 = astreintes jusqu'à 1 % du CA journalier mondial moyen par jour, 6 mois max, pour les fournisseurs ICT critiques ; ACPR / AMF jusqu'à 10 M€. Le 7 % est bien AI Act mais s'applique aux pratiques interdites. L'argument fort est l'obligation, pas l'amende.

!! Ne JAMAIS dire « 10 % du CA » : un juré du secteur financier le sait.

Q06-2 [P][DANGER] L'Omnibus repousse le haut risque à fin 2027 : votre why now tombe.
> Deck déjà recadré : DORA impose, le reste amplifie. Applicable en 2026 : DORA depuis janv. 2025 + transparence art. 50 au 02/08/2026. Annexe III repoussée au 02/12/2027 (accord provisoire du 07/05/2026). L'AI Act est notre tailwind 2027-2029.

Q06-4 [?][ok] Aucun fournisseur d'IA parmi les 19 CTPP.
> Vrai : cloud et paiement. Indicateur de trajectoire, pas de marché : le mécanisme existe, l'IA est le candidat suivant.

Q06-5 [?][ok] Un LLM est-il un service ICT « critique » au sens DORA ?
> C'est le client qui qualifie. Souscription ou service client réglementé : oui. Contenu marketing : non, et là on vend l'économie de coût et le levier de négociation.
-->
```

## Bloc 07 — Slide 07 · Une brique encore manquante : prouver la substituabilité

```
<!--
S07 · CONCURRENCE

!! A CORRIGER (document, pas la slide)
- La slide est factuellement saine. Le problème est dans research/06-concurrents.md : « RFP theater » et « scorecards figées » à propos des audits Big 4, alors que KPMG Reims cofinance Innovact → reformuler avant tout envoi, et ne jamais le prononcer.

Q07-3 [P][DANGER] KPMG FINANCE INNOVACT. « RFP theater » = notre document de travail.
> Retirer l'expression, sans discuter. Notre critique n'est pas la qualité mais la FRÉQUENCE : un audit est vrai le jour du rendu, obsolète à la mise à jour de modèle suivante (6 semaines). Notre place est sous vous : nous fournissons la mesure continue et rejouable, vous le jugement et la signature. Canal partenaire cabinets = notre plan de passage à 100 clients (S10).

!! Vérifier avant tout envoi : « RFP theater » et « scorecards figées » sont dans research/06-concurrents.md.

Q07-2 [P][DANGER] Braintrust et Langfuse rejouent déjà, OpenRouter compare déjà.
> Différence de référentiel : ils rejouent vos traces contre VOTRE pipeline (non-régression, objet comparé = votre code). Nous rejouons contre des FOURNISSEURS alternatifs pour arbitrer. Cela exige 3 choses qu'ils n'ont pas : OED (sinon coût × nb combinaisons), coût et résidence par fournisseur, livrable pour le directeur des risques. Test : demandez-leur un dossier art. 28 opposable.

Q07-1 [P][DANGER] Axes choisis pour que votre coin soit vide.
> Axes = ceux de la décision adressée (données génériques vs vos workloads · photo vs verdict). Sur « coût d'intégration » et « base installée » vous avez raison, nous sommes mal placés : c'est le prix d'un produit jeune, d'où l'entrée par les éditeurs (intégration en jours).

Q07-4 [?][DANGER] Un gateway voit tout le trafic : mieux placé que vous.
> Conflit d'intérêts : rémunéré sur le routage, verdict non neutre pour un directeur des risques. Il lui manque l'OED et le livrable de conformité. Risque prédateur réel : réponse = vitesse + spécialisation réglementaire.

Q07-5 [?][ok] Le vrai concurrent : Excel et l'inaction.
> Un tableur = 40 prompts, 1 modèle, 1 date, non rejouable, ne survit pas à « votre échantillon est-il représentatif ? ». Argument : le coût de RÉPÉTER la mesure chaque trimestre.
-->
```

## Bloc 08 — Slide 08 · La barrière n'est pas le produit, c'est la méthode

```
<!--
S08 · AVANTAGE CONCURRENTIEL

!! Aucun problème factuel identifié. Aucun chiffre sur la slide, et elle affiche elle-même le risque de comblement. Faiblesse stratégique : le track record présenté comme barrière à l'entrée (Q08-4).

Q08-1 [C][LETALE] Une méthode ne se dépose pas. Qu'est-ce qui est opposable ?
> Rien juridiquement aujourd'hui : pas de brevet, pas de dataset, pas d'effet de réseau. Avance d'exécution : 10 mois de construction sur cas réels, 6 ans d'OED, pipeline qui tourne. Le moat à construire = référentiel de tâches et profils de performance par usage. Dire que la barrière est à construire plutôt que vendre un moat inexistant.

Q08-2 [C][LETALE] Langfuse peut livrer ça en un trimestre.
> Rien ne les en empêche techniquement, la slide l'affiche. 3 freins : leur acheteur est l'ingénieur, pas le risque · leur modèle est à l'usage, réduire le volume rejoué est contre leur intérêt · le rejeu cross-fournisseur exhaustif est trop cher à vendre en continu. Pendant ce trimestre : 2 à 3 design partners régulés + 1er rapport publiable. Une référence est plus dure à copier qu'une feature.

Q08-3 [P][DANGER] L'OED est public depuis les années 1970.
> La littérature oui, l'implémentation non. Le savoir de terrain : quelles sessions sont informatives pour un RAG support vs une extraction, le multi-tours, la garantie que le verdict sur l'échantillon tient sur tout le périmètre. Deux doctorants le refont en 12 à 18 mois, sans clients pendant ce temps.

Q08-4 [P][DANGER] Un track record n'est pas une barrière à l'entrée.
> Concéder : la slide mélange les deux. Barrière après le 1er client : référentiel qui s'accumule, dossier reconnu conforme art. 28 (norme de fait), coût de changement du SDK en production. Aucune des trois n'existe encore.

Q08-5 [?][DANGER] Quel actif s'accumule ? Sinon vous êtes une agence.
> Thèse : chaque client apprend une structure d'usage, transférable sans partager aucune donnée (ça porte sur la méthode d'échantillonnage). Test : le 3e exit test doit coûter la moitié du 1er. Métrique à suivre dès les 2 premiers design partners.
-->
```

## Bloc 09 — Slide 09 · Land & expand — de l'exit test à l'assurance continue

```
<!--
S09 · BUSINESS MODEL

!! A CORRIGER

- « Exit test » veut dire deux choses : 3 à 10 k€ ici, 10 unités avant 2 à 3 design partners payants sur S10 → 3 termes, 1 sens chacun : pilote de cadrage (gratuit) / exit test (payant 3 à 10 k€) / design partner (engagement payant). À appliquer sur S09, S10, S11.

Q09-1 [C][LETALE] Sur quoi reposent ces prix ? Qui a dit « à 8 k€ j'achète » ?
> Personne, zéro à ce jour, la slide dit « pricing hypotheses ». 3 ancrages : observabilité entreprise ~2,5 k$/mois (tarifs publics), audit conseil à plusieurs dizaines de k€, Land sous le seuil qui déclenche un comité. 20 réponses à cette question exacte à M+3, signatures ou non à M+6.

Q09-2 [P][DANGER] 3 à 10 k€ pour un cycle de 3 à 6 mois : CAC > 1re commande.
> Deux issues acceptées d'avance. Cycle ~3 mois avec 1 décideur : Land 5-10 k€ puis Expand 15-30 k€ tient. Cycle plus long : on MONTE le prix d'entrée et on vend directement l'assurance continue, moins de clients plus gros. Ce que la discovery teste : à quel prix le cycle reste court.

Q09-3 [P][DANGER] « CAC < 5 k€ founder led » sans salaire fondateur ?
> Non valorisé, faiblesse du chiffre : ce sont les dépenses externes. Avec 2 salaires chargés, les 10 premiers clients coûtent des dizaines de k€ chacun, normal en apprentissage. Le seul CAC qui compte se mesure sur les clients 11 à 30.

Q09-4 [P][DANGER] Pourquoi renouveler 15 à 30 k€ après le plan de sortie ?
> 3 raisons dont une seule réglementaire : le monde bouge (IBM IBV : ~6 disruptions IA par organisation en 2 ans) · levier de renégociation à chaque contrat fournisseur · conformité, peut-être annuelle. Si annuel suffit, on vend de l'annuel : ça change le prix, pas le produit.

Q09-6 [?][ok] Un cabinet facture 50 à 100 k€, vous 3 à 10 k€.
> Prix bas = accès : un CEO d'éditeur signe seul, 10 cycles d'apprentissage au lieu de 2. Risque d'ancrage réel : le Land est présenté comme un pilote périmétré à UNE application, le prix du produit est l'assurance continue.

Q09-5 [?][DANGER] Coût de livraison réel ?
> Inconnu avec précision, refus d'inventer : quelques jours-homme + compute d'échantillon, jamais confronté à un vrai SI. Mesuré sur le 1er design partner, M+6.
-->
```

## Bloc 10 — Slide 10 · Un GTM déclenché par les événements, pas par les secteurs

```
<!--
S10 · GO TO MARKET

!! A CORRIGER

- Entonnoir « 10 exit tests → 2 à 3 design partners rémunérés » incompatible avec le prix de S09 (3 à 10 k€) → renommer l'étape « 10 pilotes de cadrage » et réserver « exit test » au produit payant.
- « Pipeline cible · J+6 » se lit six JOURS pour un jury français → M+6. Idem S11 (J+3, J+6) et S13 (J+6 / J+9 / J+12).
- Attention : ces notes et les réponses du brief disent déjà M+3 / M+6. Tant que le deck n'est pas corrigé, l'oral et l'écran divergent.

Q10-1 [C][LETALE] 300 → 30 démos = 10 % en froid, le standard est 1 à 3 %.
> Hypothèses affichées, et vos ordres de grandeur sont justes pour du cold pur : ce n'est pas notre mix. Visé : intro chaude, réseau (CCI Marne, France Digitale), événement déclencheur identifié. Si le taux réel est 3 %, il faut 1 000 contacts : révision de plan de charge, pas de thèse. Juger le taux MESURÉ à M+3.

Q10-2 [P][DANGER] 10 exit tests puis 2 à 3 design partners, alors que l'exit test est vendu 3 à 10 k€ ?
> Formulation à clarifier : les 10 sont des pilotes de cadrage non facturés ou symboliques, les 2 à 3 sont des engagements payants. Conversion vers du revenu : 2 à 3 sur 300 contacts, délibérément prudent. Le 3 à 10 k€ est le prix cible du Land en régime.

Q10-3 [P][DANGER] La liste des 150 éditeurs existe-t-elle ? Montrez-la.
> Pas encore sous forme nominative : méthode de construction + une première dizaine de noms. Ne pas présenter un tableur générique comme un pipeline. Liste nominative avec contacts sous 30 jours, revue par le startup manager.

Q10-4 [P][DANGER] Triggers réactifs = pipeline non prévisible.
> Réactifs pour le client, OBSERVABLES pour nous : appels d'offres publiés, échéances DORA datées, dépréciations et changements de prix annoncés. Brique à construire : veille systématique sur ces 3 signaux. Canal partenaire (cabinets, gateways) = signalement amont.

Q10-5 [?][DANGER] Vos clients accepteront-ils de publier qu'ils préparent une sortie ?
> Une partie non. Contournement standard : références sectorielles anonymisées, méthodologies publiées sans données, 1 ou 2 références nommées contre remise. Canal indépendant de la publication : le prescripteur conformité.

Q10-6 [?][ok] 60 % du temps, de quoi ?
> 60 % du temps de chaque fondateur sur la vente pendant 6 mois. Suppose un engagement AIO réduit et cadré : voir S12.
-->
```

## Bloc 11 — Slide 11 · Ce qui est prouvé, ce qui reste à prouver

```
<!--
S11 · VALIDATION

!! A CORRIGER

- « projet Google Foundation » laisse croire à un adossement Google, et n'est documenté nulle part → nom exact du programme, dates, nature du soutien, référent, ou reformuler (« projet client, sous NDA »). Même décision que S12.
- « (J+3) → (J+6) » → M+3 / M+6.
- « design partner » : harmoniser avec S09 et S10.
- À préserver : « Pré-revenus, stade early » est la force de cette slide. Ne pas la surjouer à l'oral.

Q11-1 [C][LETALE] Combien d'entretiens clients, avec qui, et qu'est-ce qui a CHANGÉ le deck ?
> Entre 0 et 2 entretiens formels. C'est écrit dans nos notes de recherche. Tout ce qui touche pricing, ICP et funnel est une hypothèse fondatrice, étiquetée comme telle sur les slides. Ce que nous avons : 10 mois de problème vécu en production + une techno qui tourne. Jalon daté : 20 entretiens M+3, 2 à 3 design partners payants M+6, jugez-nous là-dessus.
> Si on insiste : biais d'ingénieur assumé, techno d'abord parce que nous vivions le problème. C'est le déséquilibre que nous venons corriger ici.

Q11-5 [P][LETALE] Qu'est-ce qui vous a empêché de faire ces 20 entretiens AVANT ?
> Erreur de séquencement : construction technique et recherche documentaire priorisées, discovery sous investie. Contrainte réelle : aucun réseau français dans la finance, taux de réponse à froid faible. C'est le 1er service attendu d'Innovact, et nous commençons sans attendre votre décision.

Q11-2 [C][DANGER] « 10 mois de construction » : pour Titral ou récupéré d'AIO ?
> Construit parce que nous avions le problème, donc antérieur à la société : oui. Tourne : capture de sessions, échantillonnage OED, rejeu multi-fournisseurs, métriques par tâche. N'existe pas : interface client, dossier de conformité automatisé, mode continu industrialisé. Démo possible séance tenante.

Q11-3 [P][DANGER] « Projet Google Foundation », c'est quoi ?
> Donner périmètre, dates, référent, pas un logo. Ce que ça prouve : nos briques ont tourné sur des cas réels. Ce que ça ne prouve pas : aucun adossement Google.

!! Ne pas laisser planer l'ambiguïté d'un adossement : le jury peut vérifier.

Q11-4 [P][DANGER] « Problème observé » = n=1, et c'est vous.
> Concéder : validation du problème technique, pas du marché, et la slide le classe ainsi. Force : la solution est arrivée avant le client. Faiblesse : ne dit rien sur la disposition à payer d'une entité régulée. Levée d'incertitude : M+3, M+6.
-->
```

## Bloc 12 — Slide 12 · Une équipe qui a déjà construit et opéré l'IA en production

```
<!--
S12 · ÉQUIPE

!! A CORRIGER

- « projet Google Foundation » placé dans la bande « Preuves d'exécution », à côté de Studiare et AIO : se lit comme un troisième adossement → même décision que S11, prise une seule fois pour les deux slides.
- Reste de la slide vérifié (FINDINGS §6). Montant de l'exit Studiare non public : ne pas inventer de chiffre.

Q12-3 [C][LETALE] AIO tourne au Brésil. Quel % de votre temps va à Titral ? Qui opère AIO ?
> Réponse directe, chiffrée, datée : AIO opérée par son équipe locale, notre rôle passe en supervision non opérationnelle à date fixée. C'est la condition de crédibilité du « 60 % » de S10. PI : les briques OED doivent être formellement apportées à Titral, accord écrit séparant les deux sociétés, à faire avant tout tour.

!! Item n° 1 pour le jury Innovact. Une réponse floue ici coûte le dossier.

Q12-4 [P][DANGER] Produit de conformité européen depuis une base brésilienne ?
> Société française, Grand Est : c'est elle qui signe les contrats et les engagements RGPD. Architecture : la donnée ne quitte ni l'environnement du client ni ses régions approuvées, mode clés client. Le domicile des fondateurs devient un non sujet. Expérience brésilienne = atout d'exécution, handicap de réseau : c'est ce que nous vous demandons de couvrir.

Q12-2 [P][DANGER] Personne n'a jamais vendu à une direction des risques européenne.
> Trou assumé. Connexe : Murilo quant chez Morgan Stanley, Santander, Banco BBM, donc vocabulaire du risque et comités bancaires connus. Entrée par les éditeurs car le CEO est accessible en founder-led. Plan : 10 premiers clients par les fondateurs, puis commercial senior secteur régulé au 1er recrutement. Cherchons un mentor ayant vendu de la conformité à des banques FR.

Q12-1 [P][ok] Studiare : quel montant ?
> Non public, ne pas inventer. Ce qui est documentable : Studiare acquise par Kroton en 2015, un des premiers exits éducation au Brésil, pas une opération de grande taille. Ce que ça prouve : un cycle complet mené jusqu'au bout. Références appelables disponibles.

Q12-5 [?][ok] Premier recrutement ?
> Commercial ou avant vente senior secteur régulé, après les 1ers design partners, financé par le pré-seed M+12. Tout le reste founder-led, sans salaire de marché.
-->
```

## Bloc 13 — Slide 13 · Pourquoi Innovact, pourquoi maintenant

```
<!--
S13 · POURQUOI INNOVACT

!! A CORRIGER

- « J+6 / J+9 / J+12 » sous un titre « Jalons 6 à 12 mois » : contradiction sur la même slide → M+6 / M+9 / M+12, avec le point de départ précisé.
- « adhérents CCI Marne = premier pipeline » non vérifié : aucun acheteur DORA décisionnaire documenté dans le périmètre → dégonfler en « accès à des entretiens et à des introductions » et poser la question au jury.
- Vérifié : Quest for Change 300 startups, 114 M€ levés en 2025 (FINDINGS §7).

Q13-4 [C][LETALE] Besoin de financement, burn, runway ?
> Le deck ne le chiffre pas : c'est un manque, le dire. Réalité : pré-revenus, aucune levée, pas de salaire de marché, burn = compute + structure (centaines à quelques milliers d'euros par mois). Visé : pré-seed de plusieurs centaines de k€ à M+12, 18 mois de piste + 1 recrutement commercial. Appui demandé sur Bourse French Tech, subventions Grand Est, prêt d'amorçage.

Q13-1 [C][DANGER] « Fondateur installé à Reims » au singulier. Et l'autre ?
> Murilo à Reims depuis 3 ans, Thiago non résident : la slide est exacte, le préciser plutôt que le laisser deviner. Engagement : présence hebdomadaire d'au moins un fondateur, société domiciliée Grand Est, les deux fondateurs aux temps collectifs. Donner un chiffre de jours par mois.

Q13-2 [P][DANGER] Une agence bancaire champenoise n'achète pas de logiciel, la décision est à Paris.
> Non vérifié, ne pas prétendre le contraire. Le tissu local compte des mutuelles et caisses régionales du périmètre DORA, mais vous savez mieux que nous où est la décision. Hypothèse revue à la baisse : le réseau CCI donne des ENTRETIENS et des introductions, le 1er revenu viendra probablement d'éditeurs non locaux.

Q13-5 [P][DANGER] J+6, J comme jour ? Et si les design partners ne signent pas ?
> M comme mois à compter de l'entrée en incubation, notation à corriger. Plan B : 20 à 30 entretiens diront POURQUOI, et 3 pivots préparés dans l'ordre : entrée directe entités DORA · canal cabinets conformité et gateways · repositionnement optimisation de coût IA (même techno, acheteur plus facile). Non négociable : le calendrier de décision, pas le segment.

Q13-3 [C][ok] Qu'attendez-vous d'Innovact, et comment le mesure-t-on ?
> 3 choses : startup manager ex entrepreneur pour transposer notre expérience au marché français · accès CCI Marne, Investor Days, business angels · cadrage structurel (société, PI, financement). À M+6 : 20 entretiens avec verbatims, 2 à 3 design partners payants, structure en place, pré-seed engagé.

Q13-6 [?][ok] Pourquoi pas Station F ?
> Conséquence devenue choix. Ce qui manque n'est pas la densité d'événements mais un accompagnement individuel et un accès acheteurs : Innovact 20 ans, startup manager dédié, Quest for Change 300 startups, 114 M€ levés en 2025. Paris à 45 min de train.
-->
```

## Bloc 14 — Annexe · Création et exécution des simulations réalistes des workflows IA

```
<!--
ANNEXE · SOUS LE CAPOT

!! Aucun problème factuel identifié. Aucun chiffre, aucune source, aucune revendication de traction. Réserve méthodologique : « verdict fiable sur tout le périmètre » sans intervalle de confiance, même angle mort que la maquette S05.

Q14-1 [P][DANGER] Comment prouvez-vous que l'échantillon OED donne le même verdict que l'exhaustif ?
> Validation croisée : échantillon OED + rejeu exhaustif de référence sur un flux, comparaison des verdicts, écart publié. Fait sur nos propres workloads, pas encore packagé en rapport client. Règle imposée : aucun verdict sans intervalle de confiance, une validation exhaustive de référence par client au démarrage. C'est aussi le meilleur argument de vente.

Q14-2 [P][DANGER] Les workflows sont agentiques : outils, effets de bord, non déterminisme.
> Périmètre plutôt que promesse : d'abord RAG, extraction, synthèse, classification, code (colonne 3 de l'annexe). Agentique : appels d'outils enregistrés puis SIMULÉS à la relecture, mêmes observations, actions comparées à la référence, aucun effet de bord réexécuté. Limite annoncée : si la trajectoire divergerait fortement, on MESURE la divergence au lieu de simuler la suite. Multi tours long = roadmap, pas acquis.

Q14-3 [P][DANGER] Un SDK en production bancaire, c'est 6 mois. Les logs sont incomplets.
> Deux modes, le plus rapide est sans SDK : ingestion des logs (entrée, sortie, contexte), souvent partiels, vrai. Délai annoncé : quelques semaines chez un éditeur, plusieurs mois chez une entité financière, d'où le séquencement de S03. Jamais mesuré chez un client tiers : le 1er design partner le mesurera, M+6.

Q14-4 [?][DANGER] Sans réécrire les prompts, votre FAIL est un échec de portage.
> Biais réel à neutraliser. Deux niveaux rapportés : substituabilité à prompt constant (scénario de bascule d'urgence) et après adaptation, avec un budget d'adaptation borné, rapporté en effort de migration. Un FAIL qui devient PASS après 2 jours est une information utile, pas une contradiction. Upsell évident : optimisation de prompt par modèle.

Q14-5 [?][ok] Donnez-vous un intervalle de confiance ?
> Oui, non négociable : un verdict sans incertitude n'est pas opposable. IC dérivé du plan d'échantillonnage, verdict pris sur le bord défavorable et non sur la moyenne. Levier commercial : resserrer l'IC = acheter plus d'échantillons, l'incertitude devient un paramètre de prix.

!! L'IC n'apparaît pas dans la maquette S05 : son absence invite la question.
-->
```
