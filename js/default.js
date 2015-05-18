// Default JavaScript Functions and Initiations
$(document).ready(function() {

	var dostuff = function(){

	    videojs('job-application').ready(function(){

	      	console.log(this.options()); //log all of the default videojs options
	      
	       // 	// Store the video object
	      	var myPlayer = this, id = myPlayer.id();
	      	
	    //   	// // Make up an aspect ratio
	      	var aspectRatio = 430/640; 

	      	function resizeVideoJS(){
	        	var width = document.getElementById(id).parentElement.offsetWidth;
	        	myPlayer.width(width).height( width * aspectRatio );
	      	}
	      
	    //   	// Initialize resizeVideoJS()
	      	resizeVideoJS();
	    //   	// // Then on resize call resizeVideoJS()
	      	window.onresize = resizeVideoJS;
	      	  this.play(); // if you don't trust autoplay for some reason

		  this.on('ended', function() {
		    alert("I hope you enjoyed it. If you got this far my email address is Andy.L.MacKay@gmail.com. I look forward to hearing from you.");
		  });
	    });
	}

      	/// Cool Stuff Here

      	var tl = new TimelineLite({onComplete:dostuff})
      	var zero = $('.zero'), one = $('.one'), two = $('.two'), three = $('.three'), four = $('.four'), five = $('.five'), six = $('.six'),
      	seven = $('.seven'), eight = $('.eight'), nine = $('.nine'), ten = $('.ten'), topbox = $('.application');


      	// tl.add( TweenLite.to([one, two, three, four, five, six, seven, eight, nine, ten], 1, {opacity:0,height:0}) );
		tl.to(zero, 2, {x:600, rotation:360,x:100, scale:0.5}) 
		  
		// // say HI
		.to(one, 2, {opacity:1, fontSize:70})		
		// // Introduce yourself
	    .to(two, 1, {opacity:1, fontSize:35}, '-=1') 
		// // Move on
		.to([one, two], 2, {opacity:0, scale:0})
		// // Move up
		.to('.onetwo', 2, {marginTop:-100 }, '-=2' )
		// // State position
		.to(three, 2, {y:120, opacity:1})
		// // Keep going
		.to([three, zero], 1, {opacity:0})
		// // Start campaigning
		.to(four, 2, {opacity:1, ease:Power2.easeInOut})
		// // Get to the point
		.to(topbox, 1, {height:100, ease: Bounce.easeOut})
		// // And be concise
		.to(four, 1, {opacity:0}, '-=1')
		// // And professional
		.from(five, 2, {x:-500, opacity:1, ease: Power2.easeOutIn})
		.to(five, 2, {opacity:1}, '-=2')
		// but tired
		.to('.portfolio', 2, {opacity:1})
		// // yet enthusiastic
		.from(eight, 2, {x:-500, opacity:1, ease: Power2.easeOutIn})
		.to(five, 2, {x:600, ease: Power2.easeOutIn, opacity:1}, '-=2')
		.from(nine, 2, {x:-500, opacity:1, ease: Power2.easeOutIn})
		.to(eight, 2, {x:600, ease: Power2.easeOutIn, opacity:1}, '-=2')
		.to(topbox, 3, {height:600, ease: Bounce.easeOut})
		.to('#job-application', 3, {opacity:1}, '-=3')



		// Explain your position


		// tl.add( TweenLite.to(element, 1, {opacity:0}) );




      	/// End cool stuff, back to work





  
}); // end document ready
