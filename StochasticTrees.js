var angle;
var startX;
var startY;
var radius;

function setup() {
  createCanvas(1000,700);
  angleChange = PI / 4;
  startX = 0;
  startY = 0;
  linelength = 100;
  background(235,181,33);
  stroke(0);
  strokeWeight(10);
  translate(500,700);
  line(startX, startY, 0, - 250); 
  makeTree(PI/4, linelength, 0, -250);
}


function draw() {

}

function makeTree(angle, llength, x, y){
  
    if(llength > 1){
       // Determine the weight of the stroke
       // Depends on the length of the segment being drawn
       var weight = map(llength, 0, linelength, 1, 10)
       strokeWeight(weight);
       
       // Random angle change for stochastic variability
       var randAngleChange = random(-PI/10, PI/10);
       
       // Calculate the left and right angles from the given point
       var rightAngle = -(angle + randAngleChange);
       var leftAngle = rightAngle - PI/2 ;
       
       // Vary the length of the segment by a random amount
       var randLengthStem = random(llength - 5, llength + 5);
       
       line(x, y, x + randLengthStem * cos(leftAngle), y + llength * sin(leftAngle));
       line(x, y, x + randLengthStem * cos(rightAngle), y + llength * sin(rightAngle));
       
       // Change the length of the next segment by a random amount
       var randLength1 = random();
       var randLength2 = random();
       
       // Recursive method calls
       makeTree(angle + angleChange, llength * 0.85 - randLength1 * 10, x + llength * cos(leftAngle), y + llength * sin(leftAngle));
       makeTree(angle - angleChange, llength * 0.85 - randLength2 * 10, x + llength * cos(rightAngle), y + llength * sin(rightAngle));
      
    }
  
}
