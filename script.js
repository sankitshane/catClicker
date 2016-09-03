$(document).ready(function(){

var click;
$('.catImage').click(function(e) {
  clicks += 1;
  $('#score').text(clicks);
});
});
