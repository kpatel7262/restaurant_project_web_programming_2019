jQuery(document).ready(function(){
	$('.try').hide();
	/*$('h2').hide();*/
	$('h2').click(function(){
		$('.try').hide();
		$(this).next('.try').show();
	});//end of click
});//end of onlaod