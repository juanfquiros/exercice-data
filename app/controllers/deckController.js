//étape 3 : On crée un controller pour gérer la création d’un deck composé de plusieurs cartes
const dataMapper = require("../dataMapper");

async function renderDeckCardsPage(req, res) {
  const cardIds = req.session.deck;

  res.render("cardList", {
    cards: await dataMapper.getCardsByIds(cardIds),
    title: "Cartes du deck"
  });
}

// étape 3 : on crée une méthode pour ajouter une carte dans le deck
async function addCardToDeck(req, res) {
  const cardId = req.params.cardId;
  if (isCardAlreadyInDeck(cardId)) {
    return res.redirect("/deck");
  }

  if (hasDeckReachedMaxSize()) {
    return res.redirect("/deck");
  }

  req.session.deck.push(cardId);
  res.redirect("/deck");


  function isCardAlreadyInDeck() {
    return req.session.deck.some(card => card.id === cardId);
  }

  function hasDeckReachedMaxSize() {
    return req.session.deck.length === 5;
  }
}

//étape 3 : on crée une méthode pour effacer une carte du deck

async function removeCardFromDeck(req, res) {
  const cardId = req.params.cardId;

  if (isCardInDeck(cardId)) {
    const indexOfCard = req.session.deck.indexOf(cardId);
    req.session.deck.splice(indexOfCard, 1);
  }
  res.redirect("/deck");


  function isCardInDeck(cardId) {
    return req.session.deck.includes(cardId);
  }
}


module.exports = {
  addCardToDeck,
  renderDeckCardsPage,
  removeCardFromDeck
};