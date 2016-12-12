$(function(){
	$("#imgList img").mousemove(function(){
		$("#imgBox img").attr("src",$(this).attr("src"));
	});
	$("#imgList img").click(function(){
		$("#imgBox img").attr("src",$(this).attr("src"));
	});
	$(".add").click(function(){
		console.log($("#dnub").attr("value"))
		var $va = $("#dnub").attr("value");
// 		  $("#dnub").attr("value"," $va+1")
	})
});
 