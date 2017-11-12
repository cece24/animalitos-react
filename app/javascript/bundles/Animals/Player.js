class Player {
  constructor() {
    this.audio = new Audio();
  }

  play(songUrl) {
    this.audio.setAttribute('src', songUrl);
    this.audio.play();
  }
}

const player = new Player();
export default player;
