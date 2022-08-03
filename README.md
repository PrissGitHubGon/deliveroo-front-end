# Deliveroo

##  1️⃣ Projet 

Lors de mes 10 semaines de Bootcamp dans l'école de formation "Le Reacteur", j'ai eu comme exercice la réalisation de la maquette Deliveroo.

J'ai réalisé lors du module back-end une Api permettant :
* J'ai créer un projet Express dans lequel j'ai ajouter un fichier "index.js" pour y coller le JSON fourni dans la route "/" et je l'ai héberger sur Heroku.
## Exemple :
* ``
app.get("/", (req, res) => {
  return res.json({
    restaurant: {
      path: "Le Pain Quotidien",
      name: "Le Pain Quotidien - Montorgueil",
      categories: ["Petit Déjeuner", "Salade", "Brunch", "Boulangerie"],
      price: "€€",
      phone: "+33144780895",
      percentage: 87, .....
``


J'ai réalisé lors du module Front-end :
* La mise en place de la récupération des données de l'API et de la feuille de styles pour afficher la liste des menus sur la page
* Grâce aux changements d'états, j'ai créez le panier qui affiche les commandes sélectionné.


## Modification à venir
* ⚠ Refonte du site pour mettre en place la responsive avec Tailwind ou Bootstrap
* Modifer le panier afin qu'il affiche le montant de la commande.


## Lien vers le site 

⛔ En cours

## Preview 

* Aperçu du site avant 🔨🔨 Travaux 🔨🔨


![Deliveroo](https://user-images.githubusercontent.com/87413559/182640594-b72b263a-5a29-4155-8ba7-7ef19d981487.png)



## Construit avec

FRONT-END
* create-react-app
* HTML / CSS
* yarn
* react-fontawesome


BACK-END
* "cors": "^2.8.5",
* "express": "^4.17.3",



# Commencer à travailler

## Installation

1. Clone the repo
* ``git clone https://github.com/PrissGitHubGon/deliveroo-front-end.git``

2. Install "Yarn" package
* ``yarn add``

3. Lancer le projet
* ``yarn start``
