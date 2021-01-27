window.onload=function(){
	var tm=0
	var d=document.getElementsByClassName("loading")[0]
	for (var x=0;x<5;x++){
		for (var y=0;y<5;y++){
			var e=document.createElement("div")
			e.setAttribute("style",`top: ${y*10}px; left: ${x*10}px; animation-delay: ${tm}s;`)
			d.appendChild(e)
			tm+=0.1
		}
		tm-=0.4
	}
}
