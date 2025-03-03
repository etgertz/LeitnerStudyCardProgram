//const Deck = require("./Deck");
import { Deck } from "./Deck.js";

export class LeitnerSystem {
  constructor() {
    this.decks = {};
  }

  addDeck(name) {
    if (!this.decks[name]) {
      this.decks[name] = new Deck(name);
    }
  }

  getDeck(name) {
    return this.decks[name] || null;
  }

  listDecks() {
    return Object.keys(this.decks);
  }
}
//module.exports = LeitnerSystem;
