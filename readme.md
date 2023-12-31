### Exam du 06 juillet 2023

> Pierre-Henry dOrglandes

**Q1**
dOrglandes PierreHenry B2ESGI

**Q2**
Pour le repo git (https://github.com/pho-rg/examAPI) les commandes :
git init
git add .
git commit -m "fisrt commit"
git remote add origin git@github.com:pho-rg/examAPI.git
git push origin main

Pour le projet node
node --version //checker la version/installation de node
npm init //initialisation du projet - les infos entrées se retrouveront dans le fichier package.json
touch index.js //ajout de notre point d'entrée de l'API
"dev": "node index.js" //spécification de notre point d'entrée dans le package.json

**Q3**
Node JS (pour JavaScript) est un ensemble d'outils et de packages faisant de lui un environnement pour le développement d'applications web. Une fois en place, cet environnement facilite la gestion des packages, les dépendances, le lancements d'instances web et la cohabitation des requêtes passées. Il nous permet de construire des applications web, dans notre répertoire de travail c'est aussi grace a Node JS que nous gérons les packages, et paramètrons les scripts pour lancer le projet. Un exemple d'outil est npm 'Node Package Manager' qui permet d'installer, mettre à jour et auditer les packages utilisés dans notre environnement. Un exemple de code 'npm install -D nodemon' permet d'installer nodemon qui, une fois le script paramétré dans le package.json, relance l'application à chaque modification du code source.

**Q4**
Nous avons installé express via la commande 'npm install express'. Le premier changement est l'apparition du repertoire 'node_modules'. Dans le package.json, nous avons la dépendance 'express' qui est apparu et son numero de version. Allant de paire avec l'installation, nous avons fait usage de plusieurs bonnes pratiques : la création des répertoires routes, controllers et models. Le fichier index.js (que l'on peut renommer app.js) qui est notre point d'entrée s'est vu recevoir la base (cf repo git commit 'question 4'). Nous avons installé le package body-parser qui sera utile plus tard pour parser les json renvoyés.
npm install express
npm install body-parser
mkdir routes controllers models

On en profite pour mettre un .gitignore sur le dossier node_modules

**Q5**
Express est un framework de Node JS qui fournit les méthodes et fonctions utiles à la création d'applications web et mobile mais aussi à la création d'API. Nous pouvons faire des application web avec une connexion à une base de données (relationnelle comme mariadb ou non relationnelle comme mongoose), développer une API ou encore une application web gérant un commerce en ligne.

**Q6**
Deux notions importantes d'express lors de la création d'API : les routes et les middleware. Les routes sont les chemins (URL) qui pointe vers les méthodes associées de l'API qui traitera la demande et renverra les informations associées. La route par défaut est '/' qui est le point d'entrée. La création de route nécessite de spécifier la ressource en question (ex '/etudiant') et renvoi les informations (ici par exemple la liste des étudiants pour la méthode GET, la création d'un étudiant sur la méhode POST). La route peut passer des informations en paramètre dans l'URL (ex '/etudiant/:id nous donnera les informations de l'étudiant de l'id ? pour la méthode GET, modifiera ses info pour la méthode PUT). La seconde notion de middleware est ce qui se trouve dans l'intermédiaire : après le requetage mais avant la réponse. C'est dans ce middleware (morceau de code) que l'on effectue le traitement voulut sur les infos. Dans l'infrastructure globale, nous avons les routes qui permettent l'accès aux données, les modèles qui définissent la structure et les types des données à envoyer (format adresse mail, string, integer, ...) et les controllers qui vérifient la validité des données (mot de passe de 5 caractères minimum, ...).

**Q7**
API pour Application Programming Interface. C'est une architecture orientée services deployée sur une application web. L'acronyme REST (Representational State Transfer) fait référence à un standard de développement auquel il est conseillé de respecter pour une application évolutive et interopérable. Derrière ce nom REST se cache 5 notions : 1Everything is a ressource (texte, image, lien) 2Une ressource possède un identifier unique 3Utiliser une interface simple et uniformisée 4Une requete est modélisée 5Be stateless (requetes indépendante et non nécessité de mémorisation d'une requete précédente pour faire la suivante)

**Q8**
Fait, cf le repo git commit 'question 8 9 & 10'

**Q9**
Une promise est un procédé qui admet que la valeur de l'élément en question peut ne pas être encore connu ou définitif. Une promise introduit alors la notion d'asynchrone. De ce fait une promise se caractérise par un état (pending, fulfilled ou rejected).

**Q10**
Fait en question 3 pour exemple (rappel : npm install -D nodemon puis modification du package.json). C'est une dépendance permettant  de relancer l'instance web quand une modification sur le code est faite (detection de la sauvegarde). Cela diffère d'express car c'est un package à part entière : ils sont tous les deux indépendant. Nodemon est un utilitaire de surveillance des fichiers quand Express est un framework de création d'application.

**Q11**
Le traitement d'erreur peut être géré directement dans le middleware avec express. Plutot que d'avoir trois argument (req, res, next) nous en avons quatre (err, req, res, next). Reprenons l'exemple de la documentation d'express :


app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

**Q12**

**Q13**
https://github.com/pho-rg/examAPI
