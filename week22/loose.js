var loose = function(game) {

};
loose.content = [
	"",
	"Вы немного перестарались",
];


loose.prototype.init = function() {};
loose.prototype.preload = function() {
	this.game.load.image('restart', 'assets/btnrestartrus.jpg');

	this.index = 0;
	this.line = '';

	var bg = game.add.tileSprite(0, 0, 800, 600, 'looseBg');

	this.text = game.add.text(32, 380, '', {
		font: "30pt Courier",
		fill: "#00ff00",
		stroke: "#119f4e",
		strokeThickness: 2
	});

	this.nextLine();
};

function restart() {
	window.location.reload();
}
loose.prototype.create = function() {
	button = this.game.add.button(game.world.centerX, game.world.centerY + game.world.height / 3, 'restart', restart, this);
	button.anchor.setTo(0.5, 0.5);
	button.input.useHandCursor = true;
};

loose.prototype.updateLine = function() {

	if (this.line.length < loose.content[this.index].length) {
		this.line = loose.content[this.index].substr(0, this.line.length + 1);
		this.text.setText(this.line);
	} else {
		//  Wait 2 seconds then start a new line
		game.time.events.add(Phaser.Timer.SECOND * 1, this.nextLine, this);
	}

};

loose.prototype.nextLine = function() {

	this.index++;

	if (this.index < loose.content.length) {
		this.line = '';
		game.time.events.repeat(40, loose.content[this.index].length + 1, this.updateLine, this);
	}
};
