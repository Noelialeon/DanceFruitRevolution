//inicia el juego y lo coloca en el html
var canvas;
var ctx;
var game;

$(document).ready(function () {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');
		$('.start').click(function(){
			$('#shake-glass').css('display', 'block');;			
			$('canvas').css('display', 'block');
			$('#intro').css('display', 'none');
			startGame();
	});

	//fin al terminar la canción
	$('#song').on('ended', function() {
		$('canvas').toggle();
		endGame();
		$('#end').toggle();
	});
});

function startGame(){
	game = new Game(ctx);
	game.start();
};

function endGame(){
	game.stop();
};