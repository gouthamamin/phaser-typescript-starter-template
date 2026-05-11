import { Scene } from "phaser";
import { SceneTransition } from "../helpers/SceneTransition";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.Text;

  constructor() {
    super("Game");
  }

  create() {
    SceneTransition.fadeIn(this);

    this.camera = this.cameras.main;

    const { width, height } = this.scale;

    this.background = this.add.image(width / 2, height / 2, "background");
    this.background.setAlpha(0.5);

    this.msg_text = this.add.text(
      width / 2,
      height / 1.5,
      "Start creating.\nEvery great game begins here.",
      {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      },
    );
    this.msg_text.setOrigin(0.5);

    this.input.once("pointerdown", () => {
      SceneTransition.fadeOutAndStart(this, "GameOver", 250);
    });
  }
}
