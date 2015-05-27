$(document).ready(function() {
	
	var $btn = $('button')

	$btn.data('count', 0); //set the data key to 'count' and the number to 0

	$btn.click(function(){ //add event listener, on click...

	    $btn.html(function(){ //on click, change the html of the button
	        var numberLikes = $btn.data('count') + 1; //set number of likes variable inside this function to btn data count +1
			$btn.data('count', numberLikes); //set button data equal to count (which is 0) + number of likes
	        if(numberLikes === 1) {
	        	return numberLikes+(" Like"); //if number of likes is 1, put Like in the button
	        }
	        else {
	        	return numberLikes+(" Likes"); //if likes is more than 1, or 0, put Likes
	        }
	    });
	});
});
