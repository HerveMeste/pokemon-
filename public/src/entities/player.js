class player {
  constructor() {
    this.pos = new position(this, 100, 100, 0, -16);
    this.img = new animator(this, this.pos, "sacha", 4, 4, .2);
    this.controller = new userMovement(this, this.pos, this.img);

    this.properties = [
      this.pos,
      this.img,
      this.controller
    ];

    objects.push(this);
  }
}
