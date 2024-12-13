// 最終課題を制作しよう
let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0, 250, 250);

  balls = [];
}


  let img;
  function preload(){
    img = loadImage('watermark.jpg');
  }



function draw(){
  noStroke();
  fill(255, 255, 255);
  rect(58, 40, windowWidth, windowHeight, 137, 0, 0, 0);



  for(let i = 0; i < balls.length; i++){

     let num1 = Math.floor(Math.random() * 256),
         num2 = Math.floor(Math.random() * 256),
         num3 = Math.floor(Math.random() * 256),
     c = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
    fill(c);
    let b = balls[i];
    stroke(51,60,94);
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;


  }
}

setInterval(function(draw2){
  const dx = Math.random()*3;
  const dy = Math.random()*3;
  a = { x: 110, y:100, size: random(35), vx: dx+1, vy: dy+1 };
    balls.push(a);
  }, 300);




function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

  let img;
  function preload(){
    img = loadImage('watermark.jpg');
  }
}
