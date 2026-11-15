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