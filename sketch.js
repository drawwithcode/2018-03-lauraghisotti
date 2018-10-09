function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 200)
  //background(200);
  /*for(var x=0; x < width; x +=150){
    //ellipse(x, 0, 25)
    for(var y=25; y < height; y+=15) {
    var myHue=x/width*255*mouseX;
    var mySaturation= y/height*255;
    var noiseScale=0.02;
    //var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    noFill();
    strokeWeight(5);
      stroke(myHue, mySaturation, 255);
       //var diameter=x+y;
      bezier(x, y, x+50, y+50, x+100, y-50, x+150, y);
    }
  }*/
}

function draw() {
  // put drawing code here
  for(var x=0; x < width; x +=150){
    //ellipse(x, 0, 25)
    for(var y=25; y < height; y+=15) {
    var myHue=x/width*9*mouseX*noiseScale;
    var mySaturation= random(y/height*255);
    var noiseScale=0.0001;
    //var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    noFill();
    strokeWeight(5);
    if (x==0){
      stroke(0, mySaturation, 255);
    } else {
      stroke(myHue*(mouseY), mySaturation, 255);}
       //var diameter=x+y;
      bezier(x, y, x+50, y+50, x+100, y-50, x+150, y);
    }
  }
}
