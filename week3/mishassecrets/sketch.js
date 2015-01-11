var faces;
var tiles = [];
var selected = [];

function preload() {

	//birthdayMusic = loadSound('../assets/8-bit happy birthday.mp3');

	faces = [
		loadImage("../assets/leafers-seed.png"),
		loadImage("../assets/leafers-seedling.png"),
		loadImage("../assets/leafers-sapling.png"),
		loadImage("../assets/purple-pi.png"),
		loadImage("../assets/leafers-ultimate.png"),
		loadImage("../assets/marcimus.png"),
		loadImage("../assets/mr-pants.png"),
		loadImage("../assets/mr-pink.png"),
		loadImage("../assets/old-spice-man.png"),
		loadImage("../assets/robot_female_1.png"),
		loadImage("../assets/piceratops-tree.png"),
		loadImage("../assets/orange-juice-squid.png")
	];

	misha = loadImage("../assets/misha.jpg")
}


function setup() {
	// put setup code here
	createCanvas(400, 400);

	for (var i = 0; i < 10; i++) {
		// Randomly pick one from the array of faces
		var randomInd = Math.floor(Math.random(faces.length));
		var face = faces[randomInd];
		// Push 2 copies onto array
		selected.push(face);
		selected.push(face);
		// Remove from faces array so we don't re-pick
		faces.splice(randomInd, 1);
	}

	selected.sort(function(a, b) {
		return 0.5 - Math.random();
	});

	var NUM_COLS = 5;
	var NUM_ROWS = 4;
	for (var i = 0; i < NUM_COLS; i++) {
		for (var j = 0; j < NUM_ROWS; j++) {
			var nextFace = selected.pop();
			var nextTile = new Tile(i * 78 + 10, j * 78 + 40, nextFace);
			tiles.push(nextTile);
		}
	}

	for (var i = 0; i < tiles.length; i++) {
		tiles[i].drawFaceDown();
	}


}

var Tile = function(x, y, image) {
	this.x = x;
	this.y = y;
	this.width = 70;
	this.face = image;
};


Tile.prototype.drawFaceDown = function() {
	fill(40, 4, 46);
	strokeWeight(2);
	rect(this.x, this.y, this.width, this.width, 10);
	image(misha, this.x, this.y, this.width, this.width);
	this.isFaceUp = false;
};

Tile.prototype.drawFaceUp = function() {
	fill(242, 242, 242);
	strokeWeight(2);
	rect(this.x, this.y, this.width, this.width, 10);
	image(this.face, this.x, this.y, this.width, this.width);
	this.isFaceUp = true;
};

Tile.prototype.isUnderMouse = function(x, y) {
	return x >= this.x && x <= this.x + this.width &&
		y >= this.y && y <= this.y + this.width;
};







var flippedTiles = [];
var delayStartFC = null;
var numTries = 0;


mouseClicked = function() {
	for (var i = 0; i < tiles.length; i++) {
		if (tiles[i].isUnderMouse(mouseX, mouseY)) {
			if (flippedTiles.length < 2 && !tiles[i].isFaceUp) {
				tiles[i].drawFaceUp();
				flippedTiles.push(tiles[i]);
				if (flippedTiles.length === 2) {
					numTries++;
					if (flippedTiles[0].face === flippedTiles[1].face) {
						flippedTiles[0].isMatch = true;
						flippedTiles[1].isMatch = true;
					}
					delayStartFC = frameCount;
					loop();
				}
			}
		}
	}
	var foundAllMatches = true;
	for (var i = 0; i < tiles.length; i++) {
		foundAllMatches = foundAllMatches && tiles[i].isMatch;
	}
	if (foundAllMatches) {
		fill(89, 83, 89);
		textSize(18);
		text("You've discovered all Misha's secrets ", 20, 360);
		text("in " + numTries + " tries!", 20, 380);
	}
};


draw = function() {
	if (delayStartFC && (frameCount - delayStartFC) > 30) {
		for (var i = 0; i < tiles.length; i++) {
			if (!tiles[i].isMatch) {
				tiles[i].drawFaceDown();
			}
		}
		flippedTiles = [];
		delayStartFC = null;
		noLoop();
	}
};
