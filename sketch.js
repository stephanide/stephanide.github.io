function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
}

function preload() {
  of1 = loadImage("lib/of375_562.jpg");
    
}

function draw() {
	// place your drawing code here
	
	var rn = random (10,50);
	
	fill("MediumSeaGreen");
	quad(400+rn,100+rn,1000+rn,100+rn,1000+rn,600+rn,400+rn,600+rn);
	
	image(of1,((windowWidth/2)-400-rn),20-rn,375,562);
	
	noFill();
	strokeWeight(50);
    stroke("red");
    bezier((windowWidth/2)+400+rn, (windowHeight/2)+rn, 100, 250, 300, 300, 100+rn, 500+rn);
    
    
    noFill();
	strokeWeight(100);
    stroke("blue");
    curve(1300,800,500,500,800-rn,100-rn,800,400);
    
    noStroke();
    fill("black");
    textFont("Times");
    textStyle("bold");
    textSize(500-rn);
    text("P",(windowWidth/2)-100,(windowHeight/2)+50);
    
    noStroke();
    fill("Gray");
    textFont("Futura");
    textStyle("italic");
    textSize(500);
    text("P",(windowWidth/2)-110+rn,(windowHeight/2)+60+rn);

    


}

