var bullet, wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83);
  
  bullet=createSprite(100,150,50,15);
  bullet.shapeColor=color(255,0,255);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  
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

var bulletRightEdge=abullet.x+abullet.width;
var wallLeftEdge=awall.x;
if (bulletRightEdge>=wallLeftEdge) {
  return true;
}
return false;
}