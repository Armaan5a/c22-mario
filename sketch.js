
var countDistanceX=0,gap, mario;
var platformGroup;
function preload(){

}

function setup() {
  createCanvas(windowWidth,650);
  
  platformGroup=createGroup()
  
  mario = new Player(); 
  
  for (var i =0 ;i<30; i=i+1){
    platform1=new Platform(countDistanceX);
    platformGroup.add(platform1.spt);
    gap=random([0,30,100,0,80,0,90,0])
    countDistanceX=countDistanceX+platform1.rw+gap
  }
  
  
  
}

function draw() {
  background('skyblue'); 
  mario.applyGravity();
  mario.spt.collide(platformGroup);
  
  translate(-mario.spt.x+width/2,0)
  
  if(keyDown("left")){
    mario.moveLeft()
  }
  
  if(keyDown("right")){
    mario.moveRight()
  }
  
   if(keyDown("up")||keyDown("space")){
    mario.jump()
  }
  
  
  
  
  
 drawSprites();
}

