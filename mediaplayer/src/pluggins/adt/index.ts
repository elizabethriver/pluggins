import MediaPlayer  from "../../media";
import Ads, {Ad} from "./Adt";

class AdsPlugins {
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private ads: Ads;
    private currentAd: Ad;
    private adscontainer: HTMLElement;
    constructor() {
        this.ads = Ads.getInstance()
        this.adscontainer = document.createElement('div')
        console.log(this.adscontainer, 'ee')
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    }
    run(player: MediaPlayer){
        this.player = player
        this.player.containerElement.appendChild(this.adscontainer)
        console.log(this.player.containerElement.appendChild(this.adscontainer))
        this.media = this.player.media
        this.media.addEventListener('timeupdate', this.handleTimeUpdate)
    }
    private handleTimeUpdate(){
        const currentTime = Math.floor(this.media.currentTime)
        if (currentTime % 30 === 0) {
            this.renderAd()
        } 
    }
   
    private renderAd(){
        if (this.currentAd) {
            return
        }
        const ad = this.ads.getAd()
        console.log(ad)
        this.currentAd = ad
        console.log(this.currentAd, 'ii')
        this.adscontainer.innerHTML = `
        <div class="ads">
        <a  class="ads__link" href="${this.currentAd.url}" target="_blank">
          <img class="ads__img" src="${this.currentAd.imageUrl}" />
          <div class="ads__info">
            <h5 class="ads__title">${this.currentAd.title}</h5>
            <p class="ads__body">${this.currentAd.body}</p>
          </div>
        </a>
      </div>`

      setTimeout(()=>{
          this.currentAd = null,
          this.adscontainer.innerHTML = ""
      }, 20000)
        console.log(this.currentAd , 'g')

    }

}
export default AdsPlugins