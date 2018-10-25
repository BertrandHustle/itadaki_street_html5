// class describing a property (game square) on the game board

/**
* @param {string} name - the name of the property
* @param {number} rent - the amount a player has to pay if they
* land on the property
* @param {number} price - the amount a player has to pay to buy the property
* @param {Player} owner - the player who owns this property, default Null
* @param {char} block - the block this property belongs to
* @param {number} x - x coord of location of property on board
* @param {number} y - y coord of location of property on board
* @param {number} height - default height of property rectangle to draw
* @param {number} width - default width of property rectangle to draw
*/
function Property(name, rent, price, block, x, y) {
  this.name = name;
  this.rent = rent;
  this.price = price;
  this.owner = null;
  this.block = block;
  this.x = x;
  this.y = y;
  this.height = 50;
  this.width = 50;

  /**
  * finds center of the rectangle (x,y is the top left corner)
  * @param {}
  */

  // draws square with rent and price text on board
  this.makeSquare = function() {
    ctx.beginPath();
    // draw square
    ctx.rect(this.x, this.y, this.height, this.width);
    ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
    ctx.stroke();
    // add rent and price text
    //TODO: use NES font for text
    ctx.font='15px Arial'
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    ctx.fillText(this.rent, this.x, this.y);
    ctx.fillText(this.price, this.x, this.y-20);
    ctx.closePath();
  };
}
