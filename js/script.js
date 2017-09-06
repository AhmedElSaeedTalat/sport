$("#v1").click(function(){
	 value = $("#v1").text();
	$("#value1").html(value);
});
$("#v2").click(function(){
	 value = $("#v2").text();
	$("#value1").html(value);
});
$("#v3").click(function(){
	 value = $("#v3").text();
	$("#value1").html(value);
});
$(".dropdownMenu2").mouseenter(function(){
		$(".dropdownMenu2").addClass("border");

	$(".football").css("visibility","visible");
	$(".football").addClass("animate");
});
$(".football").mouseleave(function(){
		$(".football").css("visibility","hidden");
		$(".football").removeClass("animate");
		$(".dropdownMenu2").removeClass("border");



});
$(".theme").hover(function(){
	$(".football").css("visibility","hidden");
	$(".football").removeClass("animate");
	$(".dropdownMenu2").removeClass("border");


});
$(".dropdownMenu3").mouseenter(function(){
	$(".dropdownMenu3").addClass("border");
	$(".baseball").css("visibility","visible");
	$(".baseball").addClass("animate");
});
$(".baseball").mouseleave(function(){
	$(".baseball").css("visibility","hidden");
		$(".baseball").removeClass("animate");
			$(".dropdownMenu3").removeClass("border");


});
$(".theme1").hover(function(){
	$(".baseball").css("visibility","hidden");
	$(".baseball").removeClass("animate");
	$(".dropdownMenu3").removeClass("border");


});

$(".dropdownMenu4").mouseenter(function(){
	$(".soccer").css("visibility","visible");
	$(".soccer").addClass("animate");
		$(".dropdownMenu4").addClass("border");

});
$(".soccer").mouseleave(function(){
	$(".soccer").css("visibility","hidden");
		$(".soccer").removeClass("animate");
			$(".dropdownMenu4").removeClass("border");



});
$(".theme2").hover(function(){
	$(".soccer").css("visibility","hidden");
	$(".soccer").removeClass("animate");
	$(".dropdownMenu4").removeClass("border");

});
$("#search").click(function(){
$(".search").css("visibility","visible");
});
$(".close1").click(function(){
	$(".search").css("visibility","hidden");

});
$("#plusIcon").click(function(){
	$("#plusIcon").hide();
		$("#iconMinus").show();

});
$("#iconMinus").click(function(){
	$("#iconMinus").hide();
		$("#plusIcon").show();

});
$("#plusIcon1").click(function(){
	$("#plusIcon1").hide();
		$("#iconMinus1").show();

});
$("#iconMinus1").click(function(){
	$("#iconMinus1").hide();
		$("#plusIcon1").show();

});
$("#plusIcon2").click(function(){
	$("#plusIcon2").hide();
		$("#iconMinus2").show();

});
$("#iconMinus2").click(function(){
	$("#iconMinus2").hide();
		$("#plusIcon2").show();

});
$("#plusIcon3").click(function(){
	$("#plusIcon3").hide();
		$("#iconMinus3").show();

});
$("#iconMinus3").click(function(){
	$("#iconMinus3").hide();
		$("#plusIcon3").show();

});
$("#plusIcon4").click(function(){
	$("#text").addClass("border1");
	$("#plusIcon4").hide();
		$("#iconMinus4").show();

});
$("#iconMinus4").click(function(){
	$("#iconMinus4").hide();
		$("#plusIcon4").show();
	$("#text").removeClass("border1");

});
$(".close2").click(function(){
	$(".sideMenu").toggle("slide");
	setTimeout(xx,600);	

});
function xx(){
		$(".background").css("background","transparent");
		$(".background").css("z-index","-1");
	}
	$("#sideMenuClick").click(function(){
		$(".background").css("background","rgba(34,34,34,.7)");
		$(".background").css("z-index","100000000000000000");
			$(".sideMenu").toggle("slide");

	});
	$("#headLines").click(function(){
		$(this).addClass("active");
		$("#trending").removeClass("active");
		$("#videos").removeClass("active");

	});
	$("#trending").click(function(){
		$(this).addClass("active");
		$("#headLines").removeClass("active");
		$("#videos").removeClass("active");

	});
	$("#videos").click(function(){
		$(this).addClass("active");
		$("#trending").removeClass("active");
		$("#headLines").removeClass("active");

	});
	// $(document).ready(function(){
	// 	 x = $("#divFixed");
	// 	 y = scrollMonitor.create(x);
	// 	 y.enterViewport(()=>{
	// 	 	$("#divFixed").addClass("position101");
	// 	 });
	// });
