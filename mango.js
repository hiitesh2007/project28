class MANGO{
    constructor(x,y){
        var options={
        isStatic:true,
        restitution:0,
       friction:1
    
    }
        this.mango=Bodies.rectangle(x,y,100,100,options)
   this.width=50;
   this.height=60
   this.image=loadImage("hi/mango.png")
   World.add(world,this.mango)
}
display(){
    push()
   image(this.image,this.mango.position.x,this.mango.position.y,this.width,this.height)
   
   
   
    pop()
}
}