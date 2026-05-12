export class SoundManager {
  private static soundInstance: SoundManager;
  private scene: Phaser.Scene;
  private currentBgm: Phaser.Sound.BaseSound | null = null;
  private bgm: { [key: string]: Phaser.Sound.BaseSound } = {};
  private sfx: { [key: string]: Phaser.Sound.BaseSound } = {};

  constructor(scene: Phaser.Scene) {
    if (SoundManager.soundInstance) {
      return SoundManager.soundInstance;
    }
    SoundManager.soundInstance = this;

    this.scene = scene;
    this.currentBgm = null;

    // Add sounds 
    this.bgm = {
      'game_bgm': this.scene.sound.add('game_bgm', { loop: true }),
    };
    this.sfx = {
      'button_click': this.scene.sound.add('button_click'),
    };
  }

  public static getInstance(): SoundManager {
    if (!SoundManager.soundInstance) {
      throw new Error('SoundManager not initialized. Call new SoundManager(scene) first.');
    }
    return SoundManager.soundInstance;
  }

  public playBgm(name: string): void {
    if (this.currentBgm) {
      this.currentBgm.stop();
    }
    if (this.bgm[name]) {
      this.currentBgm = this.bgm[name];
      this.currentBgm.play();
    }
  }

  public playSfx(name: string): void {
    if (this.sfx[name]) {
      this.sfx[name].play();
    }
  }
}

