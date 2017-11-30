//inicia el juego y lo coloca en el html
var arrow;
var canvas;
var ctx;
var character;
var detectionBody;

var myGameArea = {
		
	start: function () {
		this.interval = setInterval(updateGameArea, 20);
	},
	clear: function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
};

function updateGameArea() {
	//limpia
	myGameArea.clear();
	
	//pinta
	arrow.newPos();
	
	arrow.update();
	detectionBody.update();
};

function startGame() {
	arrow = new Arrow(20, 20, 'green', 50, 400);
	detectionBody = new DetectionBody(50, 30, 50, 50);
	myGameArea.start();

};


$(document).ready(function () {
	 
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');

	startGame();

});
		
