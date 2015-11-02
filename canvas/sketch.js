function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	// place your drawing code here
	//this is a note
	
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

