
var turno = "jugador1";

$(".cuadro").click(function() {
	
	// if ($("#1").text()!="1") {
    
    //     alert("si jala");
        
    //      }
         
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
    
    if ($("#1").attr('data-value') == 'x' && ($("#2").attr('data-value') == 'x') && $("#3").attr('data-value') == 'x') {
        alert("Ganaste");
     }

     if ($("#1").attr('data-value') == 'x' && ($("#4").attr('data-value') == 'x') && $("#7").attr('data-value') == 'x') {
        alert("Ganaste");
     }

     if ($("#1").attr('data-value') == 'x' && ($("#2").attr('data-value') == 'x') && $("#3").attr('data-value') == 'x') {
        alert("Ganaste");
     }

     if ($("#1").attr('data-value') == 'x' && ($("#2").attr('data-value') == 'x') && $("#3").attr('data-value') == 'x') {
        alert("Ganaste");
     }

     



});




    
  



$("#limpiar").click(function() {



});

