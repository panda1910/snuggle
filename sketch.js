let arr = []
let onscreen = true;
function setup() {
  createCanvas(1200,700);
  background(255);
  let button = createButton("reset");
  button.mousePressed(reset);
}

function reset(){
  onscreen = false;
  arr = [];
}

function draw() {
  onscreen = true;
  background(255,100);
  for(let i=0;i<arr.length;i++)
  {
    arr[i].update();
    arr[i].draw();
  }
  //Had to do that twice
  for(let j=0;j<arr.length;i++)
  {
    arr[j].update();
    arr[j].draw();
  }

}

function mousePressed(){
  if(onscreen)
    arr.push(new Bubble(mouseX, mouseY, random(15,25)))
}

function mouseDragged(){
  for(let i=0;i<arr.length;i++)
  {
    arr[i].tail();
  }
}


