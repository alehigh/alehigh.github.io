//lluvia de nuggets
//Sprite creation
//Click to create a new sprite with random speed
var nug
function preload(){
  nug = loadImage('./assets/nugget.png');
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);

  fill(0);
  textAlign(CENTER);
  text("HOLA BB", width/2, height/2);
  //draw all the sprites added to the sketch so far
  //the positions will be updated automatically at every cycle
  drawSprites();
}

function mousePressed() {
  var s = createSprite(mouseX, mouseY, 30, 30);
  var sprite = sprite.addImage(nug);

  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
