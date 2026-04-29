var zero_hp = {};
ImageData.fromBase64(function(i) {
		zero_hp.img = i
	},
	'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'
);

var zero_scop_hp = {};
ImageData.fromBase64(function(i) {
		zero_scop_hp.img = i
	},
	'iVBORw0KGgoAAAANSUhEUgAAAAwAAAAdCAYAAACe/43ZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAImSURBVDhPlVNNaxNRFH3NJJOvMd9EY8DUONNaROLCiq24qGIrhEoVFWrrxo0bFy4DfuDHzp0u3Eh3bhRcCO6MUnEp+g/0JyQ/4TjnxTM8pS0YOLn33HfPuffNMKbRPoxKs40D0xFqrUMgJ0qNluWCuDkxv4CllT7c3+07dxMTRoloZKKZWWx/+Yr+pcswxlhUq1UUyzXrKlEyIYoirK5dxWg0woNHTzDbO2md6q2ObdLKWtOEsSCoNhFUGhgMBhiPx7hyfcM6s0lwJsxg7dp64ra+eRMfh0PsqzVtzRVykul2u3j4+Omf605+Z5fOI+1nk1UYCTsh5Xko1fcjH5SSSxOV5sFkqiJhXBfGIF5FnI5aizlryYvjAYvkroBRaB+ZmwhckXJNkolEhk1yl0ANjK4Jc8MxEvCAkTW3WbAC/vFSOmSUGzkNdM7cPiVNUYPLCXc9K9Ahnci1npoUeWb4NNioyKJMyNlMLpFxL8mch+Ruk3JG+x5YJJhLqLpqzDnR9G/cwv/ApPw8dkK9nsfwpW/x872P+eM5WzeFxRUUzlxEcWEZzBmJrecd3L8XwSvXsXyujLfPfOR6i7GgM4ed8OtDAemggkz8NZLjWwZeIf4E/m0U2DCVziT881Z58q24TS4oYIM4BV6uuLtgvJ39S0C+p+DdiyounE7bvL/asXwq5e0uOHYqxPfXWXx6FeDHmwBHe+29L03k2yHC6ZxdJeXnYh7iN9MM/p+Mvt0nAAAAAElFTkSuQmCC'
);




function find(img) {
	if (!img) img = a1lib.bindfullrs();
	if (!img) return null;

	var VoragoImg = a1lib.findsubimg(img, zero_hp.img);
	if (VoragoImg.length != 0) {
		return true;
	}
	
	var ScopImg = a1lib.findsubimg(img, zero_scop_hp.img);
	if (ScopImg.length != 0) {
		return true;
	}
	return false;
} 
function getColor(value) {
	var hue = (value * 1.2).toString(10);
	return "hsl(" + hue + ",75%,50%)";
}
function sanitisePercentage(i){
    return Math.min(100,Math.max(0,i));   
}
var running = false;

var beamTimer = new _timer(function(time) {
	var secs_left = (Math.floor(time / 600) * 0.6 ).toFixed(1);
	$("#beam_timer").html(secs_left + "s");
	
	var percent = sanitisePercentage(secs_left / 246 * 1000);
	
	$("#beamBar").width(percent + "%");
	$("#beamBar").css('background-color', getColor(percent));
	if (time <= 0) {
		beamTimer.stop();
		running = false;
	}
});


//01:38:24 0 hp
//01:38:48 tag
//40 ticks
function start() {
	if (window.alt1) {
		setInterval(function(time) {
			if (!running && find()) {
				running = true;
				beamTimer.reset(246);
				beamTimer.start(10);
			}
		}, 100);
	} else {
		$("#telosMenu").html('<a href="alt1://addapp/https://michael-lennheden.github.io/VoragoTag/appconfig.json">Click here to add this app</a>'); 
	}
}