// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 400);
  background(255);


  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  stroke(0,128,0);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(50 + 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);


  // BLANK[1]
  noFill();
  fill(14, 47, 146);
  stroke(14, 47, 146);
  circle(300,100,90);

  noFill();
  fill(22, 131, 46);
  stroke(22, 131, 46);
  circle(295,95,77);

  noFill();
  fill(255);
  stroke(255);
  circle(290,103,70);
}



function draw() {

  textSize(25);
  textFont("georgia");
  noStroke();
  text("KOBE", 255,90);
  fill(77);


  textSize(11);
  textFont("georgia");
  noStroke();
  text("UNIVERSITY", 267, 109);
  fill(77);



  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);





}
