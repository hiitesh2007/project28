class TREE{
    constructor(x,y){
        var options={
        isStatic:true
        }
        this.tree=Bodies.rectangle(x,y,100,100,options)
   this.width=500;
   this.height=600
   this.image=loadImage("hi/tree.png")
   World.add(world,this.tree)
}
display(){
    push()
   image(this.image,this.tree.position.x,this.tree.position.y,this.width,this.height)
   
   
   
    pop()
}
}