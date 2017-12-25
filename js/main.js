//inicia el juego y lo coloca en el html
var canvas;
var ctx;
var game;

$(document).ready(function () {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');
	document.getElementById("intro").focus();
	$( "#intro" ).bind( "keydown", function(event) {
		if(event.which == 32){
			console.log("enterpress");
			$('canvas').css('display', 'block');
			$('#intro').css('display', 'none');
			startGame();
	};
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