$(document).ready(function(){
	$('#send-btn').click(function(){
		validateForm(); 		
	}) 

	function validateForm(){ 
		
		var totalErrors = 0;

		var nameReg = /^[A-Za-z '.]+$/;
		var phoneReg =  /^[0-9 +()]+$/;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 

		var nameIn = $('#nameIn').val(); 
		var phoneIn = $('#phoneIn').val();
		var emailIn = $('#emailIn').val();  
		var msgIn = $('#msgIn').val();  

		if(nameIn.length === 0){ 
			$('#name-msg').html('Please enter your name'); 
			totalErrors++;
		}else if(!nameReg.test(nameIn)){ 
			$('#name-msg').html('Please enter a valid name'); 
			totalErrors++;
		}else{ 
			$('#name-msg').empty();
		}

		if(phoneIn.length === 0){ 
			$('#phone-msg').html('Please enter your phone number'); 
			totalErrors++;
		}else if(!phoneReg.test(phoneIn)){ 
			$('#phone-msg').html('Please enter a valid phone number'); 
			totalErrors++; 	
		}else{
			$('#phone-msg').empty();
		} 

		if(emailIn.length === 0){ 
			$('#email-msg').html('Please enter your email address'); 
			totalErrors++;
		}else if(!emailReg.test(emailIn)){ 
			$('#email-msg').html('Please enter a valid email address'); 
			totalErrors++;	
		}else{
			$('#email-msg').empty();	
		} 

		if(msgIn.length === 0){ 
			$('#message-msg').html('Please describe the work you want done'); 
			totalErrors++;
		}else if(msgIn.length <= 15){ 
			$('#message-msg').html('Please give us a bit more information'); 
			totalErrors++;	
		}else{
			$('#message-msg').empty();	
		} 

		if(totalErrors > 0){ 
			event.preventDefault();  
		}else{  

			event.preventDefault();

			var data = { 
				name: nameIn,  
				phone: phoneIn,  
				email: emailIn,  
				message: msgIn
			}

			$.ajax({
				type: "post", 
				url: "post.php", 
				data: data, 
				success: function(){ 
					$('#send-btn').empty();  
					$('#send-btn').css({"background-color" : "#000"});
					$('#send-btn').css({"color" : "#fff"});
					$('#send-btn').html('Sent!');  
					$('.form-body').addClass('is-sent');
					setTimeout(function(){
						$('.form-body').removeClass('is-sent');  
					}, 3600);
					$('#nameIn').val("");  
					$('#phoneIn').val(""); 
					$('#emailIn').val(""); 
					$('#msgIn').val(""); 

				}
			});
		}
	}
});