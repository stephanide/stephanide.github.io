function setup() {
    
    createCanvas (windowWidth, windowHeight);
    
}

var myPosition = 0;

function draw() {
    //place your drawing code here
    
    
    var mousePercent = mouseX/width*255;
    console.log(mousePercent);
    
    background(0,0, mousePercent);
    
    
    line(pmouseX,pmouseY,mouseX,mouseY);
    myPosition ++;
    
    
    noFill();
    stroke(255);
    textSize(mouseX/10);
    text(key, windowWidth/2, windowHeight/2);
    console.log(key);
    
    if (key == "W"){
        background("red");
        textAlign("center");
        text("WORKSHOP", windowWidth/2,windowHeight/2);
        
        
    } 
    
    var ellipseWidth = Math.random() * 100;
    var ellipseHeight = Math.random()* 100; 
    var ellipseX = Math.random()*width;
    var ellipseY = Math.random()*height;

    stroke("yellow");
    strokeWeight(10);
    noFill();
    ellipse(ellipseX,ellipseY,ellipseWidth,ellipseWidth);
    
}

function windowResize() {
    resizeCanvas(windowWidth, windowHeight);
}