(function($) {
	function changeColor(target, color) {
		$(target).css("background", color);
	}

	// onready
	$(function() {
		changeColor($("#info"), "blue");
		
		var level = $("#level .info-value");
		
		$("body").on("levelchange", function() {
			level.text(10);
		});
	});
})(jQuery);