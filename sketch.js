var moving 
var fixed

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,200,50,50)
  moving.velocityX = 5;
  fixed.velocityX = -5;
}

function draw() {
  background("blue"); 
 // moving.x = mouseX ;
  //moving.y = mouseY ; 
  drawSprites();
if (moving.x - fixed.x < moving.width/2 + fixed.width/2
  && fixed.x-moving.x < moving.width/2 + fixed.width/2
  && moving.y - fixed.y < moving.height/2 + fixed.height/2
  && fixed.y-moving.y < moving.height/2 + fixed.height/2){
    moving.shapeColor = "yellow";
    fixed.shapeColor = "grey"
    moving.velocityX = -5;
    fixed.velocityX = 5;
  }
  else{
    moving.shapeColor = "green"
    fixed.shapeColor = "green"
  }
}