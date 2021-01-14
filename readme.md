# *Application QI(QuébecInformatique)*

Ce fichier contient les instrustions générales pour le fonctionnement
de l'application QI.  Cette dernière est bâtie à partir de nodejs express
,utilise les applications Jquery, Bootstrap et est ecrie en HTML, 
en CSS et en JavaScript.

Le site est beaucoup plus beau si Google Chrome est utilisé pour le visioner.

## *Explications sur les fichiers principaux*

**[index.js](routes/index.js)**

La grande partie de la programmation est dans ce fichier. 
Vous y trouverez les endpoints pour toutes les pages(sauf 
gérant.html, qui est dans un fichier à part), ainsi que leurs contenu 
et comportements.

**[app.js](app.js)**

Ce fichier contient plein de choses que je ne comprend pas mais
une chose que je comprends c'est qu'il contient le numéro de port
utilisé pour lancé l'application avec localhost et les variables de 
path statique.

**[public/](public)**

Ce dossier contient tous les fichiers html, css, json, JavaScript 
ainsi que les images utlisées dans la construction de cette application.  

Chaque type de fichier est dans un sous-dossier approprié.

**[head.html](public/HTML/head.html)**

Ce fichier contient la partie supérieure répétée dans toutes les pages
du site.  Cela inclu le menu de navigation vers les autres pages et
les liens dans le head pour le bon fonctionnement des fonctions.

**[tail.html](public/HTML/tail.html)**

Ce fichier contient la partie inférieure répétée dans toutes les pages
 du site. Cela inclu le footer et la fermeture des balises ouvertes
 dans head.html.
 
**[gerant.html](public/HTML/gerant.html)**

Cette page ne pouvait pas être construite dans le fichier index.js
puisqu'elle devait être une fenêtre de type popup. Elle contient
la page qui apparait lorsqu'on appuie sur Gérant dans le menu.

**[style.css](public/CSS/style.css)**

Ce fichier contient les modification CSS appliquées aux pages 
du site.

**[scripts.js](public/JS/scripts.js)**

Ce fichier contient les scripts utilisés dans les pages du site.

**[bd.json](public/bd.json)**

Ce fichier contient les différents articles vendus avec leurs 
spécifications.

**[commandes.json](public/commandes.json)**

Ce fichier contient les commandes, complétées ou non, pour des 
articles.

## *Comment faire fonctionner l'application*

Premièrement, puisque l'application est un site internet, il faut 
un serveur comme host.  L'application est construite avec nodejs
 express alors on peut simplement entrer la commande 'npm start'
 pour démarrer le serveur local à l'adresse 311.  
 
 Ensuite, il suffit simplement d'aller sur le navigateur de votre 
 choix( Google Chrome est privilégié dû à la compatibilité avec le
 site ) et entrer 'localhost:311'.
 
 Il reste seulement à naviguer le site!