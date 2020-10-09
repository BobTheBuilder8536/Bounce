var fixedRect, movingRect;

function setup() {
  createCanvas(windowWidth,windowHeight);
  fixedRect = createSprite(width/2, height/2-200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(width/2, height/2+200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0);  

  bounce(movingRect,fixedRect);

  drawSprites();
}