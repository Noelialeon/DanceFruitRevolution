function Game(ctx, detectionBody, character, scoreBar){
  this.ctx = ctx;
  this.frameNo = 0; 
  this.allArrows = [];
  this.allArrowDirections = ['right', 'left', 'up', 'down'];
  this.arrowCounter = 0;
  this.randomArrowDirection = undefined;
  this.detectionBody = detectionBody
  this.character = character;
  this.scoreSystem = 2;
  this.scoreBar = new ScoreBar(ctx, 50, 20, 170, 40, this.character);
  this.song = new Song('audio/main-song.mp3', this);
  this.tempoSong = 38;
  this.bonusCombo = 0;
};
    
Game.prototype.start = function(){
  this._assignControlsToKeys();
  this.gameInterval = setInterval(this._updateGameArea.bind(this), 20);
};

Game.prototype._clear = function (){
  this.ctx.clearRect(0, 0, canvas.width, canvas.height);
};

Game.prototype.stop = function (){
  clearInterval(this.gameInterval);
  this.character.stopCharacter();
};

Game.prototype._updateGameArea = function() {
  this._pointSystem();
  this._clear();
  console.log(this.frameNo);
  this.frameNo += 1;
  this._deleteArrow();
  this._arrowsOnDetectionBody();
  //pinta 
  this.character.printScore();
  this.detectionBody.update();
  this.character.drawImage();
  this._generateRandomArrow();
  this._paintAllArrows();
  this.scoreBar.hideBar.newWidth();
  this.scoreBar.update();
};

Game.prototype._pointSystem = function(){
  // if (this.character.score < -3){
  //   this.stop();
  //   this.song.stop();
  // };
  if(this.bonusCombo > 20){
    this.scoreSystem = 4;
    this.detectionBody.color = 'black';
    setTimeout(function(){
      this.scoreSystem = 2;
      this.detectionBody.color = '#95f8cf';
      this.bonusCombo = 0;
    }.bind(this), 5000);
  }
    if(this.bonusCombo > 20){
    this.scoreSystem = 4;
    this.detectionBody.color = 'black';
    setTimeout(function(){
      this.scoreSystem = 2;
      this.detectionBody.color = '#95f8cf';
      this.bonusCombo = 0;
    }.bind(this), 5000);
  }
};

Game.prototype._deleteArrow = function() {
  this.allArrows.forEach(function(arrow){
    if ((arrow.y + arrow.height) < this.detectionBody.y - 5) {
      var index = this.allArrows.indexOf(arrow);
      this.allArrows.splice(index, 1);
      if(arrow.status === true){
        this.character.score -= this.scoreSystem;
      };
    };
  }.bind(this));
};

Game.prototype._arrowsOnDetectionBody = function(){
  for (var i = 0; i < this.allArrows.length; i += 1) {
    if (this.allArrows[i].status === undefined && this.allArrows[i].y >= (this.detectionBody.y - 3) &&
    ((this.allArrows[i].y + this.allArrows[i].height) < (this.detectionBody.y + this.detectionBody.height*2))){
    this.allArrows[i].status = true;
    };
  };
};

//Tempos de la canción
Game.prototype._generateRandomArrow = function() {
  if (this.frameNo > 7800){
    if (this._arrowsTempoControl(this.tempoSong) || this.frameNo == 1) {
      this._randomArrow(2);
    };
  } else if (this.frameNo > 7300){
    if (this._arrowsTempoControl(this.tempoSong) || this.frameNo == 1) {
      this._randomArrow(4);
      this.allArrows.push(new Arrow(this.ctx, this.randomArrowDirection, this.detectionBody.x, 400, 20, 20));
  };
  } else if (this.frameNo > 4900){
    if (this._arrowsTempoControl(this.tempoSong/2) || this.frameNo == 1) {
      this._randomArrow(4);
      this.allArrows.push(new Arrow(this.ctx, this.randomArrowDirection, this.detectionBody.x, 400, 20, 20));
    };
  } else if(this.frameNo > (this.tempoSong*30)){
    if (this._arrowsTempoControl(this.tempoSong) || this.frameNo == 1) {
      this._randomArrow(4);
      this.allArrows.push(new Arrow(this.ctx, this.randomArrowDirection, this.detectionBody.x, 400, 20, 20));
    };
  } else if (this.frameNo > this.tempoSong){
    if (this._arrowsTempoControl(this.tempoSong) || this.frameNo == 1) {
      this._randomArrow(2);
      this.allArrows.push(new Arrow(this.ctx, this.randomArrowDirection, this.detectionBody.x, 400, 20, 20));
    };
  };  
  this.scoreBar.hideBar.newWidth();
  this.scoreBar.update();
};

//frecuencia con la que aparece cada arrow
Game.prototype._arrowsTempoControl = function(n){
  if ((this.frameNo / n) % 1 == 0) {
    return true;
  };
  return false;
};

//genera un número random para asignar a las variables Direction y X los valores de los array allArrowDirection y allArrowX
Game.prototype._randomArrow = function(n){
  var i = Math.floor(Math.random() * n);
  this.randomArrowDirection = this.allArrowDirections[i];
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
        if(this.isOnDetectionBody('left')){
          // this.character.moveLeft();
        };
        break;
      case 38:
        if(this.isOnDetectionBody('up')){
          // this.character.move('up')
        };
        break;
      case 40:
        if(this.isOnDetectionBody('down')){
          // this.character.move('down')
        };
        break;
      case 37:
        if(this.isOnDetectionBody('right')){
          // this.character.moveRight();
        };
        break;
    };
  }.bind(this);
};

Game.prototype.isOnDetectionBody = function (actualDirection) {
  if (this.allArrows[0].direction === actualDirection && this.allArrows[0].status) {
        console.log("perfect");
        this.addPoints(this.scoreSystem);
        this.bonusCombo++;
        this.allArrows[0].status = false;
        return true;
        if ((this.allArrows[0].y > (detectionBody.y + detectionBody.height)) && ((this.allArrows[0].y + this.allArrows[0].height) < (detectionBody.y + detectionBody.height*1,5))) {
          console.log("almost perfect");
          this.addPoints(this.scoreSystem/2);
          this.bonusCombo = 0;
          this.allArrows[0].status = false;
          return true;
        };
  };
  this.character.score -= this.scoreSystem;
  this.bonusCombo = 0;
  console.log("Miss it");
};

Game.prototype.addPoints = function(bonus){
  for (var i = 0; i < bonus; i++)
    this.character.score++;
};