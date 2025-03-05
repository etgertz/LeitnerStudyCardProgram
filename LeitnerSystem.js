//const Deck = require("./Deck");
import { Deck } from "./Deck.js";

export class LeitnerSystem {
  static activeDeck=null;

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

  setActiveDeck(name){
    this.activeDeck = getDeck(name);
  }

  getActiveDeck(){
    return this.activeDeck;
  }
}
//module.exports = LeitnerSystem;
