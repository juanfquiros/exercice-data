const dotenv = require("dotenv");
//étape 3 :  on fait appel à express-sessions
const session = require("express-session");
const express = require("express");
dotenv.config();

const PORT = process.env.PORT || 1234;
const router = require("./app/router");

const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(express.static("public"));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(deckInitializerMiddleware);

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

function deckInitializerMiddleware(req, _, next) {
  if (! req.session.deck) {
    req.session.deck = [];
  }
  next();
}