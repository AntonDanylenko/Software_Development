var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var drawButton = document.getElementById("draw");

var color = "#000000";
var colorButton = document.getElementById("pick");
colorButton.addEventListener("click", function(){
  color = colorButton.style.backgroundColor;
  print("color: " + color);
});

var clearButton = document.getElementById("clear");
var clear = function(e){
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
clearButton.addEventListener("click", clear);

// var draw = function(event){
//   ctx.fillStyle = color.style.backgroundColor;
//   ctx.rect(20, 20, c., 100);
// }

c.addEventListener("click", function(e){
  ctx.fillStyle = color;
  ctx.rect(e.offsetX, e.offsetY, e.offsetX+1, e.offsetY+1);
});
//c.addEventListener("onmouseup", stopIt);
