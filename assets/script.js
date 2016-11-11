$( document ).ready(function() {

// 
// if user hovers on 'hue' button
// hue of page changes to new random value
// proportion = get random number between 0 and 1 - Math.random()
// hueValue = multiply proportion by 360 
// 
// when user clicks on page
// get horizontal position from event
		var yPosition,xPosition,screenHeight,screenWidth,cssValue,lightnessValue,saturationValue,saturationRatio,lightnessRatio;

		$('body'),click(
			function(event){
				xPosition = event.pageX;
				screenWidth = $('body').width();
				saturationRatio = xPosition/screenWidth;
				saturationValue = saturationRatio * 100;

				yPosition = event.pageY;
				screenHeight = $('body').height();
				lightnessRatio = yPosition/screenHeight;
				lightnessValue = lightnessRatio * 100;


			}
		);

		hueValue = Math.random() * 360;

		// embed saturation value in css rule
		cssValue = 'hsl('+hueValue+', '+saturationValue+'%, '+ (lightnessValue)%100 +'%)';

		// change the css value to color w new saturation.
		$('body').css('background-color', cssValue);

// get width of screen
// divide position by width to get proportion
// saturationvalue = proportion * 100
// 
// get vertical position from event
// get height of screen
// divide position by height to get proportion
// lightnessValue = proportion * 100
// 
// plug in three values to css using string concatenation: +
// change css rule for body with jquery
// 
// vertical position measures lightness
	// if lightness is less than 50
	if (lightnesValue < 50 ) {
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
