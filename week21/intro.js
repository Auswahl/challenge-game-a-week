var intro = function(game) {

};
intro.content = [
	"",
];


intro.prototype.init = function() {};
intro.prototype.preload = function() {

	this.index = 0;
	this.line = '';

	// var bg = game.add.tileSprite(0, 0, 800, 600, 'introBg');

	this.text = game.add.text(32, 380, '', {
		font: "30pt Courier",
		fill: "#00ff00",
		stroke: "#119f4e",
		strokeThickness: 2
	});

	this.nextLine();

	this.game.load.atlasJSONHash('ship', 'assets/sprites/spritesheet.png', 'assets/sprites/sprites.json');
	this.game.load.image('background', 'assets/pony/backhill.png');
	this.game.load.image('pony1', 'assets/pony/pony1.png');
	this.game.load.image('pony2', 'assets/pony/pony2.png');
	this.game.load.image('pony3', 'assets/pony/pony3.png');
	this.game.load.image('pony4', 'assets/pony/pony4.png');
	this.game.load.image('pony5', 'assets/pony/pony5.png');
	this.game.load.image('pony6', 'assets/pony/pony6.png');


};
intro.prototype.create = function() {
	this.game.state.start("TheGame");
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
	} 
};
