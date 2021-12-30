"use strict";
exports.__esModule = true;
var mediaplayer_1 = require("@elizabethriver/mediaplayer");
var mediaplayer_2 = require("@elizabethriver/mediaplayer");
var mediaplayer_3 = require("@elizabethriver/mediaplayer");
var mediaplayer_4 = require("@elizabethriver/mediaplayer");
var movie = document.querySelector('video');
var button = document.querySelector('button');
var muteUnmute = document.querySelector('#unmuteMute');
var player = new mediaplayer_1["default"]({ element: movie, plugins: [new mediaplayer_2["default"](), new mediaplayer_3["default"](), new mediaplayer_4["default"]()] });
button.onclick = function () { return player.toggle(); };
muteUnmute.onclick = function () { return player.unmuteMute(); };
// const heroMethods = {
//     saludar: function () {
//         console.log(`Hola ${this.name}`)
//     }
// }
// function Hero(name: string) {
//     // const hero = Object.create(Hero.prototype);
//     this.name = name;
//     // return hero
// }
// Hero.prototype.saludar = function () {
//     console.log(`Hola ${this.name}`)
// }
// const zelda = new Hero('Zelda')
// zelda.saludar()
// const link = new Hero('Link')
// link.saludar()
// const list = ["e", "r", "t"]
// console.log(list)
// function* simpleGenerator() {
//     console.log("ge start")
//     yield 1;
//     console.log("ge finish")
// }
// const gen = simpleGenerator()
// // console.log(gen)
// console.log(gen.next())
// console.log(gen.next())
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register(new URL('sw.js'), { type: 'module' }).then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
