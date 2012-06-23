(function($) {

function makeStage() {
	var stage = [];

	_.times(10, function() { stage.push([9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]); });
	stage.push([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]);

	return stage;
}

function stage2string(stage) {
	var result = '';

	_.each(stage, function(line) {
		_.each(line, function(cell) {
			switch (cell) {
				case 9 : result += '■'; break;
				case 1 : result += '□'; break;
				default : result += '　'; break;
			}
		});
		result += '<br />';
	});

	return result;
}

function printStage(stage) {
	$(target).html(stage2string(stage));
}

function moveLine(stage, lineNum, block) {
	_.each(block, function(line) {
		// 壁に達した場合、stage勝ち
		_.each(stage[lineNum].slice(4, 8), function(stageCell, i) {
			line.splice(i, 1, 9 == stageCell ? stageCell : line[i]);
		});
		[].splice.apply(stage[lineNum], [4, 4].concat(line));
		lineNum += 1;
	});
}

var BLOCKS = {
	square: [
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	]
};

var target = null;

function falling(stage) {
	var currentLineNum = 0,
		move = function() {
			if (8 > currentLineNum) {
				moveLine(stage, currentLineNum, BLOCKS.square);
				printStage(stage);
				currentLineNum++;
			}
		};

	$("body").on("keydown", function(e) { if (40 == e.keyCode) move(); });
	$("body").on("periodicDownEvent", move);

	setInterval(function() {
		$("body").trigger("periodicDownEvent");
	}, 1000);
}

$(function() {
	var s = makeStage();
	target = $("#game");
	falling(s, $("#game"));
});

})(jQuery);
