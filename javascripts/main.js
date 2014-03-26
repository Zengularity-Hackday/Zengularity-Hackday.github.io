$(function (){
	//code
	//alert('salut');
	//$('.icon-localisation').css('color','red');
	var oldPositionMouseX;

	//Taille de l'écran
	var wi = $(window).width();
	var newPositionMouseX;
	var size_bigPosition;
	var size_middlePosition;
	var size_littlePosition;

	$( document ).on( "mousemove", function( event ) {

		newPositionMouseX = event.pageX;
		size_bigPosition = $("#size_big").position();
		size_middlePosition = $("#size_medium").position();
		size_littlePosition = $("#size_little").position();

		if(newPositionMouseX < oldPositionMouseX){

			$('#size_big').css('left', (newPositionMouseX - wi/2)/20 +'px' );
			$('#size_medium').css('left', (newPositionMouseX - wi/2)/15 +'px' );
			$('#size_little').css('left', (newPositionMouseX - wi/2)/10 +'px' );
			oldPositionMouseX = newPositionMouseX;
		}

		else if(newPositionMouseX > oldPositionMouseX){
			$('#size_big').css('left', (newPositionMouseX - wi/2)/20 +'px' );
			$('#size_medium').css('left', (newPositionMouseX - wi/2)/15 +'px' );
			$('#size_little').css('left', (newPositionMouseX - wi/2)/10 +'px' );
			oldPositionMouseX = newPositionMouseX;
		}
		else{
			oldPositionMouseX = newPositionMouseX;
		}
		//$('#size_big').css('left', positionbigX + 10 + 'px' );
		//console.log(positionbigX + "tata");
	});

});
