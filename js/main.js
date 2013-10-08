$(function(){

 $(".player1-btn").click(function(){
 		$(this).toggleClass("btn-danger");
		$("#player1").toggleClass("hidden");	
	});
	$(".player2-btn").click(function(){
 		$(this).toggleClass("btn-danger");
		$("#player2").toggleClass("hidden");	
	});
	$(".player3-btn").click(function(){
 		$(this).toggleClass("btn-danger");
		$("#player3").toggleClass("hidden");	
	});
	$(".player4-btn").click(function(){
 		$(this).toggleClass("btn-danger");
		$("#player4").toggleClass("hidden");	
	});
	
	var merdenomViewers=0;
	var bedlamViewers=0;
	var combinedViewers=0;
	
	function getViewers(){
		$.getJSON("http://api.justin.tv/api/stream/summary.json?channel=deirvonsatan&jsonp=?", 
			function(a){
				merdenomViewers = a.viewers_count;
			}
		)
		
		$.getJSON("http://api.justin.tv/api/stream/summary.json?channel=bedlamp&jsonp=?", 
			function(a){
				bedlamViewers = a.viewers_count;
			}
		)
		
		var combinedViewers = +merdenomViewers + +bedlamViewers;
		document.getElementById("viewer_count").innerHTML = combinedViewers;
	}
	
	getViewers();
	setInterval(getViewers, 10000);
	
	$.getJSON("https://api.twitch.tv/kraken/channels/deirvonsatan/videos", 
		function(a){
			console.log(a);
		}
	)
	
});

