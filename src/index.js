'user-strict';
import './style.css';

class Ship {
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

class Gameboard {
  constructor(parameters) {
    this.board = {}; // Stores ship placements (e.g., { "A1": ship1, "A2": ship1 })
    this.ships = []; // Stores all ship instances
    this.missedShots = new Set(); // Stores missed shot coordinates
  }

  // Store ships and their positions.
  placeShip(ship, coordinates) {
    if (coordinates.length !== ship.shipLength) {
      throw new Error('Coordinates must match the ship length.');
    }
    coordinates.forEach((coordinates) => {
      if (this.board[coordinates]) {
        throw new Error(`Position ${coordinates} is already occupied.`);
      }
      this.board[coordinates] = ship;
    });
    this.ships.push(ship);
  }

  receiveAttacks(coordinates) {
    // Process attacks and update the state of ships.
    if (this.board[coordinates]) {
      this.board[coordinates].hit(); // Call the ship's hit method
      return 'hit';
    } else {
      // Record missed attacks.
      this.missedShots.add(coordinates);
      return 'miss';
    }
  }

  // Determine if all ships have been sunk.
  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

class Player {
  constructor(isComputer = false) {
    this.isComputer = isComputer;
    this.gameboard = new Gameboard();
  }
}
