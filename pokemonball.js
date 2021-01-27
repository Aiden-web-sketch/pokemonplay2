class Pokemonball{
constructor(x,y,radius){
    var options={
        isStatic: true,
        restitution:0.8
    }
    this.body=Bodies.circle(x,y,radius,options)
    World.add(world,this.body)
    
    this.pokemonball=loadImage("images/ball.png")   

    this.radius=radius
}
display(){
var pos=this.body.position
push()
translate(pos.x,pos.y)
 imageMode(CENTER)
 image(this.pokemonball,0,0,this.radius,this.radius)
 pop()
}
}