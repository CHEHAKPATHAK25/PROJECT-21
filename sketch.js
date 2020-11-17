var bullet, wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet=arcreateSprite(100,150,50,15);
  bullet.shapeColor=color(255,255,255);
  wall=createsprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=wall.X;
}

function draw() {
  background(255,255,255);  
  hasCollided();
  if (hasCollided(bullet,wall)) {
    bullet.velocityX=0;
    var damage=0.5 *weight *speed *speed/(thickness *thickness *thickness) ;
     
    if (damage>10) {
      wall.shapeColor=color(255,0,0);
    }
    if (damage<10) {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(abullet,awall){
bulletRightEdge=abullet.x+abullet.width;
wallLeftEdege=awall.x;
if (by=ulletRightEdge>wallLeftEdge) {
  return true;
}
return false;
}