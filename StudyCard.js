export class StudyCard {
  constructor(front, back) {
    this.front = front;
    this.back = back;
    this.box = 0;
    this.isFlipped = false;
  }

  flip() {
    this.isFlipped = !this.isFlipped;
  }
}
//module.exports = StudyCard;
