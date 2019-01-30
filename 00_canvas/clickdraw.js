var state = 0;
document.getElementById("slate").addEventListener('mousedown', mainFunc);

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

function mainFunc(e){
  var ctx = document.getElementById("slate").getContext("2d");
  ctx.fillStyle = "#FF0000";
  if (state == 0){
    console.log("clientX: " + e.clientX);
    console.log("clientY: " + e.clientY);
    // console.log("screenX: " + e.screenX);
    // console.log("screenY: " + e.screenY);
    ctx.fillRect(e.clientX, e.clientY, 150, 100);
  }
  else {
    ctx.beginPath();
    ctx.ellipse(e.clientX-20, e.clientY-20, 40, 40, Math.PI, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
