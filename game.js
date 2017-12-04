function Game(ctx, character, arrowXPosition, detectionBody, /* detectionBodyDown */){
  this.ctx = ctx;
  this.frameNo = 0; 
  this.character = character;
  this.allArrows = [];
  this.allArrowDirections = ['right','up', 'down', 'left'];
  this.allArrowX = arrowXPosition;
  this.randomArrowDirection = undefined;
  this.randomArrowX = undefined;
  this.gameInterval = undefined;
  this.detectionBody = detectionBody;
  // this.detectionBodyDown = new DetectionBody(this.detectionBody.width, this.detectionBody.height / 2, 'grey', this.detectionBody.x, this.detectionBody.y / 2);
  };
  
  function startGame(){
    var game = new Game(
      ctx,
      new Character,
      [50, 100, 150, 200],
      new DetectionBody(170, 80, /* 'red', */ 50, 50),
    );
    game.start();
  };
  
  Game.prototype.start = function(){
    this._assignControlsToKeys();
    this.counter = 0;
    this.gameInterval = setInterval(this.updateGameArea.bind(this), 20);
  };
  
  Game.prototype.clear = function (){
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
   };

Game.prototype.updateGameArea = function() {
    this.clear();
    this.frameNo += 1;

    //pinta el cuerpo de detección
    this._paintDetectionBodies();
    this.generateRandomArrow();

    //comprueba que los arrows nunca superen la altura 20
    this.deleteArrow();
    this.paintAllArrows();
  };

Game.prototype._paintDetectionBodies = function() {
  this.detectionBody.update();
  // this.detectionBodyDown.update();
};
			
Game.prototype.generateRandomArrow = function() {
  if (this.frameNo == 1 || this._everyinterval(30)) {
    this._randomArrow();
    this.allArrows.push(new Arrow(this.randomArrowDirection, 20, 20, /* 'blue', */ this.randomArrowX, 400));
  };
};

//frecuencia con la que aparece cada arrow
Game.prototype._everyinterval = function(n){
  if ((this.frameNo / n) % 1 == 0) {return true;}
  return false;
};

//genera un número random para asignar a las variables Direction y X los valores de los array allArrowDirection y allArrowX
Game.prototype._randomArrow = function(){
  var i = Math.floor(Math.random() * 4);
  this.randomArrowDirection = this.allArrowDirections[i];
  this.randomArrowX = this.allArrowX[i];
};
			
Game.prototype.deleteArrow = function() {
  this.allArrows.forEach(function(arrow){
    if (arrow.y < 20) {
      var index = this.allArrows.indexOf(arrow);
      this.allArrows.splice(index, 1);
    }
  }.bind(this));
 };

Game.prototype.paintAllArrows = function() {
  for (var i = 0; i < this.allArrows.length; i += 1) {
    this.allArrows[i].newPos();
    this.allArrows[i].update();
  };
};


// Detección de objetos encapsulada en el método Game
Game.prototype._assignControlsToKeys = function () {
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 39:
        this.detectionBody.isOnDetectionBody(this.allArrows[0], 'left');
        break;
      case 38:
      this.detectionBody.isOnDetectionBody(this.allArrows[0], 'up');
        break;
      case 40:
        this.detectionBody.isOnDetectionBody(this.allArrows[0], 'down');
        break;
      case 37:
        this.detectionBody.isOnDetectionBody(this.allArrows[0], 'right');
        break;
    };
  console.log(this.detectionBody.counter);
  }.bind(this);
};
