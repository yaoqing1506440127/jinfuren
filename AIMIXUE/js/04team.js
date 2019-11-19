var spans=document.querySelectorAll(".teamer>p>span:nth-of-type(2)");//查找到左边所有点击的元素
var box=document.querySelectorAll(".newsbox1");
var name1=document.querySelector(".pro>span:last-of-type");
for(var i=0;i<spans.length;i++){
	spans[i].onclick=function(){
//		e=e||window.event;
//		var target=e.target||e.srcElement;
		for(var b=0;b<box.length;b++){
			spans[b].className="";
			spans[b].nextElementSibling.className="";
			box[b].className="newsbox1 ";
		}
		this.className="active";
		this.nextElementSibling.className="active";
		var a=this.getAttribute("dy");
		box[a].className="newsbox1 active";
		name1.innerHTML=this.innerHTML;
	}
}
