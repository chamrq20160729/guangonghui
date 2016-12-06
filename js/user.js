//$(function(){
//	$("#userTab").children().children("li").hover(
//		$(".show").className = ''
//		$(this).className = "show"
//});
$(function(){
	$(".navbar-right").children("li:gt(0)").click(function(){
		$("#userTab").children().children("li").removeClass("show");
		var i = $(this).index() -1;
		$("#userTab").children().children("li").eq(i).addClass("show");
	});
	$(".orderTab").children().children("li").click(function(){
		$(".orderCon").children().children("li").removeClass("show");
		var j = $(this).index();
		$(".orderCon").children().children("li").eq(j).addClass("show");
	})
})
