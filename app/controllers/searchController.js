//étape 2 :  création d’un controller pour gérer la recherche des cartes
const dataMapper = require("../dataMapper");

function searchPage(_, res) {
  res.render("search");
}

async function searchByElement(req, res) {
  const element = req.query.element;
  if (element === "aucun") {
    res.render("cardList", {
      cards: await dataMapper.getCardsWithoutElements(),
      title: "Cartes sans éléments"
    });
  } else {
    res.render("cardList", {
      cards: await dataMapper.getCardsWithElement(element),
      title: `Cartes d'élément ${element}`
    });
  }
}

module.exports = {
  searchPage,
  searchByElement
};