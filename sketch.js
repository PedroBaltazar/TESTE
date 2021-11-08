var bola;
function setup() {
  createCanvas(400,400);
bola=createSprite (10,40,25,25)
  
  
  }


function draw() 
{

  if (keyDown("up")) {
    bola.velocityY=-3
  }
  if (keyDown("right")) {
    bola.velocityX=3
  }
  if (keyDown("left")) {
    bola.velocityX=-3
  
  }
  if (keyDown("down")) {
    bola.velocityY=3
  }
  background(30);
  drawSprites ()
}




