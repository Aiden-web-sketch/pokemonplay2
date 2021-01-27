class Pokemon{
    constructor(x,y,radius){

        this.pokemon=Bodies.cicrle(x,y,radius)
        this.width=this.width
        this.height=this.height
        this.pokemon=loadImage("images/shadow_mewtwo_render_by_andydatraginpyro-dayvzuf")
    }
    display(){
    var pos=this.body.position(pos.x,pos.y)
    push()
    translate(pos.x,pos.y)
   imageMode(CENTER)
    image(this.image,0,0,this.radius,this.radius)
     pop()
    }
    }