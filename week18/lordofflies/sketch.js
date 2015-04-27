var score = 1000;
var viewPosition;
var drinks = 0;

function preload() {
	//background img
	rules = loadImage('../assets/scenerules.jpg');

	scene1Bg = loadImage('../assets/scene1.jpg');
	scene2Bg = loadImage('../assets/scene2.jpg');
	scene3Bg = loadImage('../assets/scene3.jpg');
	scene4Bg = loadImage('../assets/scene4.jpg');
	scene5Bg = loadImage('../assets/scene5.jpg');

	//bg3 = loadImage('../assets/scene3.jpg');
	bgfinalgood = loadImage('../assets/finalgood.jpg');
	bgfinalbad = loadImage('../assets/finalbad.jpg');

	//objects img

	mishaImg = loadImage('../assets/player.png');

	//sounds
	soundfinal = loadSound('../assets/sound/fanfare.mp3');
	soundloose = loadSound('../assets/sound/airhorn.mp3');
	swarmSound = loadSound('../assets/sound/swarm.wav');
	windSound = loadSound('../assets/sound/wind.mp3');

}



function draw() {
	this.currentScene.draw();
	this.currentScene.update();
}

function mouseClicked(event) {
	if (this.currentScene) {
		this.currentScene.clicked(mouseX, mouseY);
		event.preventDefault();
		return false;
	}
}

function keyPressed(event) {
	if (this.currentScene) {
		this.currentScene.pressed(keyCode);
		event.preventDefault();
		return false;
	}
}

function touchEnded(event) {
	if (this.currentScene) {
		this.currentScene.clicked(touchX, touchY);
		event.preventDefault();
		return false;
	}
}

function setup() {
	var screenSize;
	viewPosition = createVector(0, 0);

	if (window.innerWidth > window.innerHeight) {
		screenSize = Math.min(200, window.innerHeight / 3);
		createCanvas(screenSize * 4, screenSize * 3);
	} else {
		screenSize = Math.min(200, window.innerWidth / 4);
		createCanvas(screenSize * 4, screenSize * 3);
	}


	//noLoop();
	//scenes
	windSound.loop();

	this.ruleScene = createRuleScene(this);
	this.scene5 = createScene(this, scene5Bg, this.ruleScene);
	this.scene4 = createScene(this, scene4Bg, this.scene5);
	this.scene3 = createScene(this, scene3Bg, this.scene4);
	this.scene2 = createScene(this, scene2Bg, this.scene3);

	this.currentScene =  createScene(this, scene1Bg, this.scene2);

	this.gameScene = createGameScene(this);
	this.finalScene = createFinalScene(this);
	this.looseScene = createLooseScene(this);

}

function win() {
	this.currentScene = this.finalScene;
	this.soundtrack.stop();
	this.soundfinal.play();
}


function loose() {
	this.currentScene = this.looseScene;
	this.soundtrack.stop();
	this.soundloose.play();
}

function createGameScene(game) {
	var scene = new SceneSub();

	game.walls = new Walls();
	scene.widgets.push(walls);

	game.misha = new Player(game.walls);
	game.swarm = new Swarm(game.misha, game.walls);

	scene.widgets.push(misha);
	scene.widgets.push(swarm);

	scene.widgets.push(new ScoreScreen());

	return scene;
}

var restartFunction = function(game) {
	return function() {
		clear();
		game.currentScene = game.ruleScene;
		viewPosition = createVector(0, 0);
	};
};

function createFinalScene(game) {
	var scene = new Scene(bgfinalgood);
	var btnfinal = new Button("Restart", restartFunction(game));
	scene.widgets.push(btnfinal);

	return scene;
}

function createLooseScene(game) {
	var scene = new Scene(bgfinalbad);
	var btnfinal = new Button("Restart", restartFunction(game));

	scene.widgets.push(btnfinal);

	return scene;
}

function createRuleScene(game) {

	var scene = new Scene(rules);

	var btn2 = new Button("Go,go,go!", function() {
		clear();
		game.currentScene = game.gameScene;
		game.soundtrack = swarmSound;
		game.soundtrack.loop();
		score = 1000;

		game.gameScene.start();
	});
	scene.widgets.push(btn2);
	return scene;
}

function createScene(game, bg, next) {
	var scene = new Scene(bg);

	var btn1 = new Button("Next", function() {
		game.currentScene = next;
	});
	scene.widgets.push(btn1);
	return scene;
}