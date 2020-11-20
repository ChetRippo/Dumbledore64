//AJAX
function ajaxRequest(url) {
	var AJAX = null;
	if (window.XMLHttpRequest) {
		AJAX=new XMLHttpRequest();
	}
	else{
		AJAX=new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (AJAX==null) {
		alert("Your browser doesn't support AJAX."); 
		return false;
	}
	AJAX.onreadystatechange = function() {
		if (AJAX.readyState==4 || AJAX.readyState=="complete") {
			return;
		}
	}
	AJAX.open("POST", url, true);
	AJAX.send(null);
}