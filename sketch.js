var movingrectangle, fixedrectangle

function setup() {
  createCanvas(800,400);
  movingrectangle=createSprite(300, 200, 50, 50);
  fixedrectangle=createSprite(50, 200, 90, 20);
  movingrectangle.shapeColor="aqua";
  fixedrectangle.shapeColor="aqua";
  movingrectangle.velocityX=-6;
  fixedrectangle.velocityX=6;
}

function draw() {
  background(0,0,255);  
 
  if(movingrectangle.y-fixedrectangle.y<=movingrectangle.height/2+ fixedrectangle.height/2
    && fixedrectangle.y-movingrectangle.y<=movingrectangle.height/2+ fixedrectangle.height/2)
  {
   movingrectangle.velocityY=movingrectangle.velocityY*(-1)
   fixedrectangle.velocityY=fixedrectangle.velocityY*(-1)
  }

  if(movingrectangle.x-fixedrectangle.x<=movingrectangle.width/2+ fixedrectangle.width/2
    && fixedrectangle.x-movingrectangle.x<=movingrectangle.width/2+ fixedrectangle.width/2)
  {
   movingrectangle.velocityX=movingrectangle.velocityX*(-1)
   fixedrectangle.velocityX=fixedrectangle.velocityX*(-1)
  }

  drawSprites();
}