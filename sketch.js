var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = -3;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ball1 = createSprite(200,400,80,30);
  ball1.shapeColor = "green";
  ball1.debug = true;
  ball1.velocityX = 3;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";  
  }
 
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
 
if(isTouching(ball1,movingRect)){
  movingRect.shapeColor = "red";
  ball1.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  ball1.shapeColor = "green";
}


bounceOff(ball1, fixedRect);
drawSprites();
}
// returns a boolean value 
