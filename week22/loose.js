var loose = function(game) {

};
loose.content = [
	"",
	'We said - "accurate"!\nYou\'ve just blown everything.',
	"Maybe it's for the best",
	"Still try it one more time"
];


loose.prototype.init = function() {};
loose.prototype.preload = function() {
	this.game.load.image('restart', 'assets/btnrestart.jpg');

	this.index = 0;
	this.line = '';

	var bg = game.add.tileSprite(0, 0, 800, 600, 'winBg');

	this.text = game.add.text(32, 330, '', {
		font: "30pt Arial",
		fill: "#dddddd",
		stroke: "#112f4e",
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
	var soundtrack = game.add.audio("creditsSound");
	soundtrack.play("", 0, 1, true);
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
