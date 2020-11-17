// global varaiables 🍦

//query selsecors 🍦
var cellOne = document.querySelector('#cell1');

cellOne.addEventListener('click', createCard);
// var boardCells = Array.from(document.querySelectorAll('#game-board .cell'));

var game = new Game();
var currentPlayer = 0;
var playerOne = 'X';
var playerTwo = 'O';


function createCard() {
  cellOne.innerHTML = `<p>test</p>`
  console.log('test'); 
};
