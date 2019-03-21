var pic = document.getElementById('vimage');
var clear_button = document.getElementById('but_clear');
var move_button = document.getElementById('but_move');
var q_button = document.getElementById("but_q")
var requestID;

var drawDot = function (event){
  if (event.target.nodeName != "circle") {
    var edge = pic.getBoundingClientRect();
    var x = event.clientX - edge.left;
    var y = event.clientY - edge.top;

    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("xVel",1);
    c.setAttribute("yVel",1);
    c.setAttribute("r",20);
    c.setAttribute("fill","blue");
    c.setAttribute("stroke","black");

    c.addEventListener('click', alterDot);

    pic.appendChild(c);
  }
}

var clearIt = function (){
  while (pic.lastChild) {
    pic.removeChild(pic.lastChild);
  }
}

var alterDot = function (event){
  var edge = pic.getBoundingClientRect();
  var x = event.clientX - edge.left;
  var y = event.clientY - edge.top;

  var children = pic.children;
  for (var i = 0; i < children.length; i++) {
    var circle = children[i];

    var diffx = circle.getAttribute("cx") - x;
    var diffy = circle.getAttribute("cy") - y;
    var distance = Math.sqrt( diffx*diffx + diffy*diffy );

    if(distance <= circle.getAttribute("r")){

      if(circle.getAttribute("fill") == "yellow"){
        var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute("cx",Math.random()*445 + 25);
        c.setAttribute("cy",Math.random()*445 + 25);
        c.setAttribute("xVel",1);
        c.setAttribute("yVel",1);
        c.setAttribute("r",20);
        c.setAttribute("fill","blue");
        c.setAttribute("stroke","black");
        c.addEventListener('click', alterDot);

        pic.appendChild(c);
        pic.removeChild(circle);
      }

      else {
        circle.setAttribute("fill","yellow");
      }
      break;
    }
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var moveDots = function (){
  window.cancelAnimationFrame(requestID);

  var children = pic.children;
  for (var i = 0; i < children.length; i++) {
    var circle = children[i];
    // console.log(circle);
    var xpos = parseInt(circle.getAttribute("cx"));
    var ypos = parseInt(circle.getAttribute("cy"));

    if (xpos - 20 <= 0 || xpos + 20 >= 500) {
      circle.setAttribute("xVel", parseInt(circle.getAttribute("xVel")*-1));
    }

    if (ypos - 20 <= 0 || ypos + 20 >= 500) {
      circle.setAttribute("yVel", parseInt(circle.getAttribute("yVel")*-1));
    }

    circle.setAttribute("cx", xpos+parseInt(circle.getAttribute("xVel")));
    circle.setAttribute("cy", ypos+parseInt(circle.getAttribute("yVel")));
  }
  requestID = window.requestAnimationFrame(moveDots);
}

var changeColor = function(){
  var children = pic.children;
  for (var i = 0; i < children.length; i++) {
    var circle = children[i];
    if(circle.getAttribute("fill") != 'yellow'){
      if (Math.random()*100 > 33){
        circle.setAttribute("fill", getRandomColor());
      }
      else {
        circle.setAttribute("fill", "blue");
      }
    }
  }
}

pic.addEventListener('click', drawDot);
clear_button.addEventListener('click', clearIt);
move_button.addEventListener('click', moveDots);
q_button.addEventListener('click', changeColor)
