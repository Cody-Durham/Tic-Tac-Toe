
class Game {
  constructor () {
  this.playerOne = new PlayerOne(id, token, wins);
  this.playerTwo = new PlayerTwo(id, token, wins);
  this.currentPlayer = 'X';
  this.board = [
  {cell1: currentPlayer, cellId, playerToken},
]
}

playerTurn() {
  if ytd
}

winConditions() {
  var winCombos = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];
  for (var i = 0; i < winCombos.length; i++) {
    if (playerOne === winCombos[i]) {
      return true
    } else if (playerTwo === winCombos[i]) {
      return true
    } else {
      return false
    }
  }
}

drawConditions() {
      if (winCombos === false || winCombos.length > 2 ) {
      return 'Draw';
    }
  }

saveWinToStorage() {
}

resetGameBoard() {
}

};
