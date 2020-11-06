class ROCK{
    constructor(x,y){
        var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
        this.body=Bodies.rectangle(x,y,50,50,options)
   this.width=50;
   this.height=50
   this.image=loadImage("hi/stone.png")
   World.add(world,this.body)
}
display(){
    push()
   image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
   
   
   
    pop()
}
}