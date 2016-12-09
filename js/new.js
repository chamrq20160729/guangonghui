$(function(){

//	$("nav li").not("#list3").click(function(){
//		if($("#list3").children("ul").attr("class") == "dropdown-menu show"){
////		$(".dropdown-menu").removeClass("show");
////		console.log("单击导航条，取消显示")
//		}
//	})
	$("#list3").click(function(){
		if($("#list3").children("ul").attr("class") == "dropdown-menu show"){
			$(".dropdown-menu").removeClass("show");
			console.log("再次单击,取消显示")
		}
		else{
			$("#list3").click(function (e){
				e.stopPropagation();
			})
			$(".dropdown-menu").addClass("show");
			console.log("显示")
		}
	})
	$("*").click(function(){
		if($("#list3").children("ul").attr("class") == "dropdown-menu show"){
		$(".dropdown-menu").removeClass("show");
		console.log("单击导航条，取消显示")
		}
	})
})
