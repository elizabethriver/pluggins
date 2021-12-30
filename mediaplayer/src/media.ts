class MediaPLayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    containerElement: HTMLDivElement;
    constructor(config: { element: any; plugins: any[]; }) {
        // console.log(config)
        this.media = config.element;
        this.plugins = config.plugins || [];
        this.initPlayer()
        this._initplugins();
    }
    initPlayer(){
        this.containerElement = document.createElement('div')
        this.containerElement.style.position = 'relative'
        this.media.parentNode.insertBefore(this.containerElement, this.media)
        this.containerElement.appendChild(this.media)
    }
    _initplugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };

        this.plugins.forEach((element) => {
            element.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggle() {
        if (this.media.paused) {
            this.media.play();
        } else {
            this.media.pause();
        }
    }
    unmuteMute() {
        if (this.media.muted) {
            this.media.muted = false;
        } else {
            this.media.muted = true;
        }
    }
}








export default MediaPLayer;