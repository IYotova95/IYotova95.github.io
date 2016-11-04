$( document ).ready(function() {

	$('h3').click(
	  function() {
	    $('h3').css('font-size', '200px');
	  }
	);

	$('h3').hover(
	  function() {
	    $('h3').css('background-color', 'yellow');
	  }
	);

	$('.wrapper').click(
	  function() {
	    $(this).css('display', 'none');
	    return false;
	  }
	);

});
