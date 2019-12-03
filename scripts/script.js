jQuery(document).ready(function(){
	$('.try').hide();
	/*$('h2').hide();*/
	$('h2').click(function(){
		$('.try').hide();
		$(this).next('.try').show();
	});//end of click
	$('.desc').hide();
	$('tr').click(function(){
		$('.desc').hide();
		$(this).find('td.desc').show();
	});//end of click table
});//end of onlaod