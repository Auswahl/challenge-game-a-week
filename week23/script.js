var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example');
game.globals = {};

game.state.add("Cover", Cover);
game.state.add("Legend", Legend);
game.state.add("Herocomes", Herocomes);
game.state.add("Fas", Fas);
game.state.add("Choice", Choice);

game.state.add("TheGame", TheGame);
// game.state.add("GameOver", gameOver);
// game.state.add("Win", win);
// game.state.add("Loose", loose);

game.state.start("Cover");
