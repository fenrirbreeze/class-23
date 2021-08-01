const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var engine,world,ground,ball

function setup() {
  createCanvas(800,400);
engine = Engine.create()
  world = engine.world
  var ground_options = {
    isStatic :true
  }
ground = Bodies.rectangle(400,395,800,10,ground_options);
World.add(world,ground)


var ball_options = {
  restitution:0.8
}

ball = Bodies.circle(200,150,20,ball_options)
World.add(world,ball)

}

function draw() {
  background("red"); 

  Engine.update (engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}