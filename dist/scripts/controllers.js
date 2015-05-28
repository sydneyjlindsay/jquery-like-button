$(document).ready(function() {
	
	var $btn = $('button')

	$btn.data('count', 0); 

	$btn.click(function(){ 

	    $btn.html(function(){ 
	        var numberLikes = $btn.data('count') + 1; 
			$btn.data('count', numberLikes); 
	        	return numberLikes+(" Like"); 
	        }
	        else {
	        	return numberLikes+(" Likes");
	        }
	    });
	});
});
