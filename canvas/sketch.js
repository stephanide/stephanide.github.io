//picture loading

var img;
function preload() {
  img = loadImage("lib/Rad.jpg");
}




function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	// place your drawing code here
	//this is a note

  
  var x1 = 10;
  var y1 = 90;
  var x2 = mouseX;
  var y2 = mouseY;
  
  
  
  
  
  //top left quadrant
  background(200);
  fill(0);
  

  
  if (mouseX > windowWidth/2) {
    
    //top right quadrant
    fill('red');
    textFont("Georgia");
    background(255);
    textSize(100);
    textStyle(BOLD);
  }
  
  if (mouseY > windowHeight/2) {
    // bottom left quadrant
    fill('lime');
    textFont("Georgia");
    background(255, 0, 0);
    textSize(30);
    textStyle(NORMAL);
  }
  
  if ((mouseX > windowWidth/2) && (mouseY > windowHeight/2)) {
    //bottom right quadrant
    fill('blue');
    textFont("Futura");
    background(255, 255, 0);
    textSize(50);
    textStyle(ITALIC);
  }
  
  line(x1, y1, x2, y2);
  ellipse(x1, y1, 7, 7);
  ellipse(x2, y2, 7, 7);

  // d is the length of the line
  // the distance from point 1 to point 2.
  var d = int(dist(x1, y1, x2, y2));

  // Let's write d along the line we are drawing!
  push();
  translate( (x1+x2)/2, (y1+y2)/2 );
  rotate( atan2(y2-y1,x2-x1) );
  text(nfc(d,1,1), 0, -5);
  pop();
  // Fancy!

  //Picture
  //image(img, (windowWidth/2)-200, (windowHeight/2)-100, 400, 200);

 //curve
noFill();
 curve(windowWidth, 0, windowWidth/2, 200, windowWidth/2, 400, windowWidth, windowHeight);
 stroke(255, 102, 0);

 
 //line
strokeWeight(100); 
line(200, 200, 500, 700);

fill(0);
strokeWeight(0);
//textSize(20);
text("DO YOU", (windowWidth/4), (windowHeight/4));
text("REALLY WANT", ((windowHeight/4)*3),(windowHeight/4)+50);
text("TO CONCENTRATE", (windowWidth/4), (windowHeight/4)*3);
text("ON ONE ?", ((windowWidth/4*3)-50), ((windowHeight/4)*3)-50);
 
}

