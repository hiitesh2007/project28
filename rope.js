class ROPE{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            stiffness:0.04,
            length:10
        }
  
        this.chain=Constraint.create(options);
   
        World.add(world,this.chain)
    }
       
      
 
fly(){
    this.chain.bodyA = null;

}

    display(){
    
       
         push()
         var body1=this.chain.bodyA.position;
         var point2=this.chain.pointB;
        
         line(body1.x,body1.y,point2.x,point2.y)
         pop()
        
}
}


