function rotator() {
	var active = $$(".active")[0];
	
	var next = active.getNext(".app");
	
	if(next == null) {
		next = active.getParent().getFirst(".app");
		
		new Fx.Tween(next, {'onComplete': function() {
			next.addClass("active");
			active.removeClass("active");
		}}).start('opacity', 0, 1);
		
		return;
	}
	
	new Fx.Tween(active, {'onComplete': function() {
		next.addClass("active");
		active.removeClass("active");
	}}).start('opacity', 1, 0);
}

window.addEvent("load", function() {
	rotator.periodical(5000);
});