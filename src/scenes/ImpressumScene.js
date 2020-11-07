import { CST } from "../CST.js"

export class ImpressumScene extends Phaser.Scene {

    constructor() {
        super({
            key: CST.SCENES.IMPRESSUM
        });
    }

    create() {
        this.add.image(640, 360, 'impressum');

        let backButton = this.add.image(950, 570, 'play_button');
        backButton.setInteractive();

        backButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.MENU);
        });
    }

}