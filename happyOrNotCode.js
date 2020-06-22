


Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/


		setTimeout(function() {
        document.getElementById("myDiv").style.display="none";
    }, 500);
	
	
		setTimeout(function() {
        document.getElementById("img1").show();
    }, 650);
	
		setTimeout(function() {
        document.getElementById("img1").style.display="none";
    }, 1150);
	
	
		setTimeout(function() {
        document.getElementById("img2").show();
    }, 1300);
	
		setTimeout(function() {
        document.getElementById("img2").style.display="none";
    }, 1800);




});



// carousel method
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("center");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";

	if (slideIndex%2 == 0) {
		setTimeout(carousel, 150);
	}
  setTimeout(carousel, 500); // Change image every 5 milliseconds
}


















// HTML

// <div id = "myDiv">
// <em>please fixate on dot.</em>
// <img id = "myImage" src = "https://art.pixilart.com/f9341fc025b52a6.png">
// </div>

// <div id = "img1" style="display:none">
// <img id = "myImage" class = "center" src = "https://cdn.hswstatic.com/gif/smiling-makes-you-happy-1.jpg">
// </div>

// <div id = "img2" style="display:none">
// <img id = "myImage" class = "center" src = "https://media.istockphoto.com/photos/beautiful-blueeyed-brunette-standing-by-textured-wall-looks-sad-picture-id923189248?k=6&m=923189248&s=612x612&w=0&h=ss-VV2D9u6fwR7iRl5ss6xE7vrFsHdGCNiqDPXZh7rI=">
// </div>