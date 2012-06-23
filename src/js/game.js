(function($) {

	$(function() {
		setTimeout(function() {
			$("#game").text("start game!!");
		}, 2000);

		// underscore
		_.each([1, 2, 3], function(v) { console.log(v); });
	});

})(jQuery);