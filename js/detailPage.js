$(function(){
	$("#imgList img").mousemove(function(){
		$("#imgBox img").attr("src",$(this).attr("src"));
	});
	$("#imgList img").click(function(){
		$("#imgBox img").attr("src",$(this).attr("src"));
	});
});
