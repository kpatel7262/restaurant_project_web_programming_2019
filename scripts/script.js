jQuery(document).ready(function(){
	$('.menu-section').hide();
	$('h2').hide();
	$('.menu-type').click(function(){
		$('.try').hide();
		$('.'+this.getAttribute('data-toggle-id')).show();
	});//end of click
	/*careers*/
	$('.desc').hide();
	$('tr').click(function(){
		$('.desc').hide();
		$(this).find('td.desc').show();
	});//end of click table
});//end of onlaod