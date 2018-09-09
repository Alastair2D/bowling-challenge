function Grame() {
  this.inPlay = true 
  this.rollsArray = []
  this.totalPins = 0
}

Grame.prototype.inputRolls = function (roll1, roll2) {
  if ((roll1.pins > 10) || (roll2.pins > 10)) {
    throw new Error('Error')
  } else if ((roll1.pins < 0) || (roll2.pins < 0)) {
    throw new Error('Error')
  } else {
    this.totalPins += roll1.pins
    this.totalPins += roll2.pins 
  }
}

