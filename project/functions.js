$(document).ready(function() {

  // MAIN FUNCTIE----------------------------------------------------------------
  $(function() {
    //VARIABLES
    var bord = $('table');
    var info = $('.info');
    var warnings = $('.warnings');
    var tabelscore1 = $('.tabelsp1');
    var tabelscore2 = $('.tabelsp2');
    var scoresp1 = 0;
    var scoresp2 = 0;
    var speler = 1;

    toonInfo(info, speler);

    $('td').click(function() {
      console.log('ok');
      td = $(this);
      var status = isBezet(td);
      if (status == 0) {
        var prentje = prentjeInstellen(speler);
        prentjeVerschijnen(td, prentje);
        if (gewonnen(bord, prentje)) {
          warnings.html('Winner is : ' + speler);
          if (speler == 1)
          {
            scoresp1++;
          }
          else {
            scoresp2++;
          }
          info.html('');

        } else {
          speler = spelerVeranderen(speler);
          toonInfo(info, speler);
        }
      } else {
        warnings.html('Vakje al aangeduid !');
      }
    });

    $('.reset').click(function() {
      speler = 1;
      warnings.html('');
      reset(bord);
      toonInfo(info, speler);
    });

  });

  function toonInfo(info, speler) {
    info.html('Speler ' + speler+ ' is aan de beurt');
  }
    function prentjeInstellen(speler) {
      if (speler == 1) {
        return 'trump';
      } else {
        return 'clinton';
      }
    }
  function isBezet(td) {
    if ( !td.hasClass('clinton') || !td.hasClass('trump')) {
      return 0;
    } else {
      return 1;
    }
  }

  function prentjeVerschijnen(td, prentje) {
    return td.addClass(prentje);
  }


  function spelerVeranderen(speler) {
    if (speler == 1) {
      return speler = 2;
    } else {
      return speler = 1;
    }
  }


  //  |1|2|3|
  //  |4|5|6|
  //  |7|8|9|
  function gewonnen(bord, prentje) {
    var success = 0;
    // HORIZONTALE LIJNEN-----------------------------------------------------------------------------------------------------------
    if (bord.find('.vak1').hasClass(prentje) && bord.find('.vak2').hasClass(prentje) && bord.find('.vak3').hasClass(prentje)) {
      success = 1;
    } else if (bord.find('.vak4').hasClass(prentje) && bord.find('.vak5').hasClass(prentje) && bord.find('.vak6').hasClass(prentje)) {
      success = 1;
    } else if (bord.find('.vak7').hasClass(prentje) && bord.find('.vak8').hasClass(prentje) && bord.find('.vak9').hasClass(prentje)) {
      success = 1;
      // VERTICALE LIJNEN-----------------------------------------------------------------------------------------------------------
    } else if (bord.find('.vak1').hasClass(prentje) && bord.find('.vak4').hasClass(prentje) && bord.find('.vak7').hasClass(prentje)) {
      success = 1;
    } else if (bord.find('.vak2').hasClass(prentje) && bord.find('.vak5').hasClass(prentje) && bord.find('.vak8').hasClass(prentje)) {
      success = 1;
    } else if (bord.find('.vak3').hasClass(prentje) && bord.find('.vak6').hasClass(prentje) && bord.find('.vak9').hasClass(prentje)) {
      success = 1;
      // DIAGONALE LIJNEN-----------------------------------------------------------------------------------------------------------
    } else if (bord.find('.vak3').hasClass(prentje) && bord.find('.vak5').hasClass(prentje) && bord.find('.vak7').hasClass(prentje)) {
      success = 1;
    } else if (bord.find('.vak1').hasClass(prentje) && bord.find('.vak5').hasClass(prentje) && bord.find('.vak9').hasClass(prentje)) {
      success = 1;
    }
    return success;
  }

// Reset button
  function reset(bord) {
    bord.find('td').each(function() {
      $(this).removeClass('trump');
      $(this).removeClass('clinton');
    });
  }


});
