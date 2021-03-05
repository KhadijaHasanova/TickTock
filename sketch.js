var s;
var m;
var h;

function setup() {
  //create the canvas
  createCanvas(800,800);

  //set the angle mode to degrees
  angleMode(DEGREES);
}

function draw() {
  //set the background color
  background(0,0,0);

  //store the time in the variables
  h = hour();
  m = minute();
  s = second();

  translate(200,200);
  rotate(-90);
  
  //convert the time to degrees
  sAngle = map(s,0,60,0,360);
  mAngle = map(m,0,60,0,360);
  hAngle = map(h%12,0,12,0,360);

  //create the second hand
  push();
  stroke("blue");
  strokeWeight(7);
  rotate(sAngle);
  line(0,0,100,0);
  pop();  
  
  //create the minute hand
  push();
  stroke("red");
  strokeWeight(7);
  rotate(mAngle);
  line(0,0,75,0);
  pop();  
  
  //create the hour hand
  push();
  stroke("green");
  strokeWeight(7);
  rotate(hAngle);
  line(0,0,50,50);
  pop();

  //set the strokeWeight and fill
  noFill();
  strokeWeight(10);

  //draw the arc for the second
  stroke("blue");
  arc(0,0,300,300,0,sAngle);

  //draw the arc for the minute
  stroke("red");
  arc(0,0,280,280,0,mAngle);

  //draw the arc for the hour
  stroke("green");
  arc(0,0,260,260,0,hAngle);

  //draw the sprites
  drawSprites();
}