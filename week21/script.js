var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example');

game.state.add("Cover", cover);
game.state.add("TheGame", theGame);

game.state.start("Cover");

