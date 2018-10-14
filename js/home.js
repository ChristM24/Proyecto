$(document).ready(function(){
        $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});
});
//-----Boton Responsive----//
$('.boton-responsive').click(function () {
                $('.boton-responsive').toggleClass('activo');
        });






