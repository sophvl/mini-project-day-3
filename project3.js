function setup() {
  createCanvas(600, 500);
  background(0);
}

function draw() {
  //bellow
  noStroke(0);
  let color = (163,166,211)
  fill(mouseX,mouseY,150)
  x = 30
  y = 30
  ellipse(mouseX, mouseY, x, y)
  
}
function mousePressed() {
  background(0);

}