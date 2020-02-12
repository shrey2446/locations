let canvas;
var ww = 1024;
var hh = 512;

let locationsData;

function preload() {
  locationsData = loadJSON("cities.json");
}


function setup() {
  // put setup code here
  canvas = createCanvas(ww, hh);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);

  for (var i = 1; i < locationsData.length; i++) {

    var lat = locations[i].longitude;
    var lon = locations[i].longitude;
    var place = locations[i].name;
  }
  stroke(255, 0, 255);
  fill(255, 0, 255, 200);
  ellipse(x, y, d, d);


}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}

function draw() {
  // put drawing code here
}
