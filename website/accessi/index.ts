import MediaPLayer from "../../mediaplayer/src/media";
import Autoplay from "../../mediaplayer/src/pluggins/autoplay";
import Autopause from "../../mediaplayer/src/pluggins/autopause";
import Ads from "../../mediaplayer/src/pluggins/adt/index";

const movie = document.querySelector('video')
const button = document.querySelector('button')
const muteUnmute: HTMLElement = document.querySelector('#unmuteMute')

const player = new MediaPLayer({element: movie, plugins: [new Autoplay(), new Autopause(), new Ads()]});
button.onclick = () => player.toggle()
muteUnmute.onclick  =  ()  => player.unmuteMute();

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
    window.addEventListener('load', function() {
      navigator.serviceWorker.register(
      new URL('sw.js'),
      {type: 'module'}
      
      ).then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }


