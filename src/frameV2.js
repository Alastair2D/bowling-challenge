function FrameV2() {
  this.inPlay = true 
  this.rollsArray = []
  this.totalPins = 0
}

FrameV2.prototype.inputRolls = function (roll1, roll2) {
  if ((roll1.pins > 10) || (roll2.pins > 10)) {
    throw new Error('Error')
  } else if ((roll1.pins < 0) || (roll2.pins < 0)) {
    throw new Error('Error')
  } else {
    this.totalPins += roll1.pins
    this.totalPins += roll2.pins
    this.rollsArray.push(roll1.pins, roll2.pins) 
  }
}

