'user-strict';

import { Gameboard } from './Gameboard';

export class Player {
  constructor(isComputer = false) {
    this.isComputer = isComputer;
    this.gameboard = new Gameboard();
  }
}
