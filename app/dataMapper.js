const database = require("./database");

async function getAllCards() {
  const { rows: cards } = await database.query("SELECT * FROM card");
  return cards;
}


//étape 1 :  on commence par écrire une requête pour récupérer toutes les infos liées à une carte
async function getOneCard(cardId) {
  const { rows: [card] } = await database.query("SELECT * FROM card WHERE id = $1", [cardId]);
  return card;
}

//étape 2 :  on  écrit une fonction pour pouvoir effectuer une recherche d’une carte "par élément"
async function getCardsWithElement(element) {
  const { rows: cards } = await database.query("SELECT * FROM card WHERE element = $1", [element]);
  return cards;
}

//étape 2 :  on  écrit également une fonction pour trouver les cartes qui ne contiennent aucun élément
async function getCardsWithoutElements() {
  const { rows: cards } = await database.query("SELECT * FROM card WHERE element IS NULL");
  return cards;
}

//étape 3 : On écrit une fonction pour récupérer les cartes par leur id
async function getCardsByIds(cardIds) {
  const { rows: cards } = await database.query("SELECT * FROM card WHERE id = ANY($1::int[])", [cardIds]);
  return cards;
}



module.exports = {
  getAllCards,
  getOneCard,
  getCardsWithElement,
  getCardsWithoutElements,
  getCardsByIds
};