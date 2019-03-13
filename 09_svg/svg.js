var pic = document.getElementById('vimage');
var clear_button = document.getElementById('but_clear');

var oldx = -1;
var oldy = -1;

pic.addEventListener('click', function(event){
  var edge = pic.getBoundingClientRect();
  var x = event.clientX - edge.left;
  var y = event.clientY - edge.top;

  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute("cx",x);
  c.setAttribute("cy",y);
  c.setAttribute("r",25);
  c.setAttribute("fill","red");
  c.setAttribute("stroke","black");

  pic.appendChild(c);

  if (oldx != -1){
    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', oldx);
    line.setAttribute('x2', x);
    line.setAttribute('y1', oldy);
    line.setAttribute('y2', y);
    line.setAttribute('stroke', 'black');
    pic.appendChild(line);
  }
  oldx = x;
  oldy = y;
})

function clearPic(){
  while (pic.lastChild) {
    pic.removeChild(pic.lastChild);
  }
  oldx = -1
  oldy = -1
}
