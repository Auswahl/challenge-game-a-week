var intro = function(game) {

};
intro.content = [
	"",
	"Well, hello there!",
	"Welcome to Roscosmos, newbie.",
	'You are going to lead the\n"Progress" cargo ship to the \nInternational Space Station.',
	" ",
	"Why you?",
	'Why not!\nas we say at Roscosmos',
	"Just hold spaceship, pull\nand keep throwing higher\nand higher",
	"Good luck!"


];


intro.prototype.init = function() {};
intro.prototype.preload = function() {

	this.index = 0;
	this.line = '';

	var bg = game.add.tileSprite(0, 0, 800, 600, 'introBg');

	this.text = game.add.text(32, 380, '', {
		font: "30pt Courier",
		fill: "#00ff00",
		stroke: "#119f4e",
		strokeThickness: 2
	});

	this.nextLine();

	this.game.load.image('alien', 'assets/ISS.png');
	this.game.load.image('cow', 'assets/regress.png');

	this.game.load.physics('physicsData', 'assets/polygon_data.json');
	this.game.load.tilemap('map', 'assets/space.json', null, Phaser.Tilemap.TILED_JSON);
	this.game.load.image('space_tilesets', 'assets/space_tilesets.png');

	this.game.load.audio('hit', 'assets/hit.mp3');
	this.game.load.audio('final', 'assets/final.wav');
	this.game.load.audio('soundtrack', 'assets/Sunrise.mp3');

	this.game.load.image('bg1', 'assets/back1.jpg');
	this.game.load.image('winBg', 'assets/finalwin.jpg');
	this.game.load.image('looseBg', 'assets/finalloose.jpg');


};
intro.prototype.create = function() {

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
		this.game.state.start("TheGame");
	}

};
