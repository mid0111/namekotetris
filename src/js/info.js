(function($) {

	var lineCnt;
	var score;
	var level;

	// ラインをインクリメントする
	var lineClear = function(event, num) {
		lineCnt = eval(lineCnt + num);
		$("#lines .info-value").text(lineCnt);
		calcScoreAndLevel();
	};
	
	// レベル、スコア、ラインの値を出力する
	function write() {
		$("#lines .info-value").text(lineCnt);
		$("#score .info-value").text(score);
		$("#level .info-value").text(level);
	}

	// スコアとレベルを計算する
	function calcScoreAndLevel() {
		score = Math.round(Math.sqrt(lineCnt)) * 10;
		$("#score .info-value").text(score);
		calcLevel();
	}

	// レベルを計算する
	function calcLevel() {
		level = (Math.round(score / 17));
		if (level === 0) {
			level = 1;
		}
		$("#level .info-value").text(level);
	}

	// onready
	$(function() {
		lineCnt = 0;
		score = 0;
		level = 1;
		write();

		// event listener
		$("body").on("lineClear", lineClear);
	});

})(jQuery);