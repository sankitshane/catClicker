var cats = ["Snoofy","Snow"];
var click1=0;
var click2 = 0;

  $('.cat_main').each(function() {
    $(this).prepend("<h1>"+ cats.pop() +"</h1>");
  });

  $('.catImage1').click(function() {
    click1 = click1 + 1;
    $('#score1').text(click1);
  });
  $('.catImage2').click(function() {
    click2 = click2 + 1;
    $('#score2').text(click2);
  });
