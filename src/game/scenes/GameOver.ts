import { Scene } from "phaser";
import { SceneTransition } from "../helpers/SceneTransition";

export class GameOver extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  gameover_text: Phaser.GameObjects.Text;

  constructor() {
    super("GameOver");
  }

  create() {
    SceneTransition.fadeIn(this);
    
    this.camera = this.cameras.main;
    const { width, height } = this.scale;

    this.background = this.add.image(width / 2, height / 2, "background");

    this.gameover_text = this.add.text(width / 2, height / 1.75, "Game Over", {
      fontFamily: "Arial Black",
      fontSize: 64,
      color: "#ffffff",
      stroke: "#000000",
      strokeThickness: 8,
      align: "center",
    });
    this.gameover_text.setOrigin(0.5);

    this.input.once("pointerdown", () => {
      SceneTransition.fadeOutAndStart(this, "MainMenu", 250);
    });
  }
}
