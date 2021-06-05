var space;
var crew,iss;
var hasDocked=false;

function preload(){
 space=loadImage("spacebg.jpg");
 crewdragon=loadImage("spacecraft1.png");
 crewdragon2=loadImage("spacecraft2.png");
 crewdragon3=loadImage("spacecraft3.png");
 crewdragon4=loadImage("spacecraft4.png");
 station=loadImage("iss.png")
}

function setup() {
  createCanvas(800,windowHeight);

  crew=createSprite(331,600);
  crew.addImage(crewdragon);
  crew.scale=0.2;

  iss=createSprite(400,250);
  iss.addImage(station);
  //iss.scale=0.3; 

  iss.setCollider("rectangle",10,-100,480,400);
  iss.debug = false;

  yo=createSprite(311,348,10,20,20);

}

function draw() {
  background(space);  

  console.log(crew.x,crew.y);
 
if(!hasDocked){
  
  if (crew.x===331&&crew.y===348) {
    fill("white");
    textSize(20);
    text("CREW HAS DOCKED!",400,500)
    hasDocked=true;
  }

  if (keyDown("left")) {
    crew.addImage(crewdragon4)
    crew.x = crew.x-1;
   }
    
  if (keyDown("right")) {
    crew.addImage(crewdragon3)
    crew.x = crew.x+1;
   }
   
   if (keyDown("up")) {
  crew.addImage(crewdragon2)
   crew.y = crew.y-1;
   }
   
   
   if (keyDown("down")) {
    crew.addImage(crewdragon)
     crew.y=crew.y+1;  
     }
   
    }
   
  drawSprites();
}