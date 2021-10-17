var SPRITE;
function setup() {
  createCanvas(400,400);
  SPRITE=createSprite(200,200,20,20)

}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)){
  SPRITE.x+=3
}

if(keyIsDown(LEFT_ARROW)){
  SPRITE.x-=3
}


if(keyIsDown(UP_ARROW)){
  SPRITE.y-=3
}

if(keyIsDown(DOWN_ARROW)){
  SPRITE.y+=3
}



drawSprites()
}




