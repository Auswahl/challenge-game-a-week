var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example');

// game.state.add("Cover", cover);
// game.state.add("Intro", intro);
game.state.add("Game", TheGame);
// game.state.add("GameOver", gameOver);
// game.state.add("Win", win);
// game.state.add("Loose", loose);

game.state.start("Game");