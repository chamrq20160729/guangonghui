window.onload = function(){
	//页面高度和宽度
	var sHeight = document.documentElement.scrollHeight;
	var sWidth = document.documentElement.scrollWidth;
	//可视区域高度和宽度
	var wHeight = document.documentElement.clientHeight;
	var wWidth = document.documentElement.clientWidth;
	//创建遮罩
	var oMask = document.createElement("div");
	oMask.id = "mask";
	oMask.style.height = sHeight + "px";
	oMask.style.width = sWidth + "px";
	document.body.appendChild(oMask);
	
	var oTipbox = document.createElement("div");
	oTipbox.id = "tipBox";
	oTipbox.innerHTML = "<p>快速登陆</p><from action='#' method='post' name='login'>"+
	"<input type='text' value=''placeholder='请输入用户名/邮箱/手机号' ><input type='password' value='' placeholder='请输入密码'>"+
	"<div id='sup'><a id='signin' href='html/signin.html'>注册账号</a><a id='forgot' href='html/forgot.html'>忘记密码</a></div>"+
	"<button id='login'>登陆</button><button id='close'><i class='fa fa-times' aria-hidden='true'></i></button></from>";
	document.body.appendChild(oTipbox);
	//获取oTipbox的宽高,通用的居中方式，不过这里所有尺寸以PSD设计稿为准，故高度位置由CSS直接设置
	var dHeight = oTipbox.offsetHeight;
	var dWidth = oTipbox.offsetWidth;
	oTipbox.style.left = (wWidth - dWidth)/2 + "px";
	oTipbox.style.top = (wHeight - dHeight)/2 + "px"
    //关闭弹窗
	var oclose = document.getElementById("close");
	oclose.onclick = function(){
		document.body.removeChild(oMask);
		document.body.removeChild(oTipbox);
	};
	//登陆按钮
//  var login2 = document.getElementById("login2");
//  	login2.onclick = function{
//  		
//  	}
	//轮播图
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
