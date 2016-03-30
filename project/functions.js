$(document).ready(function() {
  $(function(){
  var scoresp1=0;
  var scoresp2=0;
  var speler=1;
  var bord;
  var warnings = $('.warnings');
  var info = $('.info');

    $("td").click(function(){
      var character= spelerCharacter(speler);
      alert(character);
    });
  });

  // Prentje associeren aan speler
function spelerCharacter(speler){
  if (speler == 1) {
    return 'Trump';
  }
  else {
    return 'Clinton';
  }
}

});
