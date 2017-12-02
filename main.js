//inicia el juego y lo coloca en el html
var canvas;
var ctx;
var character;
var detectionBody;
var detectionBodyDown;
var arrowUp = [];
var arrowRight = [];
var allArrows = [arrowUp,arrowRight];

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
	detectionBody = new DetectionBody(25, 80, 'blue', 80, 50);
	detectionBodyDown = new DetectionBody(detectionBody.width, detectionBody.height/2, 'grey', detectionBody.x, (detectionBody.y + detectionBody.height));
	myGameArea.start();
};

function updateGameArea() {
	var y;
	//Limpiar el array Arrow para que no acumule datos
	if (arrowUp.length > 5){
		arrowUp.splice(0, 1)
	};
	//limpia
	myGameArea.clear();
	myGameArea.frameNo += 1;
	if (myGameArea.frameNo == 1 || everyinterval(150)) {
		y = canvas.height - 100;
			arrowUp.push(new Arrow('up', 20, 20, 'green', 100, 400));
			arrowRight.push(new Arrow('right', 20, 20, 'green', 100, 400));
		};
	for (i = 0; i < arrowUp.length; i += 1) {
			arrowUp[i].newPos();
			arrowUp[i].update();
	};	
	detectionBody.update();
	detectionBodyDown.update();
};

function everyinterval(n){
	if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
	return false;
	
}

// function randomArrow(){};


$(document).ready(function () {
	 
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');

	startGame();

});
		
