
class Game {
  constructor () {
  this.playerOne = new Player(1);
  this.playerTwo = new Player(2);
  this.currentPlayer = 'X';
  this.board = ['','', '', '', '', '', '', '', '']
  // this.board = [];
  this.winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
}
updateBoard(ttt) {
  // console.log(check, 'AAA');
  this.board.splice(ttt, 1, this.currentPlayer)
}

playerTurn() {
  if (this.currentPlayer === 'X') {
    this.currentPlayer = 'O'
  } else {
    this.currentPlayer = 'X'
  }
}

winConditions() {
  for (var i = 0; i < this.winCombos.length; i++) {
    if (this.playerOne === this.winCombos[i]) {
      return true
    } else if (this.playerTwo === this.winCombos[i]) {
      return true
    } else {
      return false
    }
  }
}

// drawConditions() {         //not sure about this below⌄
//       if (this.winCombos === false || this.winCombos.length > 8) {
//       alert('Draw');
//     }
//   }

saveWinToStorage() {
}

resetGameBoard() {
}

};

//click, check board, check win combos,
