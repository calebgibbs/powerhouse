$(document).ready(function(){
	$('#mobile-icon').click(function(){
		$('#menu-button').toggleClass('is-active'); 
		$('#menu-links').slideToggle({"display" : "block !important"});

	});
});