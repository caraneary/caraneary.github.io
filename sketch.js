var eyeLevel;

function setup() {
  createCanvas(600,600);
  eyeLevel = 275;
}

function draw() {
  background(186, 217, 196);
  noStroke();
  
  //HAIR//
  fill(92, 81, 67);
  square(197,270,206);
  ellipse(300,300,210,250);
  
  //HEAD//
  fill(247, 222, 183);
  ellipse(300,300,170,195);
  
  //EYES//
    //white hole//
  fill(255, 255, 255);
  ellipse(265,eyeLevel,35,27);
  ellipse(330,eyeLevel,35,27);
    //green part//
  fill(73, 184, 136);
  circle(265,eyeLevel,18);
  circle(330,eyeLevel,18);
    //pupil//
  fill(0);
  circle(265,eyeLevel,6);
  circle(330,eyeLevel,6);
  
  //MOUTH//
  fill(240, 157, 141);
  arc(width / 2, height / 1.8, 90, 75, 0, HALF_PI + HALF_PI, PIE);
    //teeth//
  fill(255);
  arc(width / 2, height / 1.77, 76, 53, 0, HALF_PI + HALF_PI, PIE);
  
  //EARS//
  fill(247, 222, 183);
  ellipse(215,300,30,40);
  ellipse(385,300,30,40);
    //earrings//
  fill(255);
  ellipse(209,310,12,12);
  ellipse(390,310,12,12);
    
  //NOSE//
  fill(240, 210, 163);
  ellipse(298,304,20,20);
  ellipse(298,292,10,10);
  
  
}