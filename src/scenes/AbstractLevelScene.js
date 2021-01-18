import { CST } from "../CST.js"

export class AbstractLevelScene extends Phaser.Scene {

    constructor(levelname, nextlevel, nextlevelNumber, bgimage, maxTime) {
        super({
            key: levelname
        });

        this.backgroundimage = bgimage;
        this.nextlevel = nextlevel;
        this.nextlevelNumber = nextlevelNumber;
        this.maxTime = maxTime;

        this.levelWidth = 15000;

        this.gameOverTimer = 0;

        this.levelHasEnded = false;
        this.levelEndedTimer = 0;
        this.finalImageShown = false;

        this.escKey;

        this.player;
        this.bombs;
        this.platforms;
        this.cursors;

        this.collectedBeersScoreText = "";
        this.collectedSausagesScoreText = "";
        this.collectedCoinsScoreText = "";
        this.collectedFlagsScoreText = "";
        this.collectedBallsScoreText = "";

        this.map;

        this.lastInput = 0;
        this.waitForInputRelease = false;

        this.doubleJumpAllowed = false;

        this.counterUntilClearTint = 0;

        this.isAvailable = false;

        this.jumpTimer = 0;

        this.playerBlockedToLeft = false;
        this.playerBlockedToRight = false;
        this.lastBlockedYPosition = 0;

        this.bouncingDisabled = false;
        this.bouncingDisabledCounter = 0;

        this.fastPlay = false;
        this.lastPlayedAnim = null;

        this.timer = null;
        this.timeElapsed = 0;
        this.timeLeft = this.maxTime;
        this.timeLeftText = this.maxTime.toString();
    }

    init(data) {
        if (this.game.gameOver) {
            this.game.gameOver = false;
            this.game.forever = [' ',' ',' ', ' ', ' ', ' ', ' ']; // filled with FOREVER
            this.game.numberOfLives = 3;
            this.game.collectedSausages = 0;
            this.game.collectedBeers = 0;
            this.game.collectedCoins = 0;
            this.game.collectedFlags = 0;
            this.game.collectedBalls = 0;
            this.game.collectedRemainingTime = 0;
        }
        
        this.game.speedX = this.game.SPEED_X;
        this.fastPlay = false;
        this.fanSoundPlayed = false;
        this.ybViertuStungStarted = false;
        this.drehkreuzSoundPlayed = false;
        this.levelHasEnded = false;
        this.finalImageShown = false;
        if (this.sound.get('final_win') != null) {
            this.sound.get('final_win').stop();
        }
        this.restoreBackgroundSoundLevel();

        if (this.timer != null) {
            this.timer.reset();
        }
        this.timeElapsed = 0;
    }

    preload() {

    }

    create() {
        this.add.image(this.levelWidth / 2, 360, this.backgroundimage);

        this.cameras.main.setBounds(0, 0, this.levelWidth, 720);
        this.physics.world.setBounds(0, 0, this.levelWidth, 720);

        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.physics.add.staticGroup();

        for (var i = 0; i < (this.levelWidth / 100); i++) {
            this.platforms.create(50 + (i * 100), 715, "ground");
        }

        // The player and its settings
        this.player = this.physics.add.sprite(100, 100, 'dude');

        this.player.body.offset.x = 5;
        this.player.body.offset.y = 5;
        this.player.body.width = 62;
        this.player.body.height = 62;

        this.player.setGravityY(this.game.gravity);

        this.player.setCollideWorldBounds(true);

        this.cameras.main.startFollow(this.player, false, 1, 0);

        this.createDudeAnimations('dude', 'left', 'turn', 'right');
        this.createDudeAnimations('dudeFast', 'leftFast', 'turnFast', 'rightFast');

        var fontStyle = { fontSize: '32px', fill: '#000', stroke: '#fff', strokeThickness: 1, fontWeight: 'bold' };
        
        this.collectedCoinsScoreText = this.add.text(75, 20, this.game.collectedCoins, fontStyle);
        this.collectedCoinsScoreText.setScrollFactor(0);
        this.collectedSausagesScoreText = this.add.text(75, 90, this.game.collectedSausages, fontStyle);
        this.collectedSausagesScoreText.setScrollFactor(0);
        this.collectedFlagsScoreText = this.add.text(75, 160, this.game.collectedFlags, fontStyle);
        this.collectedFlagsScoreText.setScrollFactor(0);
        //this.collectedBeersScoreText = this.add.text(75, 230, this.game.collectedBeers, fontStyle);
        //this.collectedBeersScoreText.setScrollFactor(0);
        //this.collectedBallsScoreText = this.add.text(75, 300, this.game.collectedBalls, fontStyle);
        //this.collectedBallsScoreText.setScrollFactor(0);
        
        this.add.image(35, 105, 'sausage').setScrollFactor(0);
        this.add.image(35, 35, 'coin').setScrollFactor(0);
        this.add.image(35, 175, 'flag').setScrollFactor(0);
        //this.add.image(35, 245, 'beer').setScrollFactor(0);
        //this.add.image(35, 315, 'ball').setScrollFactor(0);

        this.livesText = this.add.text(1210, 20, this.game.numberOfLives, fontStyle);
        this.livesText.setScrollFactor(0);
        this.add.image(1170, 35, 'heart').setScrollFactor(0);

        this.timeLeftText = this.add.text(1210, 90, this.maxTime, fontStyle);
        this.timeLeftText.setScrollFactor(0);
        this.add.image(1170, 105, 'time').setScrollFactor(0);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        this.collectBeerSound = this.sound.add('collect_beer');
        this.collectSausageSound = this.sound.add('collect_sausage');
        this.collectCoinSound = this.sound.add('collect_coin');
        this.collectFlagSound = this.sound.add('collect_flag');
        this.collectBallSound = this.sound.add('collect_ball');
        this.collectLetterSound = this.sound.add('collect_letter');
        this.collectCoronaSound = this.sound.add('collect_corona');
        this.jumpSound = this.sound.add('jump');
        this.gameoverSound = this.sound.add('gameover');
        this.levelEndSound = this.sound.add('levelend');
        this.sorrySound = this.sound.add('sorry');
        this.winSound = this.sound.add('win');
        this.finalwinSound = this.sound.add('final_win');
        this.fanSound = this.sound.add('fans');
        this.drehkreuzSound = this.sound.add('drehkreuz');

        this.timer = this.time.addEvent({
            delay: 1000, // ms
            callback: this.oneSecondPassed,
            callbackScope: this,
            loop: true
        });
    }

    afterCreate() {
        var tileset = this.map.addTilesetImage('tiles_spritesheet', 'tiles');
        this.layer = this.map.createStaticLayer('tile layer 1', tileset);
        
        this.layer.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.player, this.layer);

        this.collectibleLayer = this.map.createDynamicLayer('collectables', tileset);
        this.physics.add.overlap(this.player, this.collectibleLayer, this.collectItem, null, this);

        this.physics.add.collider(this.player, this.platforms);
    }

    update() {
        if (this.game.gameOver || this.levelHasEnded) {
            var collectedChars = 0;
            for (var index = 0; index < this.game.forever.length; index++) {
                if (this.game.forever[index].trim().length == 1) {
                    collectedChars++;
                }
            }
            var score = 0;
            score += (10 * this.game.collectedCoins);
            score += (10 * this.game.collectedSausages);
            score += (10 * this.game.collectedFlags);
            score += this.game.collectedRemainingTime;
            if (collectedChars == 7) {
                score += 200;
            }
        }
        if (this.escKey.isDown) {
            this.game.cheatMode = false;
            this.gameIsOver();
        }
        if (this.game.gameOver) {
            this.gameOverTimer++;
            if (this.gameOverTimer > 150) {
                this.scene.start(CST.SCENES.SCORE, {nextlevel: CST.SCENES.MENU, nextlevelNumber: 0, score: score});
            }
            return;
        } else {
            this.gameOverTimer = 0;
        }

        if (this.levelHasEnded) {
            this.levelEndedTimer++;
            if ((this.levelEndedTimer > 150) && this.finalImageShown) {
                this.scene.start(CST.SCENES.SCORE, {nextlevel: this.nextlevel, nextlevelNumber: this.nextlevelNumber, score: score});
            }
            if ((this.finalImage != null) && (this.finalImage.body.y > 0) && !this.finalImageShown) {
                this.finalImage.body.velocity.y = 0;
                this.finalImage.body.moves = false;
                this.finalImageShown = true;
                this.levelEndedTimer = -200;

                this.physics.add.sprite(this.player.body.position.x, 150, 'geyoungboyst');
            }
            return;
        } else {
            this.levelEndedTimer = 0;
        }

        if ((this.counterUntilClearTint > 0) && !this.gameOver && !this.levelHasEnded) {
            this.counterUntilClearTint--;
            if (this.counterUntilClearTint <= 0) {
                this.player.clearTint();
            }
        }

        if (this.scene.key == CST.SCENES.LEVEL3) {
            if (!this.fanSoundPlayed && (this.player.body.position.x > 7300)) {
                this.fanSoundPlayed = true;
                this.sound.get('background').volume = 0;
                this.fanSound.on('complete', this.restoreBackgroundSoundLevel, {sound: this.sound});
                this.fanSound.play();
            }

            if (!this.ybViertuStungStarted && (this.player.body.position.x > 8600)) {
                this.ybViertuStungStarted = true;
                this.game.speedX = this.game.SPEED_X * 1.5;
                this.player.setVelocityX(this.player.body.velocity.x * 1.5);
                this.fastPlay = true;
                this.updateAnim();
            }
        }

        if (this.scene.key == CST.SCENES.LEVEL1) {
            if (!this.drehkreuzSoundPlayed && (this.player.body.position.x > 8300)) {
                this.drehkreuzSoundPlayed = true;
                this.sound.get('background').volume = 0;
                this.drehkreuzSound.on('complete', this.restoreBackgroundSoundLevel, {sound: this.sound});
                this.drehkreuzSound.play();
            }
        }

        var leftClick = (this.input.activePointer.isDown && (this.input.activePointer.position.x < 500)) || this.cursors.left.isDown;
        var rightClick = (this.input.activePointer.isDown && (this.input.activePointer.position.x > 780)) || this.cursors.right.isDown;

        var playerOnGround = this.player.body.blocked.down;
        //var playerOnGround = (this.player.body.velocity.y == 0);
        
        if (this.player.body.blocked.left) {
            this.playerBlockedToLeft = true;
            this.lastBlockedYPosition = this.player.body.position.y;
        }
        if (this.player.body.blocked.right) {
            this.playerBlockedToRight = true;
            this.lastBlockedYPosition = this.player.body.position.y;
        }
        if ((this.player.body.velocity.x != 0) || (Math.abs(this.lastBlockedYPosition - this.player.body.position.y) > 50)) {
            this.playerBlockedToLeft = false;
            this.playerBlockedToRight = false;
        }
        
        if ((leftClick || rightClick) && this.waitForInputRelease && (this.jumpTimer > 0)) {
            if (this.jumpTimer < 40) {
                this.jumpTimer += 1;
                if (this.game.enableLongJump) {
                    this.player.setVelocityY(-this.game.speedY * this.game.LONG_JUMP_FACTOR);
                }
                if (this.jumpTimer == 40) {
                    //console.log('speed y:' + this.player.body.velocity.y);
                }
            }
        }
        
        var oldXSpeed = this.player.body.velocity.x;

        if (leftClick && (!this.waitForInputRelease)) {
            this.player.setVelocityX(-this.game.speedX);
            //this.player.anims.play('left', true);
            this.playAnim('left');
            if ((this.lastInput == 1) && ((oldXSpeed != 0) || (playerOnGround && this.playerBlockedToLeft))) {
                if (playerOnGround || this.doubleJumpAllowed) {
                    this.jumpTimer = 1;
                    if (this.game.enableLongJump) {
                        this.jumpTimer = 1;
                        this.player.setVelocityY(-this.game.speedY * this.game.LONG_JUMP_FACTOR);
                    } else {
                        this.player.setVelocityY(-this.game.speedY);
                    }
                    this.jumpSound.play();
                    if (!playerOnGround) {
                        this.doubleJumpAllowed = false;
                    }
                }
            }
            this.lastInput = 1;
            this.waitForInputRelease = true;

        } else if (rightClick && (!this.waitForInputRelease)) {
            this.player.setVelocityX(this.game.speedX);
            //this.player.anims.play('right', true);
            this.playAnim('right');
            if ((this.lastInput == 2) && ((oldXSpeed != 0) || (playerOnGround && this.playerBlockedToRight))) {
                if (playerOnGround || this.doubleJumpAllowed) {
                    if (this.game.enableLongJump) {
                        this.jumpTimer = 1;
                        this.player.setVelocityY(-this.game.speedY * this.game.LONG_JUMP_FACTOR);
                    } else {
                        this.player.setVelocityY(-this.game.speedY);
                    }
                    this.jumpSound.play();
                    if (!playerOnGround) {
                        this.doubleJumpAllowed = false;
                    }
                }
            }
            this.lastInput = 2;
            this.waitForInputRelease = true;
        } else {
            //this.player.setVelocityX(0);
            //this.player.anims.play('turn');
        }

        if (playerOnGround) {
            this.doubleJumpAllowed = true;
        }

        if (!(leftClick || rightClick)) {
            this.waitForInputRelease = false;
            this.jumpTimer = 0;
        }

        if (this.player.body.velocity.x == 0) {
            //this.player.anims.play('turn');
            this.playAnim('turn');
        }

        if (this.bouncingDisabledCounter > 0) {
            this.bouncingDisabledCounter--;
            if (this.bouncingDisabledCounter <= 0) {
                this.bouncingDisabled = false;
            }
        }

        //console.log('player x:' + this.player.body.position.x);
        //console.log('speed x:' + this.player.body.velocity.x);
        //console.log("jumptimer: " + this.jumpTimer);
    }

    collectItem(player, item) {
        if (item.alpha == 0) {
            return;
        }

        switch (item.index) {
            case 2: // Coin
                item.alpha = 0;
                this.game.collectedCoins++;
                this.collectedCoinsScoreText.setText(this.game.collectedCoins);
                this.collectCoinSound.play();
                break;
            case 14: // Corona
                this.game.numberOfLives--;
                this.livesText.setText(this.game.numberOfLives);
                if (this.game.numberOfLives <= 0) {
                    this.gameoverSound.play();
                    this.gameIsOver();
                } else {
                    item.alpha = 0;
                    this.player.setTint(0xff0000);
                    this.counterUntilClearTint = 50;
                    this.collectCoronaSound.play();
                }
                break;
            case 25: // Ball
                item.alpha = 0;
                this.game.collectedBalls++;
                //this.collectedBallsScoreText.setText(this.game.collectedBalls);
                //this.collectBallSound.play();
                break;
            case 26: // Beer
                item.alpha = 0;
                //this.game.collectedBeers++;
                //this.collectedBeersScoreText.setText(this.game.collectedBeers);
                this.collectBeerSound.play();
                break;
            case 37: // Flag
                item.alpha = 0;
                this.game.collectedFlags++;
                this.collectedFlagsScoreText.setText(this.game.collectedFlags);
                this.collectFlagSound.play();
                break;
            case 38: // Sausage
                item.alpha = 0;
                this.game.collectedSausages++;
                this.collectedSausagesScoreText.setText(this.game.collectedSausages);
                this.collectSausageSound.play();
                break;
            case 63: // F
                item.alpha = 0;
                this.game.forever[0] = 'F';
                this.collectLetterSound.play();
                break;
            case 64: // O
                item.alpha = 0;
                this.game.forever[1] = 'O';
                this.collectLetterSound.play();
                break;
            case 65: // R
                item.alpha = 0;
                this.game.forever[2] = 'R';
                this.collectLetterSound.play();
                break;
            case 66: // E
                item.alpha = 0;
                this.game.forever[3] = 'E';
                this.collectLetterSound.play();
                break;
            case 67: // V
                item.alpha = 0;
                this.game.forever[4] = 'V';
                this.collectLetterSound.play();
                break;
            case 75: // E
                item.alpha = 0;
                this.game.forever[5] = 'E';
                this.collectLetterSound.play();
                break;
            case 76: // R
                item.alpha = 0;
                this.game.forever[6] = 'R';
                this.collectLetterSound.play();
                break;
            case 70: // level end
                this.levelEnded();
                break;
            case 82: // level end
                this.levelEnded();
                break;
            case 143: // hooligan
                this.collidedWithHooligan();
                break;
            case 155: // hooligan
                this.collidedWithHooligan();
                break;
            case 49: // end game
                this.levelEnded();
                break;
        }
    }

    collidedWithHooligan() {
        if (!this.bouncingDisabled) {
            this.player.setVelocityX(-this.player.body.velocity.x);
            this.player.setVelocityY(-this.player.body.velocity.y);
            this.sorrySound.play();
            this.bouncingDisabled = true;
            this.bouncingDisabledCounter = 30;
        }
    }

    gameIsOver() {
        if (!this.game.cheatMode) {
            this.physics.pause();
            this.player.setTint(0xff0000);
            //this.player.anims.play('turn');
            this.playAnim('turn');

            this.game.gameOver = true;
        }
    }

    levelEnded() {
        if (!this.levelHasEnded) {
            this.player.body.moves = false;
            this.game.collectedRemainingTime += this.timeLeft;
            this.player.setTint(0x00ff00);
            //this.player.anims.play('turn');
            this.playAnim('turn');
            this.fanSound.stop();
            if (this.nextlevel == CST.SCENES.MENU) {
                this.sound.get('background').volume = 0;
                this.finalwinSound.on('complete', this.restoreBackgroundSoundLevel, {sound: this.sound});
                this.finalwinSound.play();
                
                this.finalImage = this.physics.add.sprite(this.player.body.position.x, -300, 'wolf');
                this.finalImage.body.velocity.y = 150;
            } else {
                this.levelEndSound.play();
                this.finalImageShown = true;
            }
        }
        this.levelHasEnded = true;
    }

    setAsAvailable() {
        this.isAvailable = true;
    }

    setAsUnavailable() {
        this.isAvailable = false;
    }

    restoreBackgroundSoundLevel() {
        if (this.sound.get('background') != null) {
            this.sound.get('background').volume = 1.0;
        }
    }

    createDudeAnimations(key, keyLeft, keyTurn, keyRight) {
        //  Our player animations, turning, walking left and walking right.
        this.anims.create({
            key: keyLeft,
            frames: this.anims.generateFrameNumbers(key, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: keyTurn,
            frames: [{ key: key, frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: keyRight,
            frames: this.anims.generateFrameNumbers(key, { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }

    playAnim(key) {
        var keyToUse = this.fastPlay ? key + 'Fast' : key;
        this.player.anims.play(keyToUse, true);
        this.lastPlayedAnim = key;
    }

    updateAnim() {
        this.playAnim(this.lastPlayedAnim);
    }

    oneSecondPassed() {
        if (!this.levelHasEnded) {
            this.timeElapsed += 1;
            this.timeLeft = Math.max(this.maxTime - this.timeElapsed, 0);
            this.timeLeftText.setText(this.timeLeft);
            if ((this.maxTime - this.timeElapsed) <= 0) {
                this.gameIsOver();
            }
        }
    }

}