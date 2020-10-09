parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pukg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CST=void 0;var E={SCENES:{LOAD:"LOAD",MENU:"MENU",LEVEL1:"LEVEL1",LEVEL2:"LEVEL2"}};exports.CST=E;
},{}],"Ycqt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadScene=void 0;var e=require("../CST.js");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function n(e,t,o){return t&&s(e.prototype,t),o&&s(e,o),e}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=c();return function(){var o,s=f(e);if(t){var n=f(this).constructor;o=Reflect.construct(s,arguments,n)}else o=s.apply(this,arguments);return l(this,o)}}function l(e,o){return!o||"object"!==t(o)&&"function"!=typeof o?u(e):o}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(t){r(a,Phaser.Scene);var s=i(a);function a(){return o(this,a),s.call(this,{key:e.CST.SCENES.LOAD})}return n(a,[{key:"init",value:function(){}},{key:"preload",value:function(){var e=this;this.load.image("sky_level1","./assets/sky_level1.png"),this.load.image("sky_level2","./assets/sky_level2.png"),this.load.image("ground","./assets/ground.png"),this.load.image("platform","./assets/platform.png"),this.load.image("star","./assets/star.png"),this.load.image("bomb","./assets/bomb.png"),this.load.image("beer","./assets/beer.png"),this.load.image("sausage","./assets/sausage.png"),this.load.image("play_button","./assets/play_button.png"),this.load.image("play_icon","./assets/play_icon.png"),this.load.image("game_over","./assets/game_over.png"),this.load.image("tiles","./assets/tiles_spritesheet.png"),this.load.tilemapTiledJSON("Level1","./assets/level1.json"),this.load.tilemapTiledJSON("Level2","./assets/Level2.json"),this.load.spritesheet("dude","../assets/dude.png",{frameWidth:32,frameHeight:48}),this.load.audio("collect_beer","./assets/sounds/collect_beer.mp3"),this.load.audio("collect_sausage","./assets/sounds/collect_sausage.mp3"),this.load.audio("jump","./assets/sounds/jump.mp3"),this.load.audio("gameover","./assets/sounds/gameover.mp3");var t=this.add.graphics({fillStyle:{color:16777215}});this.load.on("progress",function(o){t.fillRect(0,e.game.renderer.height/2,e.game.renderer.width*o,50)})}},{key:"create",value:function(){this.scene.start(e.CST.SCENES.MENU)}}]),a}();exports.LoadScene=p;
},{"../CST.js":"pukg"}],"qGid":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MenuScene=void 0;var t=require("../CST.js");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=s();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?a(t):n}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(e){u(c,Phaser.Scene);var r=i(c);function c(){return n(this,c),r.call(this,{key:t.CST.SCENES.MENU})}return o(c,[{key:"preload",value:function(){}},{key:"create",value:function(){var e=this;this.add.image(2500,360,"sky_level1");var n=this.add.image(400,400,"play_button");n.setInteractive(),n.on("pointerup",function(){e.scene.start(t.CST.SCENES.LEVEL1)});var r=this.add.image(400,500,"play_button");r.setInteractive(),r.on("pointerup",function(){e.scene.start(t.CST.SCENES.LEVEL2)})}},{key:"update",value:function(){}}]),c}();exports.MenuScene=p;
},{"../CST.js":"pukg"}],"c9Lq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AbstractLevelScene=void 0;var e=require("../CST.js");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,s){return t&&r(e.prototype,t),s&&r(e,s),e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=h();return function(){var s,r=u(e);if(t){var i=u(this).constructor;s=Reflect.construct(r,arguments,i)}else s=r.apply(this,arguments);return c(this,s)}}function c(e,s){return!s||"object"!==t(s)&&"function"!=typeof s?n(e):s}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(t){a(o,Phaser.Scene);var r=l(o);function o(e,t){var i;return s(this,o),(i=r.call(this,{key:e})).backgroundimage=t,i.levelWidth=15e3,i.gameOver=!1,i.gameOverIcon,i.gameOverTimer=0,i.escKey,i.player,i.beers,i.sausages,i.bombs,i.platforms,i.cursors,i.map,i.lastInput=0,i.waitForInputRelease=!1,i.collectedSausages=0,i.collectedBeers=0,i.collectedBeersScoreText="",i.collectedSausagesScoreText="",i.doubleJumpAllowed=!1,i.speedX=250,i.speedY=330,i}return i(o,[{key:"preload",value:function(){}},{key:"create",value:function(){this.add.image(this.levelWidth/2,360,this.backgroundimage),this.cameras.main.setBounds(0,0,this.levelWidth,720),this.physics.world.setBounds(0,0,this.levelWidth,720),this.platforms=this.physics.add.staticGroup();for(var e=0;e<this.levelWidth/100;e++)this.platforms.create(50+100*e,704,"ground");this.player=this.physics.add.sprite(100,100,"dude"),this.player.setCollideWorldBounds(!0),this.cameras.main.startFollow(this.player,!1,1,0),this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("dude",{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:"dude",frame:4}],frameRate:20}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("dude",{start:5,end:8}),frameRate:10,repeat:-1}),this.collectedBeersScoreText=this.add.text(50,19,"0",{fontSize:"32px",fill:"#000"}),this.collectedSausagesScoreText=this.add.text(50,57,"0",{fontSize:"32px",fill:"#000"}),this.collectedBeersScoreText.setScrollFactor(0),this.collectedSausagesScoreText.setScrollFactor(0),this.add.image(32,32,"beer").setScrollFactor(0),this.add.image(32,70,"sausage").setScrollFactor(0),this.cursors=this.input.keyboard.createCursorKeys(),this.gameOverIcon=this.physics.add.sprite(300,300,"game_over"),this.gameOverIcon.setVisible(!1),this.gameOver=!1,this.escKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC),this.collectBeerSound=this.sound.add("collect_beer"),this.collectSausageSound=this.sound.add("collect_sausage"),this.jumpSound=this.sound.add("jump"),this.gameoverSound=this.sound.add("gameover")}},{key:"afterCreate",value:function(){var e=this.map.addTilesetImage("tiles_spritesheet","tiles");this.layer=this.map.createStaticLayer("Tile Layer 1",e),this.layer.setCollisionByExclusion(-1,!0),this.physics.add.collider(this.player,this.layer),this.collectibleLayer=this.map.createDynamicLayer("collectables",e),this.physics.add.overlap(this.player,this.collectibleLayer,this.collectItem,null,this),this.physics.add.collider(this.player,this.platforms)}},{key:"update",value:function(){if(this.escKey.isDown&&this.gameIsOver(),this.gameOver)return this.gameOverTimer++,void(this.gameOverTimer>150&&this.scene.start(e.CST.SCENES.MENU));this.gameOverTimer=0;var t=this.input.activePointer.isDown&&this.input.activePointer.position.x<100||this.cursors.left.isDown,s=this.input.activePointer.isDown&&this.input.activePointer.position.x>1180||this.cursors.right.isDown,r=0==this.player.body.velocity.y;t&&!this.waitForInputRelease?(this.player.setVelocityX(-this.speedX),this.player.anims.play("left",!0),1==this.lastInput&&(r||this.doubleJumpAllowed)&&(this.player.setVelocityY(-this.speedY),this.jumpSound.play(),r||(this.doubleJumpAllowed=!1)),this.lastInput=1,this.waitForInputRelease=!0):s&&!this.waitForInputRelease&&(this.player.setVelocityX(this.speedX),this.player.anims.play("right",!0),2==this.lastInput&&(r||this.doubleJumpAllowed)&&(this.player.setVelocityY(-this.speedY),this.jumpSound.play(),r||(this.doubleJumpAllowed=!1)),this.lastInput=2,this.waitForInputRelease=!0),r&&(this.doubleJumpAllowed=!0),t||s||(this.waitForInputRelease=!1),0==this.player.body.velocity.x&&this.player.anims.play("turn")}},{key:"collectItem",value:function(e,t){if(0!=t.alpha)switch(t.index){case 14:this.gameoverSound.play(),this.gameIsOver();break;case 26:t.alpha=0,this.collectedBeers++,this.collectedBeersScoreText.setText(this.collectedBeers),this.collectBeerSound.play();break;case 38:t.alpha=0,this.collectedSausages++,this.collectedSausagesScoreText.setText(this.collectedSausages),this.collectSausageSound.play();break;case 63:t.alpha=0,this.game.forever[0]="F";break;case 64:t.alpha=0,this.game.forever[1]="O";break;case 65:t.alpha=0,this.game.forever[2]="R";break;case 66:t.alpha=0,this.game.forever[3]="E";break;case 67:t.alpha=0,this.game.forever[4]="V";break;case 75:t.alpha=0,this.game.forever[5]="E";break;case 76:t.alpha=0,this.game.forever[6]="R"}}},{key:"gameIsOver",value:function(){this.gameOverIcon.setVisible(!0),this.physics.pause(),this.player.setTint(16711680),this.player.anims.play("turn"),this.gameOver=!0}}]),o}();exports.AbstractLevelScene=p;
},{"../CST.js":"pukg"}],"oNuL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Level1Scene=void 0;var t=require("../CST.js"),e=require("./AbstractLevelScene.js");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function u(t,e,r){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=i(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function i(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=y();return function(){var r,n=b(t);if(e){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(r){f(i,e.AbstractLevelScene);var o=a(i);function i(){return n(this,i),o.call(this,t.CST.SCENES.LEVEL1,"sky_level1")}return c(i,[{key:"create",value:function(){u(b(i.prototype),"create",this).call(this),this.map=this.make.tilemap({key:"Level1",tileWidth:72,tileHeight:72}),this.afterCreate()}}]),i}();exports.Level1Scene=h;
},{"../CST.js":"pukg","./AbstractLevelScene.js":"c9Lq"}],"FB8z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Level2Scene=void 0;var t=require("../CST.js"),e=require("./AbstractLevelScene.js");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function u(t,e,r){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=i(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function i(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=y();return function(){var r,n=b(t);if(e){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(r){f(i,e.AbstractLevelScene);var o=a(i);function i(){return n(this,i),o.call(this,t.CST.SCENES.LEVEL2,"sky_level2")}return c(i,[{key:"create",value:function(){u(b(i.prototype),"create",this).call(this),this.map=this.make.tilemap({key:"Level2",tileWidth:72,tileHeight:72}),this.afterCreate()}}]),i}();exports.Level2Scene=h;
},{"../CST.js":"pukg","./AbstractLevelScene.js":"c9Lq"}],"HJDO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.assetsDPR=void 0;var e=require("./scenes/LoadScene.js"),s=require("./scenes/MenuScene.js"),a=require("./scenes/Level1Scene.js"),n=require("./scenes/Level2Scene.js"),r=function(e){return Math.round(2*e)/2},t={best:1,medium:.75,low:.5},o=window.devicePixelRatio*t.best,c=window.screen,i=c.width,l=c.height,d=Math.round(Math.max(i,l)*o),h=Math.round(Math.min(i,l)*o),u=r(Math.min(Math.max(h/360,1),4));exports.assetsDPR=u,console.log("DPR = ",o),console.log("assetsDPR = ",u),console.log("WIDTH = ",d),console.log("HEIGHT = ",h);var v={type:Phaser.AUTO,scale:{parent:"phaser-game",mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:d,height:h},physics:{default:"arcade",arcade:{gravity:{y:250},debug:!1}},scene:[e.LoadScene,s.MenuScene,a.Level1Scene,n.Level2Scene]},M=new Phaser.Game(v);M.forever=[];
},{"./scenes/LoadScene.js":"Ycqt","./scenes/MenuScene.js":"qGid","./scenes/Level1Scene.js":"oNuL","./scenes/Level2Scene.js":"FB8z"}]},{},["HJDO"], null)