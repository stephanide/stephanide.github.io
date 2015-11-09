function setup() {
    
    createCanvas (windowWidth, windowHeight);
    
}

var myPosition = 0;

function draw() {
    //place your drawing code here
    
    
    var mousePercent = mouseX/width*255;
    console.log(mousePercent);
    
    var newDate = new Date();
  var strokeVal2 = (newDate.getSeconds()/59) * 255;
  
    background(255,mousePercent, 0);
    
    
  
    
    

    
    
    

}

function windowResize() {
    resizeCanvas(windowWidth, windowHeight);
}