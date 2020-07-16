var bullet,wall;
var bullet1,wall1;
var bullet3,wall2;

var speed,weight;
var deformation;

var thickness;
var damage;

function setup() {
 
  createCanvas(1600,400);
  bullet=createSprite(50, 100, 30, 10);
  bullet1=createSprite(50,200,30,10);
  bullet3=createSprite(50,300,30,10);

  bullet.shapeColor="white";
  bullet1.shapeColor="white";
  bullet3.shapeColor="white";


  speed=random(223,321);
  weight=random(30,52);

  wall=createSprite(1200,100,thickness,60);
  wall.shapeColor=(80,80,80);
  wall1=createSprite(1200,200,thickness,60);
  wall1.shapeColor=(80,80,80);
  wall2=createSprite(1200,300,thickness,60);
  wall2.shapeColor=(80,80,80);

  bullet.velocityX=speed;
  bullet1.velocityX=speed;
  bullet3.velocityX=speed;

  bullet.weight=weight;
  bullet1.weight=weight;
  bullet3.weight=weight;

  deformation=0.5*weight*speed*speed/2250;

  thickness=random(22,83);

  damage=0.5*weight*speed*speed/thickness*thickness*thickness;

}

function draw() {
  background(0,0,0);  
  
if(collided(bullet,wall)){
 bullet.velocityX=0;

 if(deformation<100 ){
  bullet.shapeColor=color(0, 255, 0);
 }

 if(deformation>100 && deformation<180 ){
  bullet.shapeColor=color(230, 230, 0);
 }

 if(deformation>180){
  bullet.shapeColor=color(255, 0, 0);
 }

 if(damage>10000){
  wall.shapeColor="red";
 }
 else{
   wall.shapeColor="green";
 }
}
if(collided(bullet1,wall1)){
  bullet1.velocityX=0;

  if(deformation<100 ){
    bullet1.shapeColor=color(0, 255, 0);
  }

  if(deformation>100 && deformation<180 ){
    bullet1.shapeColor=color(230, 230, 0);
  }

  if(deformation>180){
    bullet1.shapeColor=color(255, 0, 0);
  }

  if(damage>10000){
    wall1.shapeColor="red";
  }
  else{
    wall1.shapeColor="green";
  }

}
if(collided(bullet3,wall2)){
  bullet3.velocityX=0;

  if(deformation<100 ){
    bullet3.shapeColor=color(0, 255, 0);
    }

    if(deformation>100 && deformation<180 ){
      bullet3.shapeColor=color(230, 230, 0);
    }

    if(deformation>180){
      bullet3.shapeColor=color(255, 0, 0);
    }


  
  if(damage>10000){
     wall2.shapeColor="red";
  }
  else{
    wall2.shapeColor="green";
  }

}
 






 
 
  drawSprites();
}

function collided(bullet,wall){
  if(wall.x-bullet.x<bullet.width/2+wall.width/2) {
   
    return true;
  }
  else{
    return false;
  }
}