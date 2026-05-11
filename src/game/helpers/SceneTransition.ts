import { Scene } from 'phaser';

export class SceneTransition {
    /**
     * Fades out the current scene and starts the next scene.
     * @param scene The current active scene
     * @param nextScene The key of the scene to start
     * @param duration Duration of the fade out in milliseconds (default 500)
     */
    public static fadeOutAndStart(scene: Scene, nextScene: string, duration: number = 500): void {
        scene.cameras.main.fadeOut(duration, 0, 0, 0);

        scene.cameras.main.once('camerafadeoutcomplete', () => {
            scene.scene.start(nextScene);
        });
    }

    /**
     * Fades in the current scene.
     * Use this in the create() method of the new scene.
     * @param scene The scene to fade in
     * @param duration Duration of the fade in in milliseconds (default 500)
     */
    public static fadeIn(scene: Scene, duration: number = 500): void {
        scene.cameras.main.fadeIn(duration, 0, 0, 0);
    }
}
