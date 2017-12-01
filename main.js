//inicia el juego y lo coloca en el html
var canvas;
var ctx;
var arrowUp;
var arrowRight;
var character;
var detectionBody;
// var detectionBodyUp;
var detectionBodyDown;
var myArrows = [];
var myGameArea = {
		
	start: function () {
		this.interval = setInterval(updateGameArea, 20);
		this.frameNo = 0;    
	},
	clear: function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
};

function startGame() {
	detectionBody = new DetectionBody(50, 80, 'blue', 80, 50);
	// detectionBodyUp = new DetectionBody(50, 30, 'grey', 50, 20);
	detectionBodyDown = new DetectionBody(detectionBody.width, detectionBody.height, 'grey', detectionBody.x, (detectionBody.y + detectionBody.height));
	// arrowRight = new Arrow('right', 20, 20, 'green', 50, 400);
	// arrowUp = new Arrow('up', 20, 20, 'green', 100, 400);	
	myGameArea.start();

};

function updateGameArea() {
	var y;
	myGameArea.clear();
	myGameArea.frameNo += 1;
	if (myGameArea.frameNo == 1 || everyinterval(50)) {
		y = canvas.height - 100;
			myArrows.push(new Arrow('up', 20, 20, 'green', 100, 400));
	}
	for (i = 0; i < myArrows.length; i += 1) {
			myArrows[i].newPos();
			myArrows[i].update();
	};
	
	detectionBody.update();
	detectionBodyDown.update();
};

function everyinterval(n) {
	if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
	return false;
	
}


	//limpia
	// myGameArea.clear();

	// //pinta
	// arrowUp.newPos();
	// arrowUp.update();
	// arrowRight.newPos();
	// arrowRight.update();
	
// };




$(document).ready(function () {
	 
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');

	startGame();

});
		
