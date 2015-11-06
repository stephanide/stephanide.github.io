//picture loading

var img;
function preload() {
  img = loadImage("lib/coffee.png");
}


 //var mySecond = "test";
 
 

function setup() {
  createCanvas(windowWidth*2, windowHeight*2);
  frameRate(100);
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
  

  
  
var IE = document.all?true:false
document.captureEvents(Event.MOUSEMOVE)
document.onmousemove = getMouseXY;

var tempX = 0
var tempY = 0

function getMouseXY(e) {
  console.log(e);
    tempX = e.clientX
    tempY = e.clientY
  document.Show.MouseX.value = tempX
  document.Show.MouseY.value = tempY
  return true
}



  

  
  if (mouseX > windowWidth/2) {
    
    //top right quadrant
    fill('Red');
    textFont("Georgia");
    background('LightBlue');
    textSize(100);
    textStyle(BOLD);
  }
  
  if (mouseY > windowHeight/2) {
    // bottom left quadrant
    fill('yellow');
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
    textSize(200);
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

  
  
  
  

 //curve
noFill();
 curve(width, 0, width/2, height/4, width/2, height/2, width, height);

 
 //Time
var myMinute = minute(); 
text("Current minute: \n:"+myMinute, 100, 150);

var millisecond = millis();
text("Milliseconds \nrunning: "+millisecond, 250, 150);

var whatever = new Date();
var mySeconds = whatever.getSeconds();
var myMinutes = whatever.getMinutes();
var myHours = whatever.getHours();


text("" +myHours +':' +myMinutes + ':' + mySeconds ,width/2,(height/4)*3);

 //Line Blue
 var strokeVal = (myMinute/59) * 255;
  stroke(0,0,strokeVal);

strokeWeight(100); 
line(200+(millisecond/10), 200, 500, 700);


 //Line Red
 var newDate = new Date();
  var strokeVal2 = (newDate.getSeconds()/59) * 255;

  stroke(strokeVal2,0, 0);

strokeWeight(100); 
line(400, 200, 600+(millisecond), 700);

fill(0);
strokeWeight(0);


console.log(windowWidth/4);

text("DO YOU", (width/4)+(strokeVal2), (height/4));
text("REALLY WANT", ((width/4)*3),(height/4)+(strokeVal2));
text("TO CONCENTRATE", (width/4)-(strokeVal2), (height/4)*3);
text("ON ONE ?", ((width/4*3)), ((height/4)*3)-(strokeVal2));



//Quad
noFill();
strokeWeight(10);
stroke('Tomato');
quad(1200-(millisecond/10), 500-(millisecond/100), 1900, 600, 2000, 1300, 1400, 1100);



//Picture

var magie = Math.random()*10;

  image(img, (width/4), (height/2)+200, 800+(magie),300+(magie));




//Weather

var randomNumbers = random (0, 100);

noStroke('red');
textSize(100);
fill('Mint');
text("The weather today:", (width/4)*3-400, height-600);

if (randomNumbers < 5){
  text("Good. =)", (width/4)*3-400, height-500);
} 

if (randomNumbers >5){
  text("Bad. =(", (width/4)*3-400, height-400);
}
  
var widthNow = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var heightNow = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;  
  
  
//Key  
    console.log(key);
    
    if (key == "W"){
      stroke(255);
        background("red");
        textAlign("center");
        text("WORKSHOP", widthNow/2, heightNow/2);
        
        
    }  
}

