class Ball {
  constructor(track, radius, speed, frequency, hue) {
    this.track = track;
    this.radius = radius;
    this.speed = speed;
    this.offset = 0;
    this.round = 0;
    this.progress = 0;
    this.frequency = frequency;
    this.center = this.track.getPosition(this.offset);
    this.hue = hue;
  }

  move() {
    this.offset += this.speed;
    const res = this.track.getPosition(this.offset);
    this.progress = res.progress;
    this.center = { x: res.x, y: res.y };
    if (res.round != this.round) {
      playSound(this.frequency);
      this.round = res.round;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    const lightness = 100 - 50 * this.progress;
    ctx.fillStyle = `hsl(${this.hue}, 100%, ${lightness}%)`;
    ctx.stroke();
    ctx.fill();
  }
}
