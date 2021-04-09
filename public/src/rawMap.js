var rawMaps = {};

class rawMap {
  constructor(file, name) {
    this.file = file;
    this.name = name;
    this.loaded = false;
    this.raw = loadJSON("res/" + file +"/"+ name + ".json", () => {
      this.loaded = true;
    });

    rawMaps[name] = this;
  }
}

function drawMap(name) {
  var map = rawMaps[name];
  if (!map.loaded) return;
  for (var x = 0; x < width; x += 32) {
    for (var y = 0; y < height; y += 32) {
      var p = new position(null, x, y);
      imageSet.draw(map.raw["tileset"], p, map.raw["backgroundTile"].x, map.raw["backgroundTile"].y);
    }
  }
  drawMapLayer(map, "layer1");
  drawMapLayer(map, "layer2");
  drawMapLayer(map, "layer3");
}

function drawMapLayer(map, layer) {
    for (var i = 0; i < map.raw[layer].length; i++) {
        var mapRaw = map.raw[layer][i];
        var p = new position(null, mapRaw.x*32, mapRaw.y*32);
        imageSet.draw(map.raw["tileset"], p, mapRaw.tile.x, mapRaw.tile.y);
    }
}
