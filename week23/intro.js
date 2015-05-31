var intro = function(game) {

};
intro.content = [
	"",
	"Nice to see you again!",
	"Let's talk about optimization\nLaunching spaceships is\ntoo damn expensive",
	"So now we just crash them",
	"Every weapon has its own advantages!\nDo it quick and accurate",
];

var loaded = false, introFinished = false;
intro.prototype.init = function() {};
intro.prototype.preload = function() {

	this.index = 0;
	this.line = '';

	var bg = game.add.tileSprite(0, 0, 800, 600, 'introBg');

	this.text = game.add.text(32, 380, '', {
		font: "30pt Arial",
		fill: "#dddddd",
		stroke: "#112f4e",
		strokeThickness: 2
	});

	this.nextLine();

	this.game.load.image('winBg', 'assets/bg/finalbg1.jpg');
	this.game.load.image('looseBg', 'assets/finalloose.jpg');

	this.game.load.image('ellipseSprite', 'assets/ellipse.png');

	this.game.load.atlasJSONHash('ship', 'assets/sprites/spritesheet.png', 'assets/sprites/sprites.json');
	this.game.load.atlasJSONHash('axe', 'assets/sprites/axe.png', 'assets/sprites/axe.json');
	this.game.load.atlasJSONHash('morgen', 'assets/sprites/morgen.png', 'assets/sprites/morgen.json');
	this.game.load.atlasJSONHash('whip', 'assets/sprites/whip.png', 'assets/sprites/whip.json');
	this.game.load.atlasJSONHash('dynamite', 'assets/sprites/dynamite.png', 'assets/sprites/dynamite.json');
	this.game.load.atlasJSONHash('explosion', 'assets/sprites/explosion.png', 'assets/sprites/explosion.json');

	this.game.load.image('background', 'assets/backgrey.jpg');

	this.game.load.audio('axeSound', 'assets/sounds/axe.mp3');
	this.game.load.audio('blowSound', 'assets/sounds/blow.mp3');
	this.game.load.audio('creditsSound', 'assets/sounds/credits.mp3');
	this.game.load.audio('fireSound', 'assets/sounds/fire.mp3');
	this.game.load.audio('missSound', 'assets/sounds/miss.mp3');
	this.game.load.audio('morgenSound', 'assets/sounds/morgen.mp3');
	this.game.load.audio('whipBigSound', 'assets/sounds/whip-big.mp3');
	this.game.load.audio('whipSound', 'assets/sounds/whip.mp3');
	this.game.load.audio('soundtrack', 'assets/sounds/main.mp3');


};
intro.prototype.create = function() {
	loaded = true;
	if (introFinished) this.game.state.start("TheGame");

};

intro.prototype.updateLine = function() {

	if (this.line.length < intro.content[this.index].length) {
		this.line = intro.content[this.index].substr(0, this.line.length + 1);
		this.text.setText(this.line);
	} else {
		//  Wait 2 seconds then start a new line
		game.time.events.add(Phaser.Timer.SECOND * 1, this.nextLine, this);
	}

};

intro.prototype.nextLine = function() {

	this.index++;

	if (this.index < intro.content.length) {
		this.line = '';
		game.time.events.repeat(40, intro.content[this.index].length + 1, this.updateLine, this);
	} else {
		introFinished = true;
		if (loaded)	this.game.state.start("TheGame");
	}
};
