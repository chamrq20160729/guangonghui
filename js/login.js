function getId(id){
	return typeof id == "string" ? document.getElementById(id) : id;
}
getId(login2).onclick = function(){
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
}