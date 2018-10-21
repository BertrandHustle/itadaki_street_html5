var canvas = document.getElementById('gameCanvas')
var ctx = canvas.getContext('2d')
class Property {}

// make this into a decorator?

/*
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
**/

// init properties
// TODO: generate these from flat "game board" files
let prop1 = new Property('test', 500, 1000, 'A', 5, 5);
console.log(prop1);
prop1.makeSquare();

// draws the game board
function drawBoard() {
  prop1.makeSquare();
}

drawBoard();
