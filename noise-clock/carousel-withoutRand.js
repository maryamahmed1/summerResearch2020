Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

	var slideIndex = 0;
	carousel();

	function carousel() {
	  var i;
	  var x = document.getElementsByClassName("mySlides");
	  for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	  }
	  slideIndex++;
	  // if (slideIndex > x.length) {slideIndex = 1}
	  x[slideIndex-1].style.display = "block";

		
		if (slideIndex % 2 == 0) {
			setTimeout(carousel, 500)
		} else {
			setTimeout(carousel, 150) // Change image every 1.5 milliseconds
		}
		 
	}


});