var hr, min, sec;

function setup(){

  createCanvas(800, 400);

  angleMode(DEGREES);

}

function draw(){
  background("black");

   hr = hour(); 
   min = minute();
   sec = second();
   translate(400, 200);
   rotate(-90);

  sAngle = map(sec, 0, 60, 0, 360);
  mAngle = map(min, 0, 60, 0, 360);
  hAngle = map(hr%12, 0, 12, 0, 360);

  push();
  rotate(sAngle);
  stroke("red");
  strokeWeight(4.5);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 75, 0)
  pop();

  push();
  rotate(hAngle);
  stroke("green");
  strokeWeight(9);
  line(0, 0, 50, 0);
  pop();

  strokeWeight(9);
  noFill();
  stroke("red");
  arc(0, 0, 300, 300, 0, sAngle);

  stroke("blue");
  arc(0, 0, 270, 270, 0, mAngle);

  stroke("green");
  arc(0, 0, 240, 240, 0, hAngle);  

  drawSprites();
}
