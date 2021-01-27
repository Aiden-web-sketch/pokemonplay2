const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world;

 function preload(){
   background1=loadImage("images/background.png")

 }

function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(displayWidth,displayHeight);

  pokemonball1=new Pokemonball(displayWidth/2,displayHeight/2,100)
  conatiner1=new Conatiner((displayWidth,displayHeight))


}

function draw() {
  background("green"); 
  Engine.update(engine);
  image(background1,0,0) 
  pokemonball1.display()
  conatiner1.display()


  background1=loadImage("images/background2.jpg")



  drawSprites();
}
function keyPressed(){
  if(keyCode===LEFT_ARROW){
    camera.postion.x-=50
  }
  if(keyCode===RIGHT_ARROW){
    camera.postion.x+=50
  }
  if(keyCode===UP_ARROW){
    camera.postion.y-=50
  }
  if(keyCode===DOWN_ARROW){
    camera.postion.y+=50
  }

}
function mouseDragged(){
  Matter.Body.applyForce(pokemonball1.body,{x:mouseX,y:mouseY},{x:random(5,10),y:random(5,50)})
  Matter.Body.setStatic(pokemonball1.body,false)
}

