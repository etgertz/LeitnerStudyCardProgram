export class Bin {
  constructor(id) {
    this.id = id; // Bin number
    this.cards = [];
  }

  isEmpty() {
    return this.cards.length == 0;
  }

  addCard(card) {
    this.cards.push(card);
  }

  removeCard() {
    return this.cards.shift();
  }

  //getCards() {
  //  return cards;  // Convert to array when needed
  //}

  top() {
    return this.cards[0]; //get first item
  }
}
//module.exports = Bin;
