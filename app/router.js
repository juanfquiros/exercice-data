const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const searchController = require("./controllers/searchController");
const deckController = require("./controllers/deckController");


router.get("/", mainController.homePage);
//étape 1 :  on ajoute une nouvelle route vers la nouvelle méthode du controller
router.get("/cards/:cardId", mainController.renderOneCardPage);
router.get("/search", searchController.searchPage);

//étape 2 :  on ajoute les routes dans le router
router.get("/search", searchController.searchPage);
router.get("/search/element", searchController.searchByElement);

//étape 3 :  on ajoute les nouvelles routes dans le router
router.get("/deck", deckController.renderDeckCardsPage);
router.get("/deck/add/:cardId", deckController.addCardToDeck);
router.get("/deck/remove/:cardId", deckController.removeCardFromDeck);


module.exports = router;