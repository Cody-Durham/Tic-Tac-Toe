// global varaiables 🍦
var cell1 = document.querySelector('#cell1');
var cell2 = document.querySelector('#cell2');
var cell3 = document.querySelector('#cell3');
var cell4 = document.querySelector('#cell4');
var cell5 = document.querySelector('#cell5');
var cell6 = document.querySelector('#cell6');
var cell7 = document.querySelector('#cell7');
var cell8 = document.querySelector('#cell8');
var cell9 = document.querySelector('#cell9');
var boardCells = Array.from(document.querySelectorAll('#game-board .cell'));


// var currentPlayer = Game.currentPlayer; 
// var playerOne = 'X';
// var playerTwo = 'O';

// eventListeners 🍦
cell1.addEventListener('click', createToken);
cell2.addEventListener('click', createToken);
cell3.addEventListener('click', createToken);
cell4.addEventListener('click', createToken);
cell5.addEventListener('click', createToken);
cell6.addEventListener('click', createToken);
cell7.addEventListener('click', createToken);
cell8.addEventListener('click', createToken);
cell9.addEventListener('click', createToken);


function createToken() {
  cell1.innerHTML = `${Game.currentPlayer}`
};
