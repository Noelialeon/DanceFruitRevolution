//inicia el juego y lo coloca en el html
var canvas;
var ctx;

var character;
var detectionBody;
var detectionBodyDown;

var allArrows = [];
var allArrowDirections = ['up','right'];
var allArrowX = [50, 100];
var randomArrowDirection;
var randomArrowX;

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
	generateDetectionBody();
	myGameArea.start();
};

function generateDetectionBody() {
	detectionBody = new DetectionBody(25, 40, 'blue', 80, 50);
	detectionBodyDown = new DetectionBody(detectionBody.width, detectionBody.height / 2, 'grey', detectionBody.x, (detectionBody.y + detectionBody.height));
}

function updateGameArea() {

	//limpia
	clearMyGameArea();

	// pinta el bloque de detección
	paintDetectionBodies();

	//genera un arrow random, con dirección equivalente a posición, cada X fps
	generateRandomArrow();

	//Limpiar el arrow[0] cuando pasa una posición Y
	deleteArrow();
	
		//pinta
	paintAllArrows();
};

function deleteArrow() {
	if (allArrows[0].y < 20) {
		allArrows.splice(0, 1);
	};
}

function clearMyGameArea() {
	myGameArea.clear();
	myGameArea.frameNo += 1;
};

function paintDetectionBodies() {
	detectionBody.update();
	detectionBodyDown.update();
};

function generateRandomArrow() {
	if (myGameArea.frameNo == 1 || everyinterval(25)) {
		randomArrow();
		allArrows.push(new Arrow(randomArrowDirection, 20, 20, 'green', randomArrowX, 400));
	};
};

function paintAllArrows() {
	for (var i = 0; i < allArrows.length; i += 1) {
		allArrows[i].newPos();
		allArrows[i].update();
	};
}


//frecuencia con la que aparece cada arrow
function everyinterval(n){
	if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
	return false;
};

//genera un número random para asignar a las variables Direction y X los valores de los array allArrowDirection y allArrowX
function randomArrow(){
	var i = Math.floor(Math.random() * 2);
	randomArrowDirection = allArrowDirections[i];
	randomArrowX = allArrowX[i];
};


$(document).ready(function () {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');
	startGame();
});
		
