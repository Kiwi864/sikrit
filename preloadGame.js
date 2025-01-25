class preloadGame extends Phaser.Scene{
    constructor(){
      super("PreloadGame");
    }
    preload(){
      this.load.image("background", "assets/images/background.png");
      this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");
      this.load.bitmapFont("pixelFont2", "assets/font/font2.png", "assets/font/font2.xml");
      this.load.audio("prve", ["assets/sounds/1..ogg", "assets/sounds/1..mp3"]);
      this.load.audio("druhe", ["assets/sounds/2..ogg", "assets/sounds/2..mp3"]);
      this.load.spritesheet("skrecok", "assets/spritesheets/hamster.png",{
        frameWidth: 50,
        frameHeight: 50
      });
      this.load.spritesheet("button", "assets/spritesheets/buttonbg.png",{
        frameWidth: 100,
        frameHeight: 100
      });
      this.load.spritesheet("button1", "assets/spritesheets/buttonbg1.png",{
        frameWidth: 100,
        frameHeight: 100
      });
      this.load.spritesheet("slniecko", "assets/spritesheets/slniecko.png",{
        frameWidth: 49,
        frameHeight: 49
      });
      this.load.spritesheet("skrecky", "assets/spritesheets/skrecky.png",{
        frameWidth: 70,
        frameHeight: 49
      });
    }
    create(){
      this.scene.start("PlayGame");
      this.anims.create({
        key: "skrecokAnim",
        frames: this.anims.generateFrameNumbers("skrecok"),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: "skrecky_A",
        frames: this.anims.generateFrameNumbers("skrecky"),
        frameRate: 10,
        repeat: -1
      });
    this.anims.create({
      key: "slnieckoAnim",
      frames: this.anims.generateFrameNumbers("slniecko"),
      frameRate: 10,
      repeat: -1
    });

    }
}
