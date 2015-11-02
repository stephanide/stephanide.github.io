function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	// place your drawing code here
	//this is a note
	
	background(200);
  fill(0);

  var x1 = width/2;
  var y1 = height/2;
  var x2 = mouseX;
  var y2 = mouseY;

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
  text("no escape", 0, 0);
  pop();
  // Fancy!
	
	stroke("blue")
	fill("#3d007e")
	strokeWeight(10);
	//noFill();
	noStroke();
	ellipse(50, 200, 70, 70);
	ellipse(width/2,height/2,100,100);
	stroke ("red");
	strokeWeight(5);
	quad(50,50,100,70,250,60,250,300);
	stroke("green");
	line(50,200,width/2,50);
	line(width/2,50,width/2,height/2);
	stroke("yellow");
	rect(10,10,70,70,20);
	stroke("black");
	triangle(130,50,100,120,100,150);
	line(10,20,60,60);
    stroke(255, 102, 0);
    curve(5, 26, 5, 26, 73, 24, 73, 61);
    stroke(0);
    curve(5, 26, 73, 24, 73, 61, 15, 65);
    stroke(255, 102, 0);
    curve(73, 24, 73, 61, 15, 65, 15, 65);

}

