
var game;
window.onload = function(){
  var config = {
    type: Phaser.CANVAS,
    width: 272,
    height: 272,
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
          gravity: {
            y: 0
          }
      }
    },
    scene: [preloadGame, playGame, druhaCast]
  }
  game = new Phaser.Game(config);
}
