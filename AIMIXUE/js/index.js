window.onload=function(){
	var imgs=document.querySelectorAll(".main>img");//找到轮播里面需要轮播的图片
	
	var lis=document.querySelectorAll(".main>ul>li");//找到所有的按钮
	var j=0;
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(e){			
			var e=e||window.event;
			var target=e.target||e.srcElement;
			j=target.getAttribute("dy");
			for(var i=0;i<imgs.length;i++){
				lis[i].className="";
				imgs[i].className="";
			}
			target.className="active";
			imgs[j].className="active";
		}
		
	}
	
	timer=setInterval(function(){
		
		j++;
		if(j==3){
			j=0;
			
		}
		for(var i=0;i<imgs.length;i++){
			lis[i].className="";
			imgs[i].className="";
		}
		lis[j].className="active";
		imgs[j].className="active";
	},2000)
	main.onmouseover=function(){
		clearInterval(timer);
		timer=null;
	}
	main.onmouseout=function(){
		timer=setInterval(function(){
		
		j++;
		if(j==3){
			j=0;
			
		}
		for(var i=0;i<imgs.length;i++){
			lis[i].className="";
			imgs[i].className="";
		}
		lis[j].className="active";
		imgs[j].className="active";
	},2000)
	}
//var imgs1=document.querySelectorAll(".teamer>ul>li>img");
//var lujing=["img/服装301.png","img/服装30.gif","img/服装341.png","img/服装361.png"]
//for(var a=0;a<imgs1.length;a++){
//	imgs1[a].onmouseover=function(){
//		
//		var i=this.getAttribute("dy");
//		this.nextElementSiBiLing.src=lujing[i];
//		this.style.cursor="pointer";
//
//	}
//}
}

