import MediaPLayer from "../media";
class Autopause  {
    private threshold: number
    player: MediaPLayer

    constructor() {
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
        
    }
    
    run(player: MediaPLayer){
        this.player = player
        
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold:  this.threshold
        })
        observer.observe(this.player.media)
        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }
    private handleIntersection(entries: IntersectionObserverEntry[]){
        // console.log(entries)
        const entry = entries[0]
        // console.log(entry)
        const isVisible = entry.intersectionRatio >= this.threshold
        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
    private handleVisibilityChange(){
        if (document.visibilityState === 'visible') {
            this.player.play();
          } else {
            this.player.pause();
          }
    }
}

export default Autopause;