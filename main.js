//inicia el juego y lo coloca en el html
var canvas;
var ctx;
	
$(document).ready(function () {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');
	startGame();
});
		
function startGame(){
	var game = new Game(
		ctx,
		new DetectionBody(ctx, 170, 40, 50, 90, 10, '#95f8cf'),
		new Character(ctx, 80,'#6efe42'),
	);
	game.start();
};