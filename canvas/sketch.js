//picture loading

var coffee;
var co1;
var co2;
var co3;
var dj1;
var dj2;
var dj3;
var lg1;
var lg2;
var ny1;
var ny2;
var of1;
var of2;
var of3;
var um1;
var um2;
var um3;
var workshop1;
var workshop2;
var workshop3;

function preload() {
  coffee = loadImage("lib/coffee.png");
  co1 = loadImage("lib/co295_297.png");
  co2 = loadImage("lib/co400_400.png");
  co3 = loadImage("lib/co998_300.png");
  dj1 = loadImage("lib/dj400_320.jpg");
  dj2 = loadImage("lib/dj600_600.jpg");
  dj3 = loadImage("lib/dj726_323.png");
  lg1 = loadImage("lib/lg400_400.gif");
  lg2 = loadImage("lib/lg720_631.jpg");
  ny1 = loadImage("lib/ny600_480.jpg");
  ny2 = loadImage("lib/ny1400_477.jpg");
  of1 = loadImage("lib/of375_562.jpg");
  of2 = loadImage("lib/of500_333.jpg");
  of3 = loadImage("lib/of573_599.png");
  um1 = loadImage("lib/um450_338.jpg");
  um2 = loadImage("lib/um600_405.jpg");
  um3 = loadImage("lib/um960_720.jpg");
  workshop1 = loadImage("lib/workshop1.jpg");
  workshop2 = loadImage("lib/workshop2.jpg");
  workshop3 = loadImage("lib/workshop3.jpg");

  
}




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

  
  
  



 


var whatever = new Date();
var mySeconds = whatever.getSeconds();
var myMinutes = whatever.getMinutes();
var myHours = whatever.getHours();




fill(0);
strokeWeight(0);


console.log(windowWidth/4);

text("PLAY", (width/4)+(strokeVal2), (height/4));
text("WASTE TIME", ((width/4)*3),(height/4)+(strokeVal2));
text("SEARCH", (width/4)-(strokeVal2), (height/4)*3);
text("FREE YOUR CURSOR", ((width/4*3)), ((height/4)*3)-(strokeVal2));



//Quad
noFill();
strokeWeight(10);
stroke('Tomato');
quad(1200-(millisecond/10), 500-(millisecond/100), 1900, 600, 2000, 1300, 1400, 1100);



//Picture

var magie = Math.random()*10;

image(coffee, (width/4), (height/2)+200, 800+(magie),300+(magie));




//Weather



noStroke('red');
textSize(100);
fill('Mint');



  
var widthNow = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var heightNow = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;  
  
  
//Key  
fill("LightBlue");
text("Press a Key", 200, 1300);


    console.log(key);
    
    if (key == "W"){
        background("AntiqueWhite");
        textAlign("center");
        text("WORKSHOP", windowWidth/2, (windowHeight)*1.5);
        image(workshop1, 1000, 200, 500, 345);
        image(workshop2, 1500, 600, 620, 422);
        image(workshop3, 500, 400, 570, 369);
        
    }  
    if (key == "L"){
        fill("red")
        background("AntiqueWhite");
        textAlign("center");
        image(lg1, 1300, 300, 400, 400);
        image(lg2, 700, 400, 720, 631);
        text("LOOKING GOOD TODAY", windowWidth/2, (windowHeight)*1.5);
    } 
    
    
    if (key == "S"){
        fill("DarkCyan")
        background("Aquamarine");
        textAlign("center");
        text("SEE YOU LATER", windowWidth/2, (windowHeight)*1.5);
        textSize(200);
        //Time
        var myMinute = minute(); 
        text("Current minute: \n:"+myMinute, 500, 150);

        var millisecond = millis();
        text("Milliseconds \nrunning: "+millisecond, 550, 550);
        text("" +myHours +':' +myMinutes + ':' + mySeconds ,width/2,(height/4)+300);
    }  
    
    
    
    if (key == "R"){
        fill("SandyBrown")
        background("DarkCyan");
        textAlign("center");
        image(dj1, 70, -30, 400, 320);
        image(dj2, 800, 200, 600, 600);
        image(dj3, 1400, 900, 726, 323);
        text("RESPECT THE DJ", windowWidth/2, (windowHeight)*1.5);
    }  
    if (key == "M"){
        fill("SandyBrown")
        background("RosyBrown");
        textAlign("center");
        text("MAKE UP", windowWidth/2, (windowHeight)*1.5);
    }  
    if (key == "F"){
        fill("RosyBrown")
        background("SpringGreen");
        textAlign("center");
        text("FORMS", windowWidth/2, (windowHeight)*1.5);
        
        ///FORMS START
        //More Lines  
  strokeWeight(50);
  fill("SlateGray");
  line(100,(strokeVal2),100,(strokeVal2));
    
  //curve
  noFill();
  strokeWeight(50);
  stroke("BLUE");
  curve(width, 0, width/2, height/4, width/2, height/2, width, height);

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

  //curve
  noFill();
  strokeWeight(50);
  stroke("Teal");
  curve(width/4+400, 700, width/4+500, height/2+600, width/4+300, height/4+600, width+400, height+700);

  stroke("Orange");
  bezier(500, 700, 400, 750, 550, 900, 200, 950);
        
        ///FORMS END
    }  
    
    
     if (key == "O"){
        fill("SpringGreen")
        background("Red");
        textAlign("center");
        image(of1,100,100,375,562);
        image(of2, 1600,1000,500,333);
        image(of3, 50,700,573,599);
        text("OFFENBACH", windowWidth/2, (windowHeight)*1.5);
    }  
    if (key == "N"){
        fill("Red")
        background("SlateBlue ");
        textAlign("center");
        image(ny1, 100,700,573,599);
        image(ny2, 500,70,1400,477);
        text("EVER WENT TO NYC?", windowWidth/2, (windowHeight)*1.5);
    } 
    if (key == "C"){
        fill("SlateBlue")
        background("SlateGray ");
        textAlign("center");
        image(co1, 1200,-20,295,297);
        image(co2, 500,800,400,400);
        image(co3, 900,0,998,300);
        text("DO A COLLABORATION", windowWidth/2, (windowHeight)*1.5);
    }
    if (key == "U"){
        background("Chartreuse");
        image(um1, 300,300,450,338);
        image(um2, 1300,300,600,405);
        image(um3, 1300,900,960,720);
        
//Weather
var randomNumbers = random (0, 100);
text("The weather today:", (width/4)*3-400, height-600);
if (randomNumbers < 5){
  text("Good. =)", (width/4)*3-400, height-500);
} 

if (randomNumbers >5){
  text("Bad. =(", (width/4)*3-400, height-400);
}

var ellipseWidth = Math.random() * 100;
    var ellipseHeight = Math.random()* 100; 
    var ellipseX = Math.random()*width;
    var ellipseY = Math.random()*height;

    fill("Navy");
    stroke("Navy");
    strokeWeight(10);
    ellipse(ellipseX,ellipseY,ellipseWidth,ellipseWidth);

   
    noStroke();
    fill("DarkSeaGreen");
    textAlign("center");
    text("MIGHT NEED AN UMBRELLA", windowWidth/2, (windowHeight)*1.5);

    }
    
    
 
  
// Get a random element from an array
var words = [ "apple", "bear", "cat", "dog" ];
var index = floor(random(words.length));  // Convert to integer
text(words[index],10,50);  // Displays one of the four words

  

}

