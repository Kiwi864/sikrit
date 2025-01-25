class playGame extends Phaser.Scene{
    constructor(){
      super("PlayGame");
      this.uzkilk = false;
    }
    create(){
      this.musik = this.sound.add("prve", {volume: 0.10});
        var musicConfig = {
            mute: false,
            volume: 0.15,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.musik.play(musicConfig);
      this.background = this.add.tileSprite(0,0,game.config.width + 272,game.config.height + 272, "background");
      this.otazka = this.add.bitmapText(35,136, "pixelFont", "Budes moj valentin?", 30);
      this.skrecok = this.add.sprite(game.config.width / 2 - 8,game.config.height - 64, "skrecok");
      this.skrecok.setScale(2);
      this.skrecok.play("skrecokAnim");
      this.ano = this.physics.add.sprite(game.config.width / 2 - 60,game.config.height/2 -50, "button").setInteractive();
      this.ano.alpha = 0.75;
      this.nie = this.physics.add.sprite(game.config.width / 2 + 60,game.config.height/2 -50, "button1").setInteractive();
      this.nie.alpha = 0.75;
      this.nie.on('pointerdown', () => {
        let newX, newY;
        const anoBounds = this.ano.getBounds();
    
        do {
          newX = Phaser.Math.Between(5, game.config.width - 20);
          newY = Phaser.Math.Between(5, game.config.height - 20);
  
          const nieBounds = new Phaser.Geom.Rectangle(newX - this.nie.width / 2, newY - this.nie.height / 2, this.nie.width, this.nie.height);
  
        
          if (!Phaser.Geom.Intersects.RectangleToRectangle(nieBounds, anoBounds)) {
              break;
          }
        } while (true);
        this.nie.setPosition(newX, newY)
        this.ano.scale += 0.1
        console.log(this.ano.scale)
        
      });
      this.ano.on('pointerdown', () => {
        this.sound.stopAll()
        this.scene.start("druhaCast");
      });
    }
}
