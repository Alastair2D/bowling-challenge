function Grame() {
  this.inPlay = true 
  this.rollsArray = []
  this.totalPins = 0
}

Grame.prototype.inputPins = function (roll1, roll2) {
  if ((roll1 > 10) || (roll2 > 10)) {
    throw new Error('Error')
  } else if ((roll1 < 0) || (roll2 < 0)) {
    throw new Error('Error')
  } else {
    this.totalPins += roll1
    this.totalPins += roll2 
  }
}

