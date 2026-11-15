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