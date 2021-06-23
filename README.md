trend.
======

# trend.

Trend est une application web developpée en Next.js à l'aide de la commande `npx create-next-app`. Trend. utilise l'API de [News API](https://newsapi.org/ "newsapi.org") afin de recupérer des articles du monde entier, et d'ainsi les trier, les rechercher ou les afficher avec le traitement de l'application Trend.

## Ma méthodologie

Étant déjà fammilier avec le framework React.js, j'ai voulu apprendre Next.js sachant les nombreux avantages qu'il possède, je me suis dit que cela allait toujours me servir. Je me suis donc formé rapidement aux fondamentaux et ai commencé à imaginer une application qui serait utile et faisable en next.js. Je me suis renseigné sur l'api de [News API](https://newsapi.org/ "newsapi.org") que je ne connaissais pas et ais eu l'idée de créer une application recensant les derniers articles parus dans le monde entier par thématique avec possibilité de recherche de mots-clés.

Avant toute chose j'ai créé un repository gitHub pour suivre mon avancée et gérer les versions.

J'ai en parallèle mis l'application sur la plateforme Vercel à l'adresse [https://trend-app.vercel.app/](https://trend-app.vercel.app/), pour pouvoir tester l'application sur différents supports et vérifier les fonctionnalité en mode production.

## Structure du code

J'ai donc segmenté mon arborescence pour une compréhension maximale de la hiérarchie des éléments. Un dossier `src` contient les `components`, `layout`, `pages` et `template` de mon application. 

J'ai décidé d'utiliser la méthode `getServerSideProps` au sein de l'application pour un rendu dynamique et un contenu qui s'actualise à chaque requête de l'utilisateur.

J'ai utilisé des routes dynamiques pour afficher les détails d'un article.

Plusieurs composants ont été créés afin de créer un rendu fluide tout au long de la navigation

## Limitations

L'API NewsAPI était une découverte pour moi, elle possède une limite qui peut poser soucis au moment de la navigation sur l'application : en "mode développeur" l'API peut renvoyer un nombre de requête limités toutes les 12h. C'est pour cela qu'il est possible que lors de la navigation l'application indique :
*_"The request didn't send any articles. Double check your research or check the API key validity."_*
Il suffit alors de vérifier le fichier `.env` à la racine de l'application et de changer la clé par celle-ci : `2e0b8f31bf684707982801288c080e07`

## Installing <project_name>

To install <project_name>, follow these steps:

Linux and macOS:

```
<install_command>
```

Windows:

```
<install_command>
```

