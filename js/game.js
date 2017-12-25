function Game(ctx){
  this.ctx = ctx;
  this.frameNo = 0; 
  this.allArrows = [];
  this.allArrowDirections = ['left', 'right', 'up', 'down'];
  this.arrowCounter = 0;
  this.randomArrowDirection = undefined;
  this.detectionBodyColor = '#10B3C6';
  this.detectionBody = new DetectionBody(ctx, 160, 70, 200, 40, 10, this.detectionBodyColor);
  this.character = new Character(ctx, 120, 40, 3259, 3006, 6, 12, 100, 'images/SpriteSheet_Mia.png');
  this.scoreBar = new ScoreBar(ctx, 530, 75, 130, 315, this.character);
  this.scoreSystem = 2;
  this.song = new Song('audio/main-song.mp3', this);
  this.tempoSong = 38;
  this.bonusCombo = 0;
  this.pause = false;
};
    
Game.prototype.start = function(){
  this.gameInterval = setInterval(this._updateGameArea.bind(this), 20);
  this.character.updateCharacter();
  this.song.play();
};

Game.prototype._clear = function (){
  this.ctx.clearRect(0, 0, canvas.width, canvas.height);
};


Game.prototype.stop = function (){
  clearInterval(this.gameInterval);
  this.character.stopCharacter();
  this.song.stop();
};

Game.prototype._updateGameArea = function() {
  this._assignControlsToKeys();
  this._clear();
  this.frameNo += 1;
  this._deleteArrow();
  this._arrowsOnDetectionBody();
  this._pointSystem();
  //pinta 
  this.detectionBody.update();
  this.character.drawImage();
  this._generateRandomArrow();
  this._paintAllArrows();
  this.scoreBar.hideBar.newWidth();
  this.scoreBar.update();
  this.scoreBar.printGlass();
};

Game.prototype._pointSystem = function(){
  // if (this.character.score < -3){
  //   document.onkeydown = null;
  //   this.character.die();
  //   this.song.stop();
  //   if (this.character.dead){
  //     this.stop();
  //   };
  // };
  if(this.frameNo < 7300){
    if(this.bonusCombo > 20 && this.frameNo > 4900){
      this.scoreSystem = 6;
      this.detectionBody.color = '#EE9C98';
      setTimeout(function(){
        this.scoreSystem = 2;
        this.detectionBody.color = this.detectionBodyColor;
        this.bonusCombo = 0;
      }.bind(this), 5000);
    } else if(this.bonusCombo > 20){
      this.scoreSystem = 4;
      this.detectionBody.color = '#EE9C98';
      setTimeout(function(){
        this.scoreSystem = 2;
        this.detectionBody.color = this.detectionBodyColor;
        this.bonusCombo = 0;
      }.bind(this), 5000);
    };
  };
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
      this.allArrows.push(new Arrow(this.ctx, this.randomArrowDirection, 400, 20, 20, this.detectionBody));
  };
  } else if (this.frameNo > 4850){
    if (this._arrowsTempoControl(this.tempoSong/2) || this.frameNo == 1) {
      this._randomArrow(4);
      this.allArrows.push(new Arrow(this.ctx, this.randomArrowDirection, 400, 20, 20, this.detectionBody));
    };
  } else if(this.frameNo > (this.tempoSong*25)){
    if (this._arrowsTempoControl(this.tempoSong) || this.frameNo == 1) {
      this._randomArrow(4);
      this.allArrows.push(new Arrow(this.ctx, this.randomArrowDirection, 400, 20, 20, this.detectionBody));
    };
  } else if (this.frameNo > this.tempoSong){
    if (this._arrowsTempoControl(this.tempoSong) || this.frameNo == 1) {
      this._randomArrow(2);
      this.allArrows.push(new Arrow(this.ctx, this.randomArrowDirection, 400, 20, 20, this.detectionBody));
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


var left, right, up, down;
left = false;
right = false;
up = false;
down = false;

// Detección de objetos encapsulada en el método Game
Game.prototype._assignControlsToKeys = function () {
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 32:
          if(this.pause){
            this.pause = false;
            $('#pause').css('display', 'none')
            this.start();
        } else {
            this.pause = true;
            $('#pause').css('display', 'flex');
            this.stop();
        };
      case 37:
      if(!left && this.isOnDetectionBody('left')){
        left = true;
        this.character.moveLeft();
      };
      break;
      case 38:
        if(!up && this.isOnDetectionBody('up')){
          up = true;         
          this.character.moveUp();
        };
        break;
      case 40:
      if(!down && this.isOnDetectionBody('down')){
          down = true;  
          this.character.moveDown();
        };
        break;
        case 39:
          if(!right && this.isOnDetectionBody('right')){
            right = true;
            this.character.moveRight();
        };
        break;
    };
  }.bind(this);
};

//Función que bloquea el botón al pulsarlo
document.onkeyup = function (e){
  switch (e.keyCode) {
    case 37:
      left = false;
       break;
    case 38:
      up = false;
      break;
    case 40:
      down = false;
      break;
    case 39:
      right = false;
      break;
  };
}.bind(this);


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
  this.character.fail();
  console.log("Miss it");
};

Game.prototype.addPoints = function(bonus){
  for (var i = 0; i < bonus; i++)
    this.character.score++;
};