function setup() {
    
    createCanvas (windowWidth, windowHeight);
    
}

var myPosition = 0;

function draw() {
    //place your drawing code here
    
    
    
    
    var mousePercent = mouseX/width*255;
    console.log(mousePercent);
    
    if (key == "9"){
        strokeWeight(9);
        
    } else if (key == "5"){
        strokeWeight(5);
    } else {
        strokeWeight(1);
    }
    
    line(pmouseX,pmouseY,mouseX,mouseY);
    myPosition ++;
    
    
    
    console.log(key);
    
}

function windowResize() {
    resizeCanvas(windowWidth, windowHeight);
}