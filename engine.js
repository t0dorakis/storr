var color1,color2,color3,color4,color5,color6,color7,color8,color9 // all the colors of the picture

var colors = []; // Array for the colors

// noise for the sky (work in progress)
var c;
var noiseVal;
var noiseScale=0.03;


// Randomvalues for the fractal engine
var random1; //AUFLOESUNG
var random2; //HOEHE
var random3; //ECKIGKEIT

// Randomvalue for the amount of houses
var multiplikator


function setup () {

  createCanvas(400,400);

  //random // Randomvalues for the fractal engine
  random1 = random(4,11);
  random2 = round(random(5,6*round(random(1,2))*round(random(1,2))*round(random(1,2))));
  random3 = round(random(1,6*round(random(1,2))*round(random(1,2))*round(random(1,2))));

  // COLORS
  //bright
  color0 = color(239, 199, 186);
  color1 = color(192, 146, 126)
  color2 = color(208, 146, 150);
  color3 = color(175, 118, 108)
  color4 = color(236, 172, 124)

  //middle
  color5 = color(213, 59, 52)
  color6 = color(157, 91, 92)
  color7 = color(147, 42, 38).levels;

  //dark
  color8 = color(32, 19, 17);

  colors = [color0, color1, color2, color3, color4, color5, color6, color7, color8];
  rectMode(CENTER)

}

function draw () {
  background(255);
  console.log(random2);
  for (var i = 0; i<5; i++){
    colors.push(color7);
  }
  screeno();
  fill(color0);
  noStroke();
  
  // SUN
  ellipse(width/2 * random(0.5,1.8), height/3 + random(100), width/3 * random(1))

  //HOUSES produces houses built by fractals
  fill(colors[round(random(7,8))]);
  multiplikator = round(random(1,10));
  for(var i = multiplikator; i > 0; i--){
    var randomHeight = random(100,300);
    if(i==1){
    house(200,height,randomHeight,200,5);
    }
    if(i==3){
    house(100,height,randomHeight,100,5);
    house(300,height,randomHeight,100,5);
    }
    if(i==8){
      house(50,height,randomHeight,100,5);
      house(350,height,randomHeight,100,5);
    }
  }

  noLoop();
}

function screeno () {

  for (var i = 0; i < width; i=i+2){
    for (var j = 0; j < height; j=j+2){
      noiseVal = noise((width+i) * noiseScale,
                        (width+j) * noiseScale);

      color7[3] = 0;
      var newColor = color(color7[0], color7[1], color7[2], color7[3]);
      // console.log(newColor);
      stroke(newColor);
      point(i,j);
    }
  }
}

// FRACTAL ENGINE recursive engine and key instrument
function house (x,y,big,high,bright) {
  noStroke();
  // fill(colors[round(random(2,colors.length-1))]);
  rect(x,y,big,high)
  if (big>random1){
    fill(colors[round(random(bright,bright+2))]);
    house(x,y - high/random2, big/1.7, high, bright)
    fill(colors[round(random(bright+2,bright+3))]);
    house(x - big/random3,y, big/1.4, high/2, bright)
    house(x + big/random3,y, big/1.4, high/2, bright)
    // rect(x- big/2,y , big/2, big/2 )
  }

// save picture
}
function mousePressed() {
  save("marcelstorr.jpg")
}
