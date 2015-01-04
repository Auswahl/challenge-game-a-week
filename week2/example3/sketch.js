
var playerImg;
var playerImgHop;
var grassBlockImg;

function preload() {
  playerImg = loadImage("../assets/Hopper-Happy.png");
  playerImgHop = loadImage("../assets/Hopper-Jumping.png");
  grassBlockImg = loadImage("../assets/GrassBlock.png")
}

var Beaver = function(x,y) {
    this.x = x;
    this.y = y;
    this.img = playerImg; //getImage("creatures/Hopper-Happy");
    this.sticks = 0;
};

Beaver.prototype.draw = function() {
   fill(255,0,0);
   this.y = constrain(this.y, 0, height-50);
   image(this.img, this.x, this.y, 40, 40);
};

Beaver.prototype.hop = function(){
    this.img = playerImgHop;//getImage("creatures/Hopper-Jumping");
    this.y -=5;
};

Beaver.prototype.fall = function(){
    this.img = playerImg;//getImage("creatures/Hopper-Happy");
    this.y +=5;
};

Beaver.prototype.checkForStickGrab = function(stick) {
    //if beaver is over stick, do something
    if ((stick.x >= this.x && stick.x <= (this.x+40)) &&
        (stick.y >= this.y && stick.y <= (this.y+40))) {
            stick.y = -400;
            this.sticks++;
        }
};

//sticks
var Stick = function(x,y) {
    this.x = x;
    this.y = y;
};

Stick.prototype.draw = function() {
     fill(117, 58, 58);
        rectMode(CENTER);
     rect(this.x, this.y, 5, 40);
};


var beaver = new Beaver(10, 300);//so all connected to Beaver - like all staff with prototypes - a related to this variable


// environment



//array of sticks
var sticks = [];

//array of X positions for each grass block
var grassXs = [];


function setup() {
	createCanvas(400, 400);
	for ( var i = 0; i < 25; i++ ) {
		grassXs.push(i*20);
	} 

	for ( var i = 0; i < 40; i++){
		sticks.push(new Stick(i * 40 + 300, random(20, 260)));
	}
}

function draw() {
    //background and footer
     background(255, 236, 140);
     rectMode(CORNER);
     noStroke();
     fill(92, 148, 78);
     rect(0, height*0.95, width, height*0.1);
     
    //grass
    for (var i = 0; i < grassXs.length; i++) {
        //image(getImage("cute/GrassBlock"), grassXs[i], height*0.90, 20, 20); old version of Grass image
        image(grassBlockImg, grassXs[i], height*0.90, 20, 20); //new version of Grass image
        grassXs[i] -= 1;//grass moving
        if (grassXs[i] <= -20) { //grass respawn
            grassXs[i] = width;
        }
    }
    
    //drawing sticks
//     for (var i = 0; i < sticks.length; i++){
//     sticks[i].draw();
//     sticks[i].x -=1;
// }

    //check grabbed sticks
    
    for (var i = 0; i < sticks.length; i++) {
        sticks[i].draw();
        beaver.checkForStickGrab(sticks[i]);
        sticks[i].x -=1;
    }

    textSize(20);
    text("Score: " + beaver.sticks, 20, 30);

    if (beaver.sticks/sticks.length >= 0.95) {
        textSize(36);
        text("YOU WIN!!!!", 100, 200);
    }

    if (keyIsDown(32)){
          beaver.hop();
      } else {
          beaver.fall();
      }
    beaver.draw();
};



