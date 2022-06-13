// Global constants - Ignored by GUI
const WIDTH = window.outerWidth;
const HEIGHT = window.outerHeight;

var myColor, myNumber, myChoice; // cannot be let or const or GUI wont show anything

function setup() {
  createCanvas(888, 888);
  frameRate(24);

  const GUI = createGui(':: INTERFACE ::');
  // Globals exposed to/by GUI
  myNumber = 100;
  myColor = color(255, 0, 0);
  myChoice = ['one', 'two', 'three'];
  // Add em in...
  GUI.addGlobals('myColor', 'myNumber', 'myChoice', 'WIDTH');
}

function draw() {
  background(255);
  ellipse(50, 50, 24, 24);
}