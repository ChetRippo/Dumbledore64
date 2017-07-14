function fullScreen(){
	var w = canvas.width;
	var h = canvas.height;
	var aspect_ratio = h/w;
	if(typeof(canvas.webkitRequestFullScreen) != "undefined"){
		document.getElementById('canvas_wrapper').webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT); //Chrome
		canvas.style.width= screen.height / aspect_ratio+'px';
	}else if(typeof(canvas.mozRequestFullScreen) != "undefined"){
		document.getElementById('canvas_wrapper').mozRequestFullScreen(); //Firefox
		canvas.style.width= screen.height / aspect_ratio+'px';
	}
	else{
		document.getElementById('canvas_wrapper').requestFullscreen();
		canvas.style.width= screen.height / aspect_ratio+'px';
	}
}
function exitFullscreen(){
	if(typeof(canvas.webkitRequestFullScreen) != "undefined"){
		document.webkitCancelFullScreen(); //Chrome
		$(canvas).attr('style', '');
	}else if(typeof(canvas.mozRequestFullScreen) != "undefined"){
		document.mozCancelFullScreen(); //Firefox
		$(canvas).attr('style', '');
	}else{
		document.exitFullscreen();
		$(canvas).attr('style', '');
	}
}

//fullscreen exit bug (chrome/opera/safari only)
addEventListener('webkitfullscreenchange', function(e) {
	if(!document.webkitIsFullScreen){
		exitFullscreen();
	}
}, false);
addEventListener('fullscreenchange', function(e) {
	if(!document.fullScreen){
		exitFullscreen();
	}
}, false);
addEventListener('mozfullscreenchange', function(e) {
	if(!document.mozFullScreen){
		exitFullscreen();
	}
}, false);