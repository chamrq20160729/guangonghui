//$("#list3").click(function(){
//	
//	alert('')
//})
$(function(){
	
	
	$("nav").find("*").click(function(){
		if($("#list3").children("ul").attr("class") == "dropdown-menu show"){
				$(".dropdown-menu").removeClass("show");
		}
		else{
//			if($("#list3").click() == true){
				$("#list3").click(function (e){
					e.stopPropagation();
				})
				$("#list3").click(function(){
					$(".dropdown-menu").addClass("show");
				})
//			}
		}
	})
})
