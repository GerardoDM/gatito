

matrix = [[ '','',''],
          ['','','',],
          ['','','' ]];


$( "#card" ).click(function() {
    $( "#card" ).animate({
      opacity: 0.25,
      left: "+=50",
      height: "toggle"
    }, 5000, function() {
      // Animation complete.
    });
  });

var turno = "jugador1";

$(".col").click(function() {
	         
	if (turno=="jugador1")
	{
		$(this).html("o");
        turno = "jugador2"
        this.setAttribute("data-value", "o");
        console.log($(this).text());
        // console.log(this.getAttribute("data-value"));
    }

	else
	{ 
		$(this).html("x");
        turno = "jugador1"
        console.log($(this).text());
        this.setAttribute("data-value", "x");
        // console.log(this.getAttribute("data-value"));
    }
    
   if (($("#11").attr('data-value') == 'x' && ($("#22").attr('data-value') == 'x') && $("#33").attr('data-value') == 'x')
    || ($("#11").attr('data-value') == 'x' && ($("#44").attr('data-value') == 'x') && $("#77").attr('data-value') == 'x')
    || ($("#22").attr('data-value') == 'x' && ($("#55").attr('data-value') == 'x') && $("#88").attr('data-value') == 'x')
    || ($("#33").attr('data-value') == 'x' && ($("#66").attr('data-value') == 'x') && $("#99").attr('data-value') == 'x')
    || ($("#44").attr('data-value') == 'x' && ($("#55").attr('data-value') == 'x') && $("#66").attr('data-value') == 'x')
    || ($("#77").attr('data-value') == 'x' && ($("#88").attr('data-value') == 'x') && $("#99").attr('data-value') == 'x')
    || ($("#11").attr('data-value') == 'x' && ($("#55").attr('data-value') == 'x') && $("#99").attr('data-value') == 'x')
    || ($("#33").attr('data-value') == 'x' && ($("#55").attr('data-value') == 'x') && $("#77").attr('data-value') == 'x')) {
         alert("Ganaste , X");
         $('.col').html("");
         $('.col').attr("data-value", "0");
     }

     if (($("#11").attr('data-value') == 'o' && ($("#22").attr('data-value') == 'o') && $("#33").attr('data-value') == 'o')
     || ($("#11").attr('data-value') == 'o' && ($("#44").attr('data-value') == 'o') && $("#77").attr('data-value') == 'o')
     || ($("#22").attr('data-value') == 'o' && ($("#55").attr('data-value') == 'o') && $("#88").attr('data-value') == 'o')
     || ($("#33").attr('data-value') == 'o' && ($("#66").attr('data-value') == 'o') && $("#99").attr('data-value') == 'o')
     || ($("#44").attr('data-value') == 'o' && ($("#55").attr('data-value') == 'o') && $("#66").attr('data-value') == 'o')
     || ($("#77").attr('data-value') == 'o' && ($("#88").attr('data-value') == 'o') && $("#99").attr('data-value') == 'o')
     || ($("#11").attr('data-value') == 'o' && ($("#55").attr('data-value') == 'o') && $("#99").attr('data-value') == 'o')
     || ($("#33").attr('data-value') == 'o' && ($("#55").attr('data-value') == 'o') && $("#77").attr('data-value') == 'o')) {
          alert("Ganaste , O");
          $('.col').html("");
          $('.col').attr("data-value", "0");
      }

});

$("#limpiar").click(function() {

    $('.col').html("");
    $('.col').attr("data-value", "0");


});

