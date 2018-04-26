$(document).ready(function(){ 
	$('#paint-btn').click(function(){
		$('#paint-btn').css({"display" : "none"}); 
		$('.sub').css({"display" : "inline-block"});		
	});  

	$('#wall-btn').click(function(){
		$('#paint-btn').css({"display" : "inline-block"}); 
		$('.sub').css({"display" : "none"});		
	});


	$('#calc-bttn').click(function(){
		var intG = 16; 
		var intM = 20; 
		var intB = 24; 
		var extG = 30; 
		var extM = 55; 
		var extB = 80; 
		var wallG = 20; 
		var wallM = 30; 
		var wallB = 40;

		var totalErrors = 0;
		var processValue = $('input[name="process"]:checked').val(); 
		var conditionValue = $('input[name="condition"]:checked').val(); 
		var size = $('#area-size').val();  

		if (processValue === undefined) {
			$('#process-msg').html('Please select a process'); 
			totalErrors++;
		}else{ 
			$('#process-msg').empty();
		} 

		if (conditionValue === undefined) {
			$('#condition-msg').html('Please select the current condition'); 
			totalErrors++;
		}else{ 
			$('#condition-msg').empty(); 
		} 

		if (size.length === 0) {
			$('#size-msg').html('Please enter the area size');
			totalErrors++;
		}else{
			$('#size-msg').empty();
		} 

		if (!$('#checkbox').is(":checked")) {  
			$('#disclaimer').addClass('error');
			totalErrors++;
		}else{ 
			$('#disclaimer').removeClass('error');
		}

		if( totalErrors === 0){
			$('#form-msg').empty(); 

			if(processValue == 'interior' && conditionValue == 'good'){ 		
				var total = size * intG; 
				$('#calc-bttn').empty();  
				$('#calc-bttn').css({"background-color" : "#000"});
				$('#calc-bttn').css({"color" : "#fff"});
				$('#calc-bttn').html('Estimate: $ '+total.toFixed(2));	
			}else if(processValue == 'interior' && conditionValue == 'mod'){
				var total = size * intM; 
				$('#calc-bttn').empty();  
				$('#calc-bttn').css({"background-color" : "#000"});
				$('#calc-bttn').css({"color" : "#fff"});
				$('#calc-bttn').html('Estimate: $ '+total.toFixed(2));
			}else if(processValue == 'interior' && conditionValue == 'bad'){
				var total = size * intB; 
				$('#calc-bttn').empty();  
				$('#calc-bttn').css({"background-color" : "#000"});
				$('#calc-bttn').css({"color" : "#fff"});
				$('#calc-bttn').html('Estimate: $ '+total.toFixed(2));	
			}else if(processValue == 'exterior' && conditionValue == 'good'){
				var total = size * extG; 
				$('#calc-bttn').empty();  
				$('#calc-bttn').css({"background-color" : "#000"});
				$('#calc-bttn').css({"color" : "#fff"});
				$('#calc-bttn').html('Estimate: $ '+total.toFixed(2));
			}else if(processValue == 'exterior' && conditionValue == 'mod'){
				var total = size * extM; 
				$('#calc-bttn').empty();  
				$('#calc-bttn').css({"background-color" : "#000"});
				$('#calc-bttn').css({"color" : "#fff"});
				$('#calc-bttn').html('Estimate: $ '+total.toFixed(2));	
			}else if(processValue == 'exterior' && conditionValue == 'bad'){
				var total = size * extB; 
				$('#calc-bttn').empty();  
				$('#calc-bttn').css({"background-color" : "#000"});
				$('#calc-bttn').css({"color" : "#fff"});
				$('#calc-bttn').html('Estimate: $ '+total.toFixed(2));	
			}else if(processValue == 'wallp' && conditionValue == 'good'){
				var total = size * wallG; 
				$('#calc-bttn').empty();  
				$('#calc-bttn').css({"background-color" : "#000"});
				$('#calc-bttn').css({"color" : "#fff"});
				$('#calc-bttn').html('Estimate: $ '+total.toFixed(2));
			}else if(processValue == 'wallp' && conditionValue == 'mod'){
				var total = size * wallM; 
				$('#calc-bttn').empty();  
				$('#calc-bttn').css({"background-color" : "#000"});
				$('#calc-bttn').css({"color" : "#fff"});
				$('#calc-bttn').html('Estimate: $ '+total.toFixed(2));
			}else if(processValue == 'wallp' && conditionValue == 'bad'){
				var total = size * wallB; 
				$('#calc-bttn').empty();  
				$('#calc-bttn').css({"background-color" : "#000"});
				$('#calc-bttn').css({"color" : "#fff"});
				$('#calc-bttn').html('Estimate: $ '+total.toFixed(2));
			}
		}else{
			$('#form-msg').html('There are errors');
		}
	})
});