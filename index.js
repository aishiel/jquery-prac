var maxLength = 15;
$('pasword').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#Submit').text(textlen);
});
$( "#btn" ).click(function() {
  $( "#box" ).animate({
   width: "300px",
   height: "300px",
    }, 1500 );
});
$( "p" ).click(function() {
  $( this ).fadeTo( "slow", 0.20 );
});
