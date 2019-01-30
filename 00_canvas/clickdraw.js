var state = 0;
//var el = document.querySelector("#slate");
//document.getElementById("slate").addEventListener('mousedown', mainFunc);

function clearTime(){
  var ctx = document.getElementById("slate").getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function switchTime(){
  var ctx = document.getElementById("slate").getContext("2d");
  if (state == 0){
    state = 1;
    document.getElementById("switch").innerHTML = '<button class="button" style="width: 200px;">Rectangle Mode</button>';
  }
  else{
    state = 0;
    document.getElementById("switch").innerHTML = '<button class="button" style="width: 200px;">Dot Mode</button>';
  }
}

function mainFunc(event){
  var c = document.getElementById("slate");
  var ctx = c.getContext("2d");
  var rect = c.getBoundingClientRect();
  ctx.fillStyle = "#FF0000";
  if (state == 0){
    console.log("clientX: " + (event.clientX - rect.left));
    console.log("clientY: " + (event.clientY - rect.top));
    // console.log("screenX: " + e.screenX);
    // console.log("screenY: " + e.screenY);
    ctx.fillRect(event.clientX - rect.left-75, event.clientY - rect.top-50, 150, 100);
  }
  else {
    ctx.beginPath();
    ctx.ellipse(event.clientX - rect.left, event.clientY - rect.top, 40, 40, Math.PI, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
