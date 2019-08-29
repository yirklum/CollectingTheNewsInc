$(document).ready(function(){
	
	console.log("get document ready");

	/* Contact Forms */

	$("form").submit(function(event){

        var firstName = $("#firstName").val();

        if (firstName === ""){
            alert("First Name required");
            event.preventDefault();
        }

    });
	
	$('form').submit(function(event){

        var lastName = $("#lastName").val();

        if (lastName === ""){
            alert("Last Name required");
            event.preventDefault();
        }

    });
	   
	$("form").submit(function(event){

        var email = $("#email").val();

        if (email === ""){
            alert("E-mail Address required");
            event.preventDefault();
        }

	});
	
	$("form").submit(function(event){

        var location = $("#location").val();

        if (location === ""){
            alert("Location required");
            event.preventDefault();
        }

	});
	
	$("form").submit(function(event){

        var comment = $("#comment").val();

        if (comment === ""){
            alert("Comment required");
            event.preventDefault();
        }

    });

	/*Memorabilia*/

    // Armored Car Window
    // Get the modal
	// var amodal = document.getElementById('shatteredGlassModal');

	// // Get the image and insert it inside the modal - use its "alt" text as a caption
	// var aimg = document.getElementById('shatteredGlass');
	// var amodalImg = document.getElementById("shatteredGlassImage");
	// var acaptionText = document.getElementById("shatteredGlassCaption");
	// aimg.onclick = function(){
	//     amodal.style.display = "block";
	//     amodalImg.src = this.src;
	//     acaptionText.innerHTML = this.alt;
	// }

	// Get the <span> element that closes the modal
	// var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	// span.onclick = function() { 
	//   amodal.style.display = "none";
	// }

	// Sniper Signs
	// Get the modal
	// var bmodal = document.getElementById('sniperSignModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	// var bimg = document.getElementById('sniperSignModal');
	// var bmodalImg = document.getElementById("sniperSignImage");
	// var bcaptionText = document.getElementById("sniperSignCaption");
	// bimg.onclick = function(){
	//     bmodal.style.display = "block";
	//     bmodalImg.src = this.src;
	//     bcaptionText.innerHTML = this.alt;
	// }

	// Get the <span> element that closes the modal
	// var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	// span.onclick = function() { 
	//   bmodal.style.display = "none";
	// }
	
});

