// Global constants - Ignored by GUI
const WIDTH = window.outerWidth;
const HEIGHT = window.outerHeight;

// Interface variables
var myColor, myNumber, myChoice; // cannot be let or const or GUI wont show anything
var animated;

function setup() {
  createCanvas(888, 888);
  frameRate(animated ? 60 : 1);

  const GUI = createGui(':: INTERFACE ::');
  // Globals exposed to/by GUI
  myNumber = 100;
  myColor = color(255, 0, 0);
  myChoice = ['one', 'two', 'three'];
  animated = false;
  // Add em in...
  GUI.addGlobals('myColor', 'myNumber', 'myChoice', 'WIDTH', 'animated');
}

function draw() {
  background(255);
  ellipse(50, 50, 24, 24);
}