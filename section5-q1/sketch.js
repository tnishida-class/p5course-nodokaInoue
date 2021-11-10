// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  let px = random(0,400-(w + p * 2));
  let py = random(0,400-(h + p * 2));
  let num1 = Math.floor(Math.random() * 256),
      num2 = Math.floor(Math.random() * 256),
      num3 = Math.floor(Math.random() * 256),
      c = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
  fill(c);
  rect(px, py, w + p * 2, h + p * 2);
  fill(255);
  text(t, px+p, py+h);
}
