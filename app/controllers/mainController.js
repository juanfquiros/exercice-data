const dataMapper = require("../dataMapper.js");

async function homePage(_, res) {
  try {
    const cards = await dataMapper.getAllCards();
    res.render("cardList", { cards, title: "Liste des cartes" });
  } catch (error) {
    console.error(error);
    res.status(500).send(`A server error occurred:\n${error}`);
  }
}


//etape 1 : on écrit une méthode pour appeler la requête getOneCard écrite dans le dataMapper
async function renderOneCardPage(req, res) {
  const cardId = req.params.cardId;
  const card = await dataMapper.getOneCard(cardId);
  res.render("card", { card });
}

module.exports = {
  homePage,
  renderOneCardPage
};