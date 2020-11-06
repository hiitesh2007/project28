
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree,boy,ground,mango,mango1,mango2,mango3,mango4,mango5,mango6,mango7,rock,chain;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	tree=new TREE(300,100)
	boy=new BOY(50,490)
	ground=new GROUND (400,690,800,20)
	mango=new MANGO(450,200)
	mango1=new MANGO(550,150)
	mango2=new MANGO(650,200)
	mango3=new MANGO(450,350)
	mango4=new MANGO(650,350)
	mango5=new MANGO(550,280)
	mango6=new MANGO(450,280)
	mango7=new MANGO(650,280)
	rock=new ROCK(200,200)
	chain=new ROPE(rock.body,{x:92,y:565})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine); 
  tree.display();
  boy.display();
 ground.display();
 mango.display() ;
 mango1.display() ;
 mango2.display() ;
 mango3.display() ;
 mango4.display() ;
 mango5.display() ;
 mango6.display() ;
 mango7.display() ;
 rock.display();
 chain.display();
 drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly()
}

function detectollision(){

}

