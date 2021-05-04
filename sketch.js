const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,380,400,20,ground_options);
    World.add(world,ground);

   var ball_options = {
       restitution: 0.8
   }

ball = Bodies.circle(100,0,50,ball_options);
    console.log(ground);
   World.add(world,ball);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    rectMode(CENTER);
    fill("cyan");
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    fill("yellow");
    ellipse(ball.position.x,ball.position.y,50,50);
}
