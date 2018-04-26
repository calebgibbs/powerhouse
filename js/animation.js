$(document).ready(function(){
	
	$('.grid-img').each(function(i){
		setTimeout(function(){
			$('.grid-img').eq(i).addClass('is-visible');
		}, 0 * i);
	}); 

	$('.ser-box-outer').each(function(i){
		setTimeout(function(){
			$('.ser-box-outer').eq(i).addClass('is-visible');
		}, 150 * i);
	});

	$('img').on('dragstart', function(event) { event.preventDefault(); });  
}); 

