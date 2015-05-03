var gameOver = function(game){

};
 
gameOver.prototype = {
	init: function(score){
		this.score = score;
	},

  	create: function(){
  		game.world.height = 600;
  		var gameOverTitle = game.add.text(game.world.centerX, game.world.centerY, "Score: " + score, {
			font: "30pt Courier",
			fill: "#19cb65",
			stroke: "#119f4e",
			strokeThickness: 2,
			align: "center"
		});
		gameOverTitle.anchor.set(0.5);
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
};