var playerTurn = 0;
var NUM_COLS = 3;
var NUM_ROWS = 3;
var SYMBOLS = ["X", "O"];

var tiles = [];

function preload() {
	misha = loadImage("../assets/misha.jpg")
}


function setup() {
  // put setup code here
  createCanvas (400,400); 

  for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        tiles.push(new Tile(i * (width/NUM_COLS-1), j * (height/NUM_ROWS-1)));
    }
}
}

function draw() {
  // put drawing code here
}




//checking if 3 tiles in a row/column are the same
var areSameTiles = function(tileid0, tileid1, tileid2){
    if ((tiles[tileid0].label === tiles[tileid1].label) && 
        (tiles[tileid1].label === tiles[tileid2].label) && 
        (tiles[tileid0].label !== "")) {
        return true;
    } else {
        return false;
    }
};

//8 possible winning combinations
var combinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]    
 ];
 
 var isWin = function(){
     for(var i in combinations) {
         var combination = combinations[i];
         if (areSameTiles(combination[0], combination[1],combination[2])){
             return true;
         }
     } 
     return false;
 };

 var isTie = function(){
 	for (var i in tiles) {
 		if(tiles[i].label === ""){
 			return false;
 		}
 	} 
 	return true;
 };
    
var Tile = function(x, y) {
    this.x = x;
    this.y = y;
    this.size = width/NUM_COLS;
    this.label = "";
};

Tile.prototype.draw = function() {
    fill(90, 91, 115);
    strokeWeight(2);
    stroke(255,255,255)
    rect(this.x, this.y, this.size, this.size, 10);
    textSize(100);
    textAlign();
    fill(255, 255, 255);
    ellipse(this.x, this.y, 10, 10);
    text(this.label, this.x+this.size/2-35, this.y+this.size/2+35);
};

Tile.prototype.empty = function() {
    return this.label === "";
};

Tile.prototype.onClick = function() {
    // If the tile is not empty, exit the function
    if (!this.empty()) {
      return;  
    }
    
    // Put the player's symbol on the tile
    this.label = SYMBOLS[playerTurn];
    playerTurn++;
    
    // Change the turn
    if (playerTurn >= SYMBOLS.length){
      playerTurn   = 0;
    }
};

Tile.prototype.handleMouseClick = function(x, y) {
    // Check for mouse clicks inside the tile
    if (x >= this.x && 
        y >= this.y &&
        x <= this.x + this.size && 
        y <= this.y + this.size ) {
        this.onClick();
    }
};



var drawTiles = function() {
    for (var i in tiles) {
        tiles[i].draw();
    }
};
draw = function() {
    background(0, 0, 0);
    drawTiles();
};

//var misha = getImage("avatars/mr-pink");

mouseReleased = function() {
    for (var i in tiles) {
        tiles[i].handleMouseClick(mouseX, mouseY);
    }
    
    if (isWin() === true) {
        noLoop();
        noStroke();
        textAlign(CENTER);
        background(201, 18, 58);
        textSize(50);
        text("Misha wins!", 200, 100);
        textSize(25);
        text("because he always wins,", 200, 150);
        textSize(15);
        text("one lucky bastard", 200, 180);
        imageMode(CENTER);
        image(misha, 200, 300, 100, 110);
       // println("Misha wins!");
    } else if (isTie() === true){
    	  noLoop();
        noStroke();
        textAlign(CENTER);
        background(201, 18, 58);
        textSize(50);
        text("Try harder!", 200, 100);
        textSize(25);
        text("Misha needs a victory!", 200, 150);
        imageMode(CENTER);
        image(misha, 200, 300, 100, 110);    
    }
};


