'user-strict';

export class Ship {
  constructor(shipLength, numOfHits = 0) {
    this.shipLength = shipLength;
    this.numOfHits = numOfHits;
  }

  hit() {
    this.numOfHits++;
  }

  isSunk() {
    return this.numOfHits >= this.shipLength;
  }
}
