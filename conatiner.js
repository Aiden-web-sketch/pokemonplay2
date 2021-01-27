class Conatiner{
    constructor(){
            var options={
                isStatic:true
            }
        this.body=Bodies.rectangle(displayWidth-400,displayHeight/2,300,20,options)
        this.body=Bodies.rectangle(displayWidth-550,displayHeight/2-75,20,150,options)
        this.body=Bodies.rectangle(displayWidth-250,displayHeight/2-75,20,150,options)
        World.add(world,this.body)
        this.width=300
        this.height=20
    }
    display(){
    var pos=this.body.position
    push()

    noStroke()
    rectMode(CENTER);
    rect(displayWidth-400,displayHeight/2,300,20)
     rect(displayWidth-550,displayHeight/2-75,20,150)  
     rect(displayWidth-250,displayHeight/2-75,20,150)  
     pop()
    }
    }