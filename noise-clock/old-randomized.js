Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/
	//hides blue button
	this.hideNextButton();

	// collects the info from HTML code about the text of the question
	// left or right click
	var text = document.getElementById("question");
	text.style.display = "none";



	//random number generator function
	function getRandomInt(max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}

	//automatic slideshow method
	var trial = 0;
	var shown = [];
	var first = 1;
	carousel();
	
	function carousel() {
	  var i;
	  var x = document.getElementsByClassName("mySlides");
	  var randint;

	//hides all stimuli in beginning
	  for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	  }
	//try shuflling array outside function move outside carousel
	//def new vari that is actual trial number vs stage of the trial
	//only increment trial# by 1 at last else statement. set all stim to non outside carousel
	randint = getRandomInt(x.length);//gets randint [0, x.length - 1]
	if (trial == 0) {
		trial++;
		x[randint].style.display = "none";
		setTimeout(carousel, 1000);
		//console.log(shown);
	} else if (trial % 2 == 0 && trial != 0) {
		//console.log("hide" + trial);		
		trial++;
		x[randint].style.display = "none";
		setTimeout(carousel, 500);
		if (shown.length == 2) {
			text.style.display = "block";
		}
		console.log(shown);	
	} else {
		//console.log("show img" + trial);

		trial++; //set trial to 0 inc trial# by 1 using stimuli shuffle array
			if (shown.includes(randint) == false) {
				x[randint].style.display = "block";
				shown.push(randint);
				
			}
		setTimeout(carousel, 1000);
	}
		
		//console.log(shown);

		Qualtrics.SurveyEngine.setEmbeddedData( 'stim-order', shown.toString());

		 
	}
	
	

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/


});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});