$(function(){

	var options = {
		title: {
			text: ""
		},
                animationEnabled: true,
		data: [
		{
			type: "spline", //change it to line, area, column, pie, etc
			dataPoints: [
				{ x: 10, y: 10,label: "Mon" },
				{ x: 20, y: 12,label: "Tue" },
				{ x: 30, y: 8,label: "Wed" },
				{ x: 40, y: 14,label: "Thu" },
				{ x: 50, y: 6,label: "Fri" },
				{ x: 60, y: 24,label: "Sat" },
				{ x: 70, y: 16,label: "Sun" }
			]
		}
		]
	};

if ($("#energy-chart").length && $("#water-chart").length) {
	$("#energy-chart").CanvasJSChart(options);
	$("#water-chart").CanvasJSChart(options);
}

	$(".facebook-btn").click(function(){
		$(".facebook-btn i").fadeOut();
		$(this).fadeTo("slow",".7")
		$(".facebook-btn span").fadeOut(function() {
		  $(this).text("Thanks for sharing!").fadeIn();
		  $(".facebook-btn").prop("disabled",true);
		  $(".facebook-btn").css("cursor","auto");
		});
	});

	$(".twitter-btn").click(function(){
		$(".twitter-btn i").fadeOut();
		$(this).fadeTo("slow",".7")
		$(".twitter-btn span").fadeOut(function() {
		  $(this).text("Thanks for sharing!").fadeIn();
		  $(".twitter-btn").prop("disabled",true);
		  $(".twitter-btn").css("cursor","auto");
		});
	})
});