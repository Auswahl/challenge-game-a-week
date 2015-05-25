var win = function(game) {

};
win.content = [
	"",
	"ТАДА!"

];


win.prototype.init = function() {};
win.prototype.preload = function() {

	this.index = 0;
	this.line = '';

	var bg = game.add.tileSprite(0, 0, 800, 600, 'winBg');

	this.text = game.add.text(32, 380, '', {
		font: "30pt Courier",
		fill: "#00ff00",
		stroke: "#119f4e",
		strokeThickness: 2
	});

	this.nextLine();
};
win.prototype.create = function() {

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
