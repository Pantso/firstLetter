$('.article p:first').addClass('firstparagraph');

$('.firstparagraph').each(function() {
	var text = $(this).html();
	var first_letter = text.substr(0,1);
	if(first_letter==''){
		
	}else{
		if ( /[a-zA-Zα-ωΑ-Ω0-9]/.test(first_letter) ) { // a to z, A to Z, Α (greek) to Ω, α (greek) to ω and 0 to 9
		  $(this).html('<span class="firstletter">' + first_letter + '</span>' + text.slice(1));
		}
	}
	
});  
