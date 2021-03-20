var helicopter,HIMG,RIMG;
var r1,r2,r3;

function preload(){
HIMG=loadImage("helicopter.png");
RIMG=loadImage("rock.jpg");

}

function setup() {
  createCanvas(1350,500);
  helicopter=createSprite(400, 200, 50, 50);
  helicopter.addImage(HIMG);
  helicopter.scale=0.4;
 

  var rand=Math.round(random(1,1350))
  console.log(rand);

}

function draw() {
  background("red"); 
  spawnR(); 
  drawSprites();
}

function spawnR(){
  if(frameCount % 90===0){
    var rock=createSprite(1350,0,30,30);
    rock.velocityX=-6;
    rock.y=Math.round(random(0,500))
  }
}