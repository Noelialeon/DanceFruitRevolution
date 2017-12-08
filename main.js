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
		new Character(ctx, 80,'#6efe42'),
		new ScoreBar(ctx)
	);
	game.start();
	
};