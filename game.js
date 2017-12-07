function Game(ctx, detectionBody, character, scoreBar){
  this.ctx = ctx;
  this.frameNo = 0; 
  this.allArrows = [];
  this.allArrowDirections = ['right', 'up', 'down', 'left'];
  this.randomArrowDirection = undefined;
  this.detectionBody = detectionBody;
  this.character = character;
  this.scoreBar = new ScoreBar(ctx, this.character);
};
    
Game.prototype.start = function(){
  this._assignControlsToKeys();
  this.gameInterval = setInterval(this._updateGameArea.bind(this), 20);
};

Game.prototype._clear = function (){
  this.ctx.clearRect(0, 0, canvas.width, canvas.height);
};

Game.prototype._stop = function (){
  clearInterval(this.gameInterval);
};

Game.prototype._updateGameArea = function() {
  if (this.character.score <= -5) {
    this._stop();
  };
  this._clear();
  this.frameNo += 1;
   
  //Elimina los arrows que superen la altura de detectionBody
  this._deleteArrow();
  this.arrowsOnDetectionBody();

  //pinta 
  this.character.update();
  this.detectionBody.update();
  this._generateRandomArrow();
  this._paintAllArrows();
  this.scoreBar.hideBar.newWidth();
  this.scoreBar.update();
};
		
Game.prototype._generateRandomArrow = function() {
  if (this.frameNo == 1 || this._everyinterval(30)) {
    this._randomArrow();
    this.allArrows.push(new Arrow(this.ctx, this.randomArrowDirection, this.detectionBody.x, 400, 20, 20));
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
};
			
Game.prototype._deleteArrow = function() {
  this.allArrows.forEach(function(arrow){
    if ((arrow.y + arrow.height) < this.detectionBody.y - 5) {
      var index = this.allArrows.indexOf(arrow);
      this.allArrows.splice(index, 1);
    };
  }.bind(this));
};

Game.prototype._paintAllArrows = function() {
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
        if(this.detectionBody.isOnDetectionBody(this.character, this.allArrows[0], 'left')){
          this.character.move('left')
        };
        break;
      case 38:
        if(this.detectionBody.isOnDetectionBody(this.character, this.allArrows[0], 'up')){
          this.character.move('up')
        };
        break;
      case 40:
        if(this.detectionBody.isOnDetectionBody(this.character, this.allArrows[0], 'down')){
          this.character.move('down')
        };
        break;
      case 37:
        if(this.detectionBody.isOnDetectionBody(this.character, this.allArrows[0], 'right')){
          this.character.move('right')
        };
        break;
    };
  }.bind(this);
};

Game.prototype.arrowsOnDetectionBody = function(){
  for (var i = 0; i < this.allArrows.length; i += 1) {
    if (this.allArrows[i].status === undefined && this.allArrows[i].y >= (this.detectionBody.y - 3) &&
    ((this.allArrows[i].y + this.allArrows[i].height) < (this.detectionBody.y + this.detectionBody.height*2))){
    this.allArrows[i].status = true;
    };
  };
};
