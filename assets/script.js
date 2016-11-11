$( document ).ready(function() {

// 
// if user hovers on 'hue' button
// hue of page changes to new random value
// proportion = get random number between 0 and 1 - Math.random()
// hueValue = multiply proportion by 360 
// 
// when user clicks on page
// get horizontal position from event
		var yPosition,xPosition,screenHeight,screenWidth,cssValue,lightnessValue,saturationValue,saturationRatio,lightnessRatio,hueValue;

		$('body'),click(
			function(event){
				xPosition = event.pageX;
				// get width of screen
				screenWidth = $('body').width();
				// divide position by width to get proportion
				saturationRatio = xPosition/screenWidth;
				// saturationvalue = proportion * 100
				saturationValue = saturationRatio * 100;
				// get vertical position from event
				yPosition = event.pageY;
				// get height of screen
				screenHeight = $('body').height();
				// divide position by height to get proportion
				lightnessRatio = yPosition/screenHeight;
				// lightnessValue = proportion * 100
				lightnessValue = lightnessRatio * 100;


			}
		);

		hueValue = Math.random() * 360;
		// plug in three values to css using string concatenation: +
		// embed saturation value in css rule
		cssValue = 'hsl('+hueValue+', '+saturationValue+'%, '+ (lightnessValue)%100 +'%)';
		// change css rule for body with jquery	
		// change the css value to color w new saturation.
		$('body').css('background-color', cssValue);


// 
// vertical position measures lightness
	// if lightness is less than 50
	if (lightnessValue < 50 ) {
	// change all typeface to white
		$('body').css('color',white)
	}
	// if lightness is more than 50
	if ( lightnessValue > 50 ) {
	// change all typeface to black
		$('body').css('color',black)
	}
// 

});
/*
$( document ).ready(function() {

	var yPosition, screenHeight, 
		saturationRatio, saturationValue, 
		cssValue, brightnessValue, hueValue;

		// initialize brightness value
		brightnessValue = 50;

	$('body').click(
		function(event) {
			// get y value of click
			yPosition = event.pageY;

			// get height of body element (screen)
			screenHeight = $('body').height();

			// divide yposition by height to get relative amount
			saturationRatio = yPosition/screenHeight;

			// multiple that by 100 to get saturation value
			saturationValue = saturationRatio*100;

			// if the cursor is on the top half of the screen
			if ( saturationValue > 50 ) {
			// increase the brightness by 5%
				brightnessValue = brightnessValue + 5;
			}

			// if the cursor is on the bottom half of the screen
			if ( saturationValue < 50 ) {
			// decrease the brightness by 5%
				brightnessValue = brightnessValue - 5;
			}

			hueValue = Math.random() * 360;

			// embed saturation value in css rule
			cssValue = 'hsl('+hueValue+', '+saturationValue+'%, '+ (brightnessValue)%100 +'%)';

			// change the css value to color w new saturation.
			$('body').css('background-color', cssValue);

		}
	); 
}); */
