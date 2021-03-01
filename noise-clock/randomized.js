Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/
	//hides blue button
	this.hideNextButton();
	

	// collects the info from HTML code about the text of the question
	// left or right click
	var text = document.getElementById("question");
	text.style.display = "none";

	var x = document.getElementsByClassName("mySlides");
	var allStims = [];
	var imgNames = [];
	for (var i = 0; i < x.length; i+=2) {
		allStims.push(new Array(x[i], x[i+1]));
	}
	


	//shuffling array-allStims for randomization of stimuli pairs
	function shuffle(array) {
		for(let s = array.length - 1; s > 0; s--){
		  const j = Math.floor(Math.random() * s);
		  const temp = array[s];
		  array[s] = array[j];
		  array[j] = temp;
		}
		return array;
	}
	allStims = shuffle(allStims);
		for (var i = 0; i < allStims.length; i++) {
		allStims[i] = shuffle(allStims[i]);
			for (var j = 0; j < 2; j++) {
			imgNames.push(allStims[i][j].id);

		}


	}

	Qualtrics.SurveyEngine.setEmbeddedData( 'allStims2', imgNames.toString());

	//automatic slideshow method
	var trial = 1;
	var shown = [];
	var stage = 1;
	var randint;


	//hides all stimuli in each sub-array pair in beginning
	for (var i = 0; i < allStims.length; i++) {
		for (var k = 0; k < allStims[i].length; k++) {
			allStims[i][k].style.display = "none";
		}
	}

	var a = 0;
	var b = 0;
	var selection = [];
	var time;

	function switchDisplay(currDisplay) {
		if (currDisplay == "none") {
			allStims[a][b].style.display = "block";
		} else {
			allStims[a][b].style.display = "none"
		};
	}
	
	
	
	carousel();
	
	function carousel() {

	//try shuflling array outside function move outside carousel
	//def new variable that is actual trial number vs stage of the trial
	//only increment trial# by 1 at last else statement. set all stim to none outside carousel
		text.style.display = "none";
		if (trial > allStims.length) {
			Qualtrics.SurveyEngine.setEmbeddedData( 'selections2', selection.toString());
				jQuery('#NextButton').click();
			}
		if (b < 2 && a < allStims.length){
			let myPromise1 = new Promise((resolve, reject) => {
					stage++;
					setTimeout(() => resolve("none"), 1000);
				});
				myPromise1.then(function(prevDisplay) {
					switchDisplay(prevDisplay);
					stage++;
					return new Promise((resolve, reject) => {
						setTimeout(() => resolve("block"), 1000);
					});
				}).then(function(prevDisplay) {
					stage++;
					switchDisplay(prevDisplay);
					return new Promise((resolve, reject) => {
						setTimeout(() => resolve("none"), 500);
					});
				}).then(function(prevDisplay) {
					switchDisplay(prevDisplay);
					return new Promise((resolve, reject) => {
						setTimeout(() => resolve("block"), 1000);
					});
				}).then(function(prevDisplay) {
					stage++;
					switchDisplay(prevDisplay);
					text.style.display = "block";
					let start = new Date();
					a++;
					b = 0;
					var qid = this.questionId;

					this.onkeydown = function(event) {
						let end = new Date();
						time = end.getTime() - start.getTime();
						if (event.which == 37 && stage == 5) {
							selection.push(new Array(trial, event.which, time));
							trial++;
							stage = 1;
							Qualtrics.SurveyEngine.setEmbeddedData('arrow', event.which);
							event.preventDefault();
							carousel();
						} else if (event.which == 39 && stage == 5) {
							selection.push(new Array(trial, event.which, time));
							trial++;
							stage = 1;
							Qualtrics.SurveyEngine.setEmbeddedData('arrow', event.which);
							event.preventDefault();
							carousel();
						};
					};
				})
		}
	}	

})



Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/
	



});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});