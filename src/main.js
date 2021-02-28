/** @type {import("../typings/phaser")} */
import Phaser from 'phaser';

import {BootScene} from "./scenes/BootScene.js";
import {LoadScene} from "./scenes/LoadScene.js";
import {MenuScene} from "./scenes/MenuScene.js";
import {ScoreScreen} from "./scenes/ScoreScene.js";
import {Level1Scene} from "./scenes/Level1Scene.js";
import {Level2Scene} from "./scenes/Level2Scene.js";
import {Level3Scene} from "./scenes/Level3Scene.js";
import {HighscoreScene} from "./scenes/HighscoreScene.js";
import {ImpressumScene} from "./scenes/ImpressumScene.js";
import {AnleitungScene} from "./scenes/AnleitungScene.js";

let config = {
    type: Phaser.CANVAS,
    parent: 'parentDiv',
    scale: {
        parent: 'Hackathon - Work Food Balance',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    dom: {
        createContainer: true
    },
    scene: [
        BootScene, LoadScene, MenuScene, ScoreScreen, Level1Scene, Level2Scene, Level3Scene, HighscoreScene, ImpressumScene, AnleitungScene
    ]
};

let game = new Phaser.Game(config);
game.forever = [' ',' ',' ', ' ', ' ', ' ', ' ']; // filled with FOREVER
game.numberOfLives = 3;
game.collectedSausages = 0;
game.collectedBeers = 0;
game.collectedCoins = 0;
game.collectedFlags = 0;
game.collectedBalls = 0;
game.collectedRemainingTime = 0;

game.cheatMode = false;
game.fastMode = false;

game.SPEED_X = 350;

game.speedX = game.SPEED_X;
game.speedY = 430;

game.gravity = 450;

if (game.fastMode) {
    game.speedX = 600;
}

game.gameOver = false;

game.developmentMode = true;

game.enableLongJump = true;
game.LONG_JUMP_FACTOR = 0.7;

game.LOW_SOUND_LEVEL = 0.2;

game.soundMuted = false;
