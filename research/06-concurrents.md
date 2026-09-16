# Analyse concurrentielle — Titral

Réponse à la section 6 du dossier de présentation (Innovact, septembre 2026) : identification des concurrents et définition de l'avantage concurrentiel de Titral sur le marché de l'évaluation et de la migration IA.

## 6a. Identification et caractérisation des principaux concurrents

Le marché de l'évaluation et du test des modèles d'IA en 2026 se divise en plusieurs segments qui, bien que proches technologiquement, n'adressent pas le même cas d'usage stratégique que Titral : personne ne rejoue les workloads de production réels d'une entreprise contre des alternatives pour arbitrer une décision de migration.

| Catégorie | Acteurs représentatifs | Caractérisation & limites |
| :---- | :---- | :---- |
| **Leaderboards publics** | LMSYS Chatbot Arena, HELM (Stanford), MMLU / Open LLM Leaderboard | Classements continus et gratuits, mais hors-sol : jeux de tests génériques, aucune donnée d'entreprise, aucun arbitrage possible pour un cas d'usage donné. Photographie descriptive, pas un verdict. |
| **Outils pour développeurs (CLI / CI-CD)** | OpenRouter (évals intégrées) | Outils d'ingénierie pensés pour les tests unitaires en cours de développement. *Limite :* ciblent les développeurs, ne produisent aucun dossier d'évidence exploitable par les directions des risques ou des achats. |
| **Plateformes de conformité "AI Act-native"** | Giskard, Kosmoy | Auditent un modèle donné pour les biais, hallucinations et la sécurité (red-teaming). *Limite :* sécurisent le modèle en place (conformité pure) mais ne chiffrent ni la faisabilité technique ni le gain financier d'une migration vers un fournisseur alternatif. |
| **Observabilité LLM** | LangSmith, Langfuse, Braintrust, Arize Phoenix, Helicone | Monitorent les requêtes en production et rejouent des traces pour détecter des régressions sur *son propre* pipeline. *Limite :* outils réactifs qui constatent l'état actuel, jamais pour arbitrer entre fournisseurs. Ancrage de prix marché : LangSmith 39 $/siège + usage, Braintrust 249 $/mois, Langfuse 29 $ → 2 499 $/mois en Enterprise — offres entreprise à partir de ~2,5 k$/mois. |
| **Test d'infrastructure / rejeu de charge** | GuideLLM (Red Hat / Neural Magic, open source), LayerLens | Testent la charge, la latence et le débit via du rejeu massif ("shadow deployment"). *Limite :* rejouer l'intégralité du trafic est coûteux et ne mesure que la performance d'infrastructure (latence, throughput), pas la qualité de réponse ni l'arbitrage de migration — et sans échantillonnage intelligent, l'approche reste économiquement intenable en continu. |
| **Gateways souverains** *(partenaires, pas concurrents)* | Orq.ai, Soverana, OpenRouter, LiteLLM | Réduisent le coût technique du changement de fournisseur (abstraction d'API) mais ne disent jamais *vers quoi* migrer ni avec quel impact qualité/coût. Orq revendique 94 % au EU Cloud Sovereignty Framework ; Soverana route vers Mistral/Llama/Qwen sur 7 fournisseurs européens. Intégration naturelle en aval du verdict Titral. |
| **Audits conseil traditionnels** | Big 4 (Deloitte, PwC, EY, KPMG), cabinets spécialisés | Évaluations manuelles sur des jeux de données représentatifs (« 40 critères », « 600 prompts »). *Limite :* approche ponctuelle (one-off), coûteuse — une photographie vraie le jour du rendu, périmée dès la mise à jour de modèle suivante. |

**À vérifier avant soumission finale :** deux références citées dans le brouillon initial — le produit d'évaluation exact d'OpenRouter et « LayerLens » — n'ont pas encore été confirmées par une source primaire indépendante. À valider (site officiel, levée de fonds, clients) avant d'engager ces noms dans un document destiné à un jury.

## 6b. Différenciation et avantage concurrentiel

Titral ne se positionne ni comme un outil de monitoring technique pour développeurs, ni comme un validateur de biais ou un gateway d'API, mais comme **la plateforme d'assurance IA et de pilotage de la migration**. Quatre piliers fondent l'avantage concurrentiel :

- **Preuve par les données de production réelles.** Contrairement aux leaderboards publics ou aux jeux de tests représentatifs des audits conseil, Titral base son verdict de migration (qualité, coût, latence) exclusivement sur les workloads réels et anonymisés du client — via SDK léger ou ingestion des logs existants. C'est la seule méthode qui prédit fiablement le comportement d'un modèle alternatif en conditions réelles, plutôt que sur un échantillon générique.

- **Barrière technologique de l'OED (Optimal Experiment Design).** Là où le rejeu exhaustif du trafic coûte trop cher (cf. GuideLLM, gateways, observabilité), Titral applique six ans d'expertise en échantillonnage bayésien pour identifier et ne rejouer que les sessions les plus informatives. Cela transforme un audit ponctuel hors de prix en un pilotage continu et économiquement viable — sans multiplier les coûts par le nombre de combinaisons vendor × modèle testées.

- **Conformité opposable (DORA & AI Act).** Titral livre un dossier d'évidence chiffré aux directions des risques et de la conformité, pas un scorecard qualitatif. Il prouve la capacité de l'entreprise à maîtriser son risque tiers et sa réversibilité, répondant à l'article 28 de DORA (en vigueur depuis le 17 janvier 2025) et aux obligations de transparence de l'AI Act (2 août 2026) — un registre que ni les plateformes de conformité (Giskard, Kosmoy), ni les audits ponctuels ne fournissent en continu.

- **Arbitrage de la souveraineté.** Titral est le seul acteur qui traduit une volonté politique (migrer vers un fournisseur souverain européen) en décision chiffrée et actionnable : quelle application spécifique migrer, vers quel modèle, pour quel gain financier et quel impact qualité — pas seulement « quels fournisseurs europééens existent » (rôle des gateways) ni « ce modèle est-il conforme » (rôle des plateformes AI Act-native).

**Risque de comblement le plus probable :** un acteur de l'observabilité LLM (LangSmith, Langfuse) ajoutant une fonctionnalité de rejeu cross-fournisseur, ou un gateway souverain (Orq, Soverana) ajoutant une couche de benchmarking. Dans les deux cas, la barrière reste l'expertise OED — condition nécessaire pour rendre ce rejeu continu économiquement viable — combinée à l'expérience d'exécution des fondateurs (six ans de R&D en conception optimale d'expérience, doublés d'un track record de mise à l'échelle d'un produit IA réel chez AIO), difficile à répliquer rapidement en interne par un outil déjà positionné sur un autre cas d'usage.

---

*Sources : synthèse s'appuyant sur `FINDINGS.md` §4 (recherche exa/tavily, 2026-09-11) et sur le brouillon `Titral - Analyse Concurrentielle (Section 6).md` fourni le 2026-09-15. Compléter avec sources primaires (URL) pour toute donnée non encore vérifiée avant intégration au dossier final.*
