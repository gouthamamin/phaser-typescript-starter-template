import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    const { width, height } = this.scale;
    //  We loaded this image in our Boot Scene, so we can display it here
    this.add.image(width / 2, height / 2, "background");

  }

  preload() {
    //  Load the assets for the game - Replace with your own assets
    this.load.setPath("assets");
    this.load.image("logo", "logo.png");
  }

  create() {
    this.scene.start("MainMenu");
  }
}
