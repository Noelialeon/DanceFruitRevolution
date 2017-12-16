//inicia el juego y lo coloca en el html
var canvas;
var ctx;

$(document).ready(function () {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');
		$('.start').click(function(){
		$(canvas).toggleClass('active');
		startGame();
	});
});
	
// function startIntro(){
// 	var intro = new Intro(ctx);
// 	intro.start();
// };

function startGame(){
	var game = new Game(ctx);
	game.start();
};