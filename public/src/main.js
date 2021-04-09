// client.init("localhost:5500");

function setup() {
  Screen.init();
  new rawImage("sacha");

  new imageSet("Tilesets", "Outside", 8, 502);
  new rawMap("Maps", "map2");

  const player1 = new player();
  const player2 = new playerTwo();
  const collision = new collisionDetector(player1, player2);
  console.log(collision.detect());
}
function step() {
  for (var x = 0; x < width; x += 32) {
    for (var y = 0; y < height; y += 32) {
      var p = new position(null, x, y);
      imageSet.draw("Outside.png", p, 2, 0);
    }
  }
}
