var win = function(game) {

};
win.content = [
	"",
	"Quick and accurate:\nGreat job!\nNo more lousy rockets",
	"Try to bit your result"
];


win.prototype.init = function() {};
win.prototype.preload = function() {

	this.index = 0;
	this.line = '';

	var bg = game.add.tileSprite(0, 0, 800, 600, 'winBg');

	this.text = game.add.text(32, 380, '', {
		font: "30pt Arial",
		fill: "#dddddd",
		stroke: "#112f4e",
		strokeThickness: 2
	});

	this.nextLine();
};
win.prototype.create = function() {
	var soundtrack = game.add.audio("creditsSound");
	soundtrack.play("", 0, 1, true);
};

win.prototype.updateLine = function() {

	if (this.line.length < win.content[this.index].length) {
		this.line = win.content[this.index].substr(0, this.line.length + 1);
		this.text.setText(this.line);
	} else {
		//  Wait 2 seconds then start a new line
		game.time.events.add(Phaser.Timer.SECOND * 2, this.nextLine, this);
	}

};

win.prototype.nextLine = function() {

	this.index++;

	if (this.index < win.content.length) {
		this.line = '';
		game.time.events.repeat(40, win.content[this.index].length + 1, this.updateLine, this);
	}
};
