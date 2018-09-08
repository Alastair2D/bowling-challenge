function Roll() {
  this.pinsDown = 0
  this.score = []
}

Roll.prototype.inputPinsDown = function (number) {
  this.pinsDown += number 
};

