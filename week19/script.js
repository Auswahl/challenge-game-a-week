var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example');

game.state.add("TheGame", theGame);
game.state.add("GameOver", gameOver);
game.state.start("TheGame");