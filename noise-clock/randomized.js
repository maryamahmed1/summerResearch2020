Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

	//hides blue button
	this.hideNextButton();


	//random number generator function
	function getRandomInt(max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}

	//automatic slideshow method
	var trial = 1;
	carousel();

	function carousel() {
	  var i;
	  var x = document.getElementsByClassName("mySlides");
	  var randints;

	  for (i = 0; i < x.length; i++) {
		randints = getRandomInt(x.length); //gets randint [0, x.length - 1]
		x[i].style.display = "none";
	  }
	  x[randints].style.display = "block";


	
	if (trial % 2 == 0) {
		trial++;
		x[randints].style.display = "none"
		setTimeout(carousel, 150);
		
	} else {
		trial++;
		setTimeout(carousel, 500);
	}
		 
	}


});