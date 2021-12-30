import MediaPLayer from "../media";

class Autoplay {
    player: MediaPLayer
    constructor() { }
    run(player: { muted: boolean; play: () => void; }) {
        if (!player.muted) {
            player.muted = true;
        }
        player.play();
    }
}
export default Autoplay;