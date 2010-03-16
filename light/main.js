var pageX, pageY;
var colors = 5;

function $(o) {
	return document.getElementById(o);
}

function $log() {
	args = Array.prototype.slice.apply(arguments);
	
	a = args.shift();
	
	while(typeof a != "undefined") {
		if(typeof a == "object") {
			for(var i in a) {
				console.log(a.toString()+"."+i+" = "+a[i]);
			}
		} else {
			console.log(a);
		}
		
		a = args.shift();
	}
}

function mouseDown(e) {
	$('colors').addEventListener('mousemove', mouseMoved, false);
	$('colors').addEventListener('mouseup', mouseUp, false);
	
	pageX = e.pageX;
	pageY = e.pageY;
}

function mouseMoved(e) {
	var initialX = parseInt(document.body.style.backgroundPosition.split(' ')[0].replace('px', '')) || 0;
	
	x = e.pageX - pageX + initialX;
	pageX = e.pageX;
	
	document.body.style.backgroundPosition = x+"px 0px";
}

function mouseUp(e) {
	$('colors').removeEventListener('mousemove', mouseMoved, false);
	$('colors').removeEventListener('mouseup', mouseUp, false);
	
	initialX = parseInt(document.body.style.backgroundPosition.split(' ')[0].replace('px', '')) || 0;
	
	if(Math.abs(initialX / 320) - Math.floor(Math.abs(initialX / 320)) > 0.4) {
		var bg;
		
		$log([initialX / 320, Math.floor(initialX / 320)]);
		
		if(initialX > 0)
			bg = Math.ceil(initialX / 320);
		else
			bg = Math.floor(initialX / 320);
		
		
		
		document.body.style.backgroundPosition = (bg*320)+"px 0px";
	}
}

function main() {
//	if(!window.navigator.standalone) {
//		$("colors").style.display = "none";
//		$("notice").style.display = "block";
//		
//		window.scrollTo(0, 1);
//	}
	
	$('colors').addEventListener('mousedown', mouseDown, false);
}

window.addEventListener('DOMContentLoaded', main, false);
window.applicationCache.addEventListener('updateready', function() {
	window.applicationCache.update();
	window.applicationCache.swapCache();
}, false);