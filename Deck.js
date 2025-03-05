//const Bin = require("./Bin");
import { Bin } from "./Bin.js";
export class Deck {
  static cards = 0;
  static currentBin;

  constructor(name) {
    this.name = name;
    this.bins = Array.from({ length: 6 }, (_, i) => new Bin(i));
  }

  moveCard(card, fromBin, toBin) {
    if (this.bins[fromBin] && this.bins[toBin]) {
      this.bins[fromBin].removeCard(card);
      this.bins[toBin].addCard(card);
    }
  }

  addCard(card, binIndex = 0) {
    this.bins[binIndex].addCard(card);
    Deck.cards++;
  }

  getActiveBins(activeCount) {
    return this.bins.slice(0, activeCount);
  }

  removeCard(binIndex = 0) {
    Deck.cards--;
    return this.bins[binIndex].removeCard();
  }

  moveCardUp(binIndex) {
    if (binIndex < this.bins.length - 1) {
      this.bins[binIndex + 1].addCard(this.bins[binIndex].removeCard());
    }
  }

  moveCardDown(binIndex) {
    if (binIndex > 0) {
      this.bins[binIndex - 1].addCard(this.bins[binIndex].removeCard());
    }
  }

  getCurrentBin(){
    return currentBin;
  }

  setCurrentBin(binNumber){
    if(binNumber>0 && binNumber<6)
    currentBin = this.bins[binNumber-1];
  }
}
//module.exports = Deck;
