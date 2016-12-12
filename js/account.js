$(function(){
	$(".payMent button").click(function(){
		console.log("1");
		$(".payMent button").removeClass("tPay");
		$(this).addClass("tPay");
	})
})