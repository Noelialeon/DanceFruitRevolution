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
		// new Character(x, y, ctx, spriteWidth, spriteHeight, rows, cols, frameCount, speed, 'images/MW_spriteSheet-01.png'),
		new Character(80, 200, ctx, 1604, 209, 1, 13, 13, 80, 'images/MW_spriteSheet-01.png'),
		new ScoreBar(ctx)
	);
	game.start();
	
};