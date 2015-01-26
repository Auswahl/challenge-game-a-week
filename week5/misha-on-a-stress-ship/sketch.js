var funRocks = [0, 1, 2, 3, 4, 5, 6, 7];


	var bullets = [];
	var Misha;

function preload() {
	misha = loadImage("../assets/misha.png");
	backImage = loadImage("../assets/background.png");
	funRockImg = loadImage("../assets/GemGreen.png");
}

function setup() {
	createCanvas(400, 400);
	Misha = new Player(width / 2, height - 50);
	

	var columnWidth = width / funRocks.length;

	for (var i in funRocks) {
	var leftColumnSide = i * columnWidth + 20;
	var rightColumnSide = leftColumnSide + columnWidth - 40;
	funRocks[i] = new FunRock((random(leftColumnSide, rightColumnSide)), (random(-300, 0)));
}
}

//Misha is on a stress trip, driving stressship. Killing all the fun.
//Sounds ridiculous, but you should help him kill all th rock-solid fun. Good luck with that!

//Misha can move to the right and to the left, by using arrow keys.
//He can also shoot - hit the spacebar

//all about background
//var backImage = getImage("space/background");
var stars = [];

//Player
var Player = function(x, y) {
	this.x = x;
	this.y = y;
	this.width = 100;
	this.height = 100;
	this.playerImg = misha;
};

Player.prototype.draw = function() {
	imageMode(CENTER);
	image(this.playerImg, this.x, this.y, this.width, this.height);
};



//Other objects
var score = 0;
var hitpoints = 7;


var FunRock = function(x, y) {
	this.x = x;
	this.y = y;
	this.width = 40;
	this.height = 50;
	this.funRockImg = funRockImg;
};

FunRock.prototype.draw = function() {
	imageMode(CORNER);
	image(this.funRockImg, this.x, this.y, this.width, this.height);

};

FunRock.prototype.move = function() {
	this.y+=1.7;
	if (this.y >= height) {
		this.y = random(0, 50);
		hitpoints--;
	}
};


var Bullet = function(x, y) {
	this.x = x;
	this.y = y;
};

Bullet.prototype.draw = function() {
	stroke(255, 238, 0);
	strokeWeight(5);
	point(this.x, this.y);
};

Bullet.prototype.move = function() {
	this.y--;
	if (this.y <= 0) {
		this.isOut = true;
	}
};



FunRock.prototype.checkForCollision = function(bulletObject) {
	//if beaver is over stick, do something
	if ((bulletObject.x >= this.x && bulletObject.x <= (this.x + this.width)) &&
		(bulletObject.y >= this.y && bulletObject.y <= (this.y + this.height))) {
		this.y = -400;
		score++;
		bulletObject.isOut = true;
	}
};

var checkForCollisions = function() {
	for (var i in funRocks) {
		for (var j in bullets) {
			funRocks[i].checkForCollision(bullets[j]);
		}
	}

};




draw = function() {
	imageMode(CORNER);
	image(backImage, 0, 0);

	textSize(14);
	fill(0,0,0);
	text("Stress points: " + hitpoints, 260, 30);
	text("Fun killed: " + score, 25, 30);

	for (var i in funRocks) {
		funRocks[i].draw();
		funRocks[i].move();
	}


	if (keyIsPressed && keyCode === RIGHT_ARROW) {
		Misha.x += 5;
	} else if (keyIsPressed && keyCode === LEFT_ARROW) {
		Misha.x -= 5;
	}
	Misha.draw();

	if (keyIsPressed && keyCode === 32) {
		bullets.push(new Bullet(Misha.x, Misha.y - Misha.height / 3.5));
	}
	for (var i = bullets.length - 1; i >= 0; i--) {
		bullets[i].draw();
		bullets[i].move();

		if (bullets[i].isOut) {
			bullets.splice(i, 1);
		}
	}

	checkForCollisions();
	
	//println(hitpoints);
	if (hitpoints <= 0) {
		background(255, 55, 0);
		noStroke();
		fill(255,255,255);
		textSize(35);
		text("STRESS IS OVER!", 75, 150);
		textSize(17);
		text("too much Fun for Misha...", 100, 200);
		text("But you've helped him to kill a looot of fun: " + score, 50, 250);
		noLoop();
	}

	if (score >= 0) {
		background(255, 55, 0);
		noStroke();
		fill(255,255,255);
		textSize(35);
		text("ALL FUN IS DEAD!", 75, 150);
		textSize(17);
		text("Misha is a real Party Killer", 100, 200);
		text("Thanks to you", 125, 250);
		noLoop();
	}

};

function keyPressed() {
  return false;
}