 var mic;

 function setup() {
     createCanvas(windowWidth, windowHeight);
     mic = new p5.AudioIn()
     mic.start();
 }

 function draw() {
     noStroke();
     micLevel = mic.getLevel();
     col_ = constrain(micLevel * 20000, 0, 255);

     mov = map(micLevel, 0, 1, 10, 300);
     mov2 = map(micLevel, 0, 1, 10, 500);
     movnariz = map(micLevel, 0, 1, 50, 1000);
     background(0, 0, 0);


     fill('black');
     rect(0, 0, width, height);

     // ojo izquierdo
     fill(255);
     ellipse(width * 0.25, height / 2.5, 50 + mov, 50 + mov);
     fill('black');
     ellipse(width * 0.25, height / 2.5, 5 + mov2, 5 + mov2);

     // ojo derecho
     fill(255);
     ellipse(width * 0.75, height / 2.5, 50 + mov, 50 + mov);
     fill('black');
     ellipse(width * 0.75, height / 2.5, 5 + mov2, 5 + mov2);
     
     //nariz
     fill(movnariz);
     ellipse(width * 0.50, height / 2, 50 + mov2, 50 + mov2);
 }

 function touchStarted() {
     getAudioContext().resume()
 }

 function windowResized() {
     resizeCanvas(windowWidth, windowHeight);
 }
