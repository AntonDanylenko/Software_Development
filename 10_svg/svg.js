var pic = document.getElementById('vimage');
var clear_button = document.getElementById('but_clear');

pic.addEventListener('click', function(event){
  var edge = pic.getBoundingClientRect();
  var x = event.clientX - edge.left;
  var y = event.clientY - edge.top;

  print(document.elementFromPoint(x,y).length);
  if (document.elementFromPoint(x,y).length==0){
    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r",16);
    c.setAttribute("fill","red");
    c.setAttribute("stroke","black");

    pic.appendChild(c);
  }
})

pic.addEventListener('click', function(event){

})

function clearPic(){
  while (pic.lastChild) {
    pic.removeChild(pic.lastChild);
  }
}
