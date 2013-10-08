$(function(){

	var height = $( window ).height();
	var width = $( window ).width();

	$(".stream").fitVids();
	$(".streamPIP").fitVids();
	
  $(".fluid-width-video-wrapper object").css("max-height", height);
	
	$(window).resize(function(){
  	$(".fluid-width-video-wrapper object").css("max-height", height);
	});
 
	
	
});

