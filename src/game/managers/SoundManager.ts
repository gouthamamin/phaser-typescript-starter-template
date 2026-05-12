import { AudioKeys } from "../constants/Assets";

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
      [AudioKeys.GAME_BGM]: this.scene.sound.add(AudioKeys.GAME_BGM, {
        loop: true,
      }),
    };
    this.sfx = {
      [AudioKeys.BUTTON_CLICK]: this.scene.sound.add(AudioKeys.BUTTON_CLICK),
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

