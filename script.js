var zero_hp = {};
ImageData.fromBase64(function(i) {
		zero_hp.img = i
	},
	'iVBORw0KGgoAAAANSUhEUgAAABIAAAAkCAYAAACE7WrnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPcSURBVEhLrZRLaF1FGMd/8805N2lyb2vS3vQ2mkbBVNFNkqJQU1QQBV0UFHcKuhM3Pha+q5sGfJCNRehOceVCRdSdiAqCkVYoJcSgxYqakCLR5OYkPbnnMePinDk59/YmuOgfhnl83/zne4569KFxyzWAGr915NoQjY0eujZEw426NanB933iOAZAtBQKJjUl9Z0hJjWIFuI4RrRgrCVJUpIkxcmM3TZatBSj7ax8kCQpAJ6nizMHY21BaFJT6Lq9lF8mJzGpaSNza1GqcFWUKuQA4nmagcFB3j39HnPzC5z76Twvv/oaorZd0qIRpdrcoSOWAvDmW28ThiG3HBljfGKCyaNHefyJJ/E8TZKkRRKSJO2aCGMtamS4YX//c5EbR0dZXf2HvbUqx+++h5Mn3+D41F3Uqn3FxSRJC9dFS0acuyj1oSGMMSwuLVGr9pOmhsvLywwPDxNubRUklOLnSAsSLcja2ioAjYMHERFEKQ6PjLC8vIwxWSmY1BSZcq6Vg21Sg2xsbPLlF59zanoa3/cZGBjkmWef49NPPkZLR3A7MlWGeJ7mpRdfoFarcmFunq+/+ZbZ2R+ZmZmht6fSZn5RR6UCdVCN+n4LYK2lGWwSRRFKKXp7e6j192GsbYtN574gGjowaHc1WctVlxx836cVRXieRkSprqbS4YKxdjvQ+RzHcVFrIjrLlFMo95RDWaeT3KSGnkol67VCkB+6y67HtGSzK0gnd20Tx3GWNQd36Mx1l+M4virIbQZYm/1Hzh33spvJa8f3/e19HvxygkSprGk9L+vu1GSvuEw4OCspWVKOlbiPzZW+s66nUmkznS6fnufpItg5mS6Evu+3K+ZKvu8XrpQfKJ+Jc4fcJTc7K10C3AXP0zgvfN8vsqcefnCivWiyhgGl8k1H1e8gV1OTY6UKI/8zu+PQQML0038z2oj5Ya6PUx8cIE5yohMPHOveH13wymO/8cdlj+dnmrz/eouzC3s4d/F2RBSyHrRoBi3Wg5D1IMzX2b4ZhDh5sBEycXOTdz7cxK9Umf35Bu6/I2Lh4l80gxZiTQImwRqIE0NiEmJj8jU4eX9PSsU3XPgloF7fz9JKhZGGYuXfNTAJEoQR2dgibEWEYURYrLdyWYQlJEoUaWqwxrAapOzts4StTL5LaNsRXBEqnkVLFtw9FcNGKKSuIDv0d8RGKKxfEQ43sv319ZjlFUG7P6pdfXd8d76fpx7RKBtxYirgq7MVKnlDC0mnegdK8jOfDXLfnZrvzyySGDj9Ucy+ahUAde+xyf9dRwCtKGb+10tsboZct6/GbUduQovwH3gzOjwQcWrnAAAAAElFTkSuQmCC'
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

/*
function loadUI() {
    fetch("index.html")
        .then(res => res.text())
        .then(html => {

            const temp = document.createElement("div");
            temp.innerHTML = html;

            // IMPORTANT: move children out, not raw string injection
            while (temp.firstChild) {
                document.body.appendChild(temp.firstChild);
            }

        });
}*/


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
		$("#telosMenu").html('<a href="alt1://addapp/https://raw.githubusercontent.com/Michael-Lennheden/VoragoTag/main/VoragoTag/appconfig.json">Click here to add this app</a>'); 
	}
}
/*
function start() {
    if (window.alt1) {

        // 1. LOAD UI FIRST
        loadUI();

        // 2. START DETECTION LOOP
        setInterval(function () {
            if (!running && find()) {
                running = true;
                beamTimer.reset(246);
                beamTimer.start(10);
            }
        }, 100);

    } else {
        $("#telosMenu").html(
            '<a href="alt1://addapp/https://raw.githubusercontent.com/Michael-Lennheden/VoragoTag/main/VoragoTag/appconfig.json">Click here to add this app</a>'
        );
    }
}*/
