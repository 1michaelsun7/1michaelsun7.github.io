$(document).ready(function(){
	$("#contactForm").on("submit", function() {
		console.log('calling');
	    $.post('contact.php', {inputName: $('#inputName').val(), inputEmail: $('#inputEmail').val(), inputMessage: $('#inputMessage').val(), myFormSubmitted: 'yes'}, function(data) {
	    	if (data == "Success"){
	    		$("#submitFeedback").addClass("disabled");
				$("#submitFeedback").text("Thanks for the feedback!");
				setTimeout(function(){
					$("#submitFeedback").removeClass("disabled");
					$("#submitFeedback").text("Submit");
				}, 1000);
	    	} else {
	    		$("#submitFeedback").addClass("disabled");
				$("#submitFeedback").text("I think you did something wrong");
				setTimeout(function(){
					$("#submitFeedback").removeClass("disabled");
					$("#submitFeedback").text("Submit");
				}, 1000);
	    	}
	        $('#inputName, #inputEmail, #inputMessage').val(''); /* Clear the inputs */
	    }, 'text');
	    return false;
	});
});