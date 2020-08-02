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
	var shown = [];
	carousel();


	function carousel() {
	  var i;
	  var x = document.getElementsByClassName("mySlides");
	  var randint;

	//hides all stimuli in beginning
	  for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	  }
		
	randint = getRandomInt(x.length);//gets randint [0, x.length - 1]	
	if (trial % 2 == 0) {
		console.log("hide" + trial);
		trial++;
		x[randint].style.display = "none"
		setTimeout(carousel, 500);
		
	} else {
		console.log("show img" + trial);
		trial++;
			if (shown.includes(randint) == false) {
				x[randint].style.display = "block";
				shown.push(randint);
				console.log(randint);
			}
		setTimeout(carousel, 1000);
	}	
	
	
	}