window.onload = function(){
	var slideBox = document.getElementById("slideBox"),
		slideImgBox = document.getElementById("slideImgBox"),
		slider = document.getElementById("slider"),
		prev = document.getElementById("prev"),
	    next = document.getElementById("next"),
	    dots = document.getElementById("slideDots").getElementsByTagName("i"),
	    slideWidth = slideImgBox.clientWidth,
		curIndex = 1,
		animation = false,
		timer;
	
	window.onresize = function(){
		slideWidth = slideImgBox.clientWidth;
		for(i = 0;i < dots.length;i++){
			if(dots[i].className == "focus"){
				curIndex = dots[i].getAttribute("index");
				break;
			};
		}
		slider.style.left = -slideWidth * curIndex + "px";
	}
	//向左切换
	prev.onclick = function(){
		if(!animation){
			if(curIndex == 1){
				curIndex = 4;
			}else{
				curIndex--;
			};
			dotsColor(curIndex);
			animate(slideWidth);
		}
	};
	//向右切换
	next.onclick = function(){
		if(!animation){
			if(curIndex == 4){
				curIndex = 1;
			}else{
				curIndex++;
			};
			dotsColor(curIndex);
			animate(-slideWidth);
		}
	};
	//按钮切换
	for (i = 0;i<dots.length;i++){
		dots[i].onclick = function(){
			if(this.className == "focus"){
				return;
			};
			var clickIndex = this.getAttribute("index");
			var slideW = (clickIndex - curIndex) * (-slideWidth);
			if(!animation){
				curIndex = clickIndex;
				animate(slideW);
				dotsColor(curIndex);
			}
		}
	}
	slideBox.onmouseover = stopPlay;
	slideBox.onmouseout = autoPlay;
	autoPlay();
	
	function animate(slideWidth){
		animation = true;
		var imgWidth = slideImgBox.clientWidth;
		var slideLeft = parseInt(slider.offsetLeft) + slideWidth;
		var time = 300; //位移总时间
		var interval = 10; //位移间隔
		var speed = slideWidth / (time/interval); //每一次的位移长度
		
		!function _move(){
			if(speed < 0 && parseInt(slider.offsetLeft) > slideLeft || speed > 0 && parseInt(slider.offsetLeft) < slideLeft){
				slider.style.left = parseInt(slider.offsetLeft) + speed + "px";
				setTimeout(_move,10);
			}else{
				animation = false;
				slider.style.left = slideLeft + "px";
				if(slideLeft > -imgWidth){
					slider.style.left = -4 * imgWidth + "px";
				}
				if(slideLeft < -4 * imgWidth){
					slider.style.left = -imgWidth + "px";
				}
			}
		}();
	}
	function dotsColor(curIndex){
		for(var i = 0;i < dots.length;i++){
			if(dots[i].className == "focus"){
				dots[i].removeAttribute("class");
				break;
			};
		};
		dots[curIndex - 1].className = "focus";
	}
	function autoPlay(){
		timer = setInterval("next.onclick()",3000);
	}
	function stopPlay(){
		clearInterval(timer);
	}
}
