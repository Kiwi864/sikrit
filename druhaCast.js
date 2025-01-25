class druhaCast extends Phaser.Scene{
    constructor(){
      super("druhaCast");
      this.uzkilk = false;
    }
    create(){
      this.background = this.add.tileSprite(0,0,game.config.width + 272,game.config.height + 272, "background");
      this.otazka = this.add.bitmapText(35,136, "pixelFont", "      YIPEEEEEEEEEE", 30);
      this.text = this.add.bitmapText(-10,260, "pixelFont", "      ", 16);
      this.skrecky = this.add.sprite(game.config.width / 2 - 8,game.config.height - 64, "skrecky");
      this.skrecky.setScale(2);
      this.skrecky.play("skrecky_A");
      this.slniecko = this.add.sprite(game.config.width -20,30, "slniecko");
      this.slniecko.play("slnieckoAnim");
      this.slniecko.setScale(1.5);
      this.text2 = this.add.bitmapText(140,10, "pixelFont", "Slniecko :)", 24);
      this.musik = this.sound.add("druhe", {volume: 0.15});
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
    }
}
