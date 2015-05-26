var gameOver = function(game){

};
 
gameOver.prototype.init = function(){
	};

gameOver.prototype.create = function(){
	game.world.height = 600;
	bg = game.add.tileSprite(0, 0, 800, 600, 'backgroundfinal');
	bg.fixedToCamera = true;
	var gameOverTitle = game.add.text(game.world.centerX, game.world.centerY + game.world.height/8, " Your Final Score: DEAD", {
		font: "34pt Arial",
		fill: "#ffffff",
		stroke: "#ffffff",
		strokeThickness: 3,
		align: "center"
	});
	gameOverTitle.anchor.set(0.5);

	game.add.image(game.world.centerX-game.world.width/3, game.world.centerY - game.world.height/3, 'logofinal');

	button = this.game.add.button(game.world.centerX, game.world.centerY + game.world.height/3, 'buttonRestart', playTheGame, this);
	button.anchor.setTo(0.5, 0.5);
   button.input.useHandCursor = true;

   finalmusic = game.add.audio('final');
   finalmusic.play();
};

function playTheGame(){
	this.game.state.start("TheGame");
}
