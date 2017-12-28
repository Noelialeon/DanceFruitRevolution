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
			startGame();
		};
	});

	//fin al terminar la canción
	$('#song').on('ended', function() {
		endGame();
		$('canvas').toggle();
		document.onkeydown = null;
		$('#end').css('display', 'inline-grid');
	});
});

function startGame(){
	$('#intro').css('display', 'none');
	$('#end').css('display', 'none');
	$('#end').children().remove();	
	$('canvas').css('display', 'block');
	game = new Game(ctx);
	game.start();
};

function endGame(){
	game.stop();
	if (game.character.score > 500 ){
		$( "#end" ).append( "<p>Woho! " + game.character.score + " points! You got the trophy!");
	}	else if (game.character.score > 300 ){
		$( "#end" ).append( "<p>Not bad babe!<br>You got " + game.character.score + " points but not the trophy!");
	}	else if (game.character.score >= 150 ){
		$( "#end" ).append( "<p>You got " + game.character.score + " points.<br>If twist is not your thing,<br>you can always try crochet!");
	}	else if (game.character.score < 150 ){
		$( "#end" ).append( "<p>You got " + game.character.score + " points.<br>Come on, you didn't even try!");
	};
	$( "#end" ).append("<button type='button' class='btn' onclick=startGame()>Play Again!</button>");
};