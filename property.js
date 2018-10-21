// class describing a property (game square) on the game board

var ctx = main.ctx

//TODO: use NES font for text

class Property {
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
  constructor(name, rent, price, block, x, y) {
    this.name = name;
    this.rent = rent;
    this.price = price;
    this.owner = null;
    this.block = block;
    this.x = x;
    this.y = x;
    this.height = 40;
    this.width = 40;
  }

  /** calculates and returns square coords from x,y.
  * x,y is the top left of the square.
  */
  makeSquare() {
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    ctx.fillText(this.rent, this.x(this.width), this.y(this.height));
    ctx.fillText(this.price, this.x(this.width), this.y(this.height));
    return true;
  }
}
