$(document).ready(function() {

var typed = new Typed('#typed',{
    strings:["GHOST"],
    backSpeed: 40,
    typeSpeed: 200,
    showCursor: false
  });

}); 
var i = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["blue", "yellow"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);