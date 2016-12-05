//window.onload = function(){
//	var bigImg = document.getElementById("imgBox").getElementsByTagName("img");
//	var smImg = document.getElementById("imgList").getElementsByTagName("img");
////	for (var i = 0; i < smImg.length; i++){
////		var sSrc = smImg[i].getAttribute("src");
////		smImg[i].onmouseover = function(){
////			alert(i);
////			bigImg.src = this.src;
////		}
////	}
////	smImg[0].onmouseover = function(){
////			alert('');
////		}
//
//}
$(function(){
	$("#imgList img").hover(function(){
		$("#imgBox img").attr("src",$(this).attr("src"));
	},function(){})
});
