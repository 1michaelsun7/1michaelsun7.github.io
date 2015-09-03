<?php
if (isset($_POST['myFormSubmitted'])) {

	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

	$email_to = "micsun@mit.edu";
	$email_subject = "micsun.me bug";
	$string_regex = '/^[A-Za-z]+$/';
	$email_regex = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

	$errors = '';

	
    if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputMessage'])){

    	$errors .= "\r\nError: all fields required";
    }

    $name = test_input($_POST['inputName']);
    $email_from = test_input($_POST['inputEmail']);
    $message = $_POST['inputMessage'];
    
    if (!preg_match($email_regex, $email_from) || !preg_match($string_regex, $name)){
    	echo preg_match($email_regex, $email_from);
    	echo preg_match($string_regex, $name);
    	$errors .= "\r\nError: invalid field(s)";
    }

    if($errors == "") {

		$email_message = "";
 
		$email_message .= "Name: " .$name. "\r\n";
		$email_message .= "Email: " .$email_from. "\r\n";
		$email_message .= "Message: " .$message;

		$headers = 'From: '.$email_from."\r\n".
        $headers .= 'Reply-To: '.$email_from."\r\n" .
        $headers .= 'X-Mailer: PHP/' . phpversion();

		mail($email_to, $email_subject, $email_message, $headers);
			
		echo "Success";

	} else {
		echo $errors;
	}

	
}
?>