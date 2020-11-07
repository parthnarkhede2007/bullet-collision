function Touching(b1,b2){
  if(b1.x-b2.x < (b1.width + b2.width)/2){
    b2.collide(b1);
var damage = 0.5*weight*speed*speed/thickness ** 3;

if(damage > 10) {
  b1.shapeColor = "red";
}
if(damage < 9){
  b1.shapeColor = "darkblue";
}
  }
}