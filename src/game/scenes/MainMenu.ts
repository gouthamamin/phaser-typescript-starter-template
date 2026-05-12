import { Scene, GameObjects } from "phaser";
import { SceneTransition } from "../helpers/SceneTransition";
import { ImageKeys } from "../constants/Assets";

export class MainMenu extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  title: GameObjects.Text;

  constructor() {
    super("MainMenu");
  }

  create() {
    SceneTransition.fadeIn(this);

    const { width, height } = this.scale;

    this.background = this.add.image(width / 2, height / 2, ImageKeys.BACKGROUND);

    this.logo = this.add.image(width / 2, height / 3, ImageKeys.LOGO);

    this.title = this.add
      .text(width / 2, 460, "Main Menu", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      SceneTransition.fadeOutAndStart(this, "Game", 250);
    });
  }
}
