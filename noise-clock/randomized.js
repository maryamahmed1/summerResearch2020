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
			imgNames.push(allStims[i][j].src);
		}
	}
	Qualtrics.SurveyEngine.setEmbeddedData( 'allStims-order', imgNames.toString());

	//setting up trial and var for data acquisition
	var trial = 1;
	var stage = 1;


	//hides all stimuli in each sub-array pair in beginning
	for (var i = 0; i < allStims.length; i++) {
		for (var k = 0; k < allStims[i].length; k++) {
			allStims[i][k].style.display = "none";
		}
	}

	//setting up counters for indexing through main array
	var a = 0;
	var b = 0
	var selection = [];
	
	
	carousel();
	
	function carousel() {

	//try shuflling array outside function move outside carousel
	//def new vari that is actual trial number vs stage of the trial
	//only increment trial# by 1 at last else statement. set all stim to none outside carousel
		text.style.display = "none";
		if (trial > allStims.length) {
			Qualtrics.SurveyEngine.setEmbeddedData( 'selections', selection.toString());
			jQuery('#NextButton').click();
		}
		if (b < 2 && a < allStims.length){
			if (stage == 1) {
				stage++;
				allStims[a][b].style.display = "none";
				setTimeout(carousel, 1000);
			} else if (stage == 2) {
				console.log("stage" + stage, "b" + b);
				stage++;
				allStims[a][b].style.display = "block";
				setTimeout(carousel, 1000);
			} else if (stage == 3){
				console.log("stage" + stage, "b" + b);
				stage++; //set trial to 0 inc trial# by 1 using stimuli shuffle array
				allStims[a][b].style.display = "none";
				b++;
				setTimeout(carousel, 500);
			} else if (stage == 4) {
				console.log("stage" + stage, "b" + b);
				stage++;
				allStims[a][b].style.display = "block";
				setTimeout(carousel, 1000);
			} else if (stage == 5){
				allStims[a][b].style.display = "none";
				text.style.display = "block";
				a++;
				b = 0;
				stage = 1;
				
				var qid = this.questionId;
				document.onkeydown = function(event) {
					console.log('keydown',event);
					//trial #, arrow click, time took to click
					selection.push(new Array(trial, event.which));
					trial++;
					Qualtrics.SurveyEngine.setEmbeddedData( 'arrow', event.which );
					if (event.which == 37) {
						event.preventDefault();
						setTimeout(carousel);
					} else if (event.which == 39) {
						event.preventDefault();
						setTimeout(carousel);
					}
				}
			
			}
		}

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