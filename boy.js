class BOY{
    constructor(x,y){
        var options={
        isStatic:true
        }
        this.body=Bodies.rectangle(x,y,100,100,options)
   this.width=200;
   this.height=250
   this.image=loadImage("hi/boy.png")
   World.add(world,this.body)
}
display(){
    push()
   image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
   
   
   
    pop()
}
}