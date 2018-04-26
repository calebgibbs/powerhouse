<?php 
if($_POST){ 
	$to = "calebgibbs@me.com";
	// $to = "agibbs.decorators@clear.net.nz";
	$subject = "Website quote inquiry";
	$name = $_POST['name']; 
	$phone = $_POST['phone']; 
	$from = $_POST['email']; 
	$message = $_POST['message'] ."\r\n"; 
	$message .= $name ."\r\n"; 
	$message .= $phone ."\r\n";
	$message .= $from ."\r\n"; 
	$headers = 'From: ' . $from ;  

	mail($to, $subject, $message, $headers);
} 
?>