# Exercice Data : Triple Triad

Triple Triad est un jeu de carte créé Par Sqaure Enix. Pour cet exercice on va s’en servir des données liées aux cartes ainsi que leurs visuels.

Le but c’est de faire une application afin de pouvoir gérer les différentes cartes.


## Étape 1 : Détail d'une carte

Quand on clique sur le bouton ‘’carte’’ présent dans la page d’accueil, on veut être redirigé sur la page ‘’détail d’une carte’’.

Pour cela on va commencer par créer la méthode `get card` dans le datamapper.

Ensuite on va appeler cette fonction dans le MainController et générer la view, et une fois que cela sera fait on modifie les href des liens.


## Étape 2 : Recherche

Le but de cette étape c’est de créer une fonction afin de pouvoir effectuer une recherche d’une carte ‘’par élément’’.


## Étape 3 : Construction d'un deck

Pour cette étape on veut être capables de créer un deck constitué de 5 cartes. L’idée c’est de pouvoir 
ajouter, visualiser et effacer les cartes au deck de la session.

Pour commencer on va faire appel à express-sessions pour stocker notre deck.

Ensuite on va venir créer une méthode pour pouvoir ajouter une carte à notre deck avec une limite de 5 
cartes par deck.

On va devoir créer une page pour pouvoir visualiser le deck qu’on est en train de créer. Cela se passera 
dans la route `/deck`.

Sur cette nouvelle vue on pourra modifier notre deck en ajoutant des liens pour effacer les cartes du deck
