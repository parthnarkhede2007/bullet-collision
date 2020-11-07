var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50,10);
  bullet.shapeColor = "green";
  wall = createSprite(1100, 200, thickness, height/2);
  wall.shapeColor = "white";

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background("cyan"); 
  bullet.velocityX = speed;
Touching();

  
  drawSprites();
}
function Touching(){
  if(wall.x-bullet.x < (wall.width + bullet.width)/2){
    bullet.collide(wall);
var damage = 0.5*weight*speed*speed/thickness ** 3;

if(damage > 10) {
  wall.shapeColor = "red";
}
if(damage < 9){
  wall.shapeColor = "darkblue";
}
  }
}

//darkblue is for damage less than 9;
//red is for damage greater than 10;