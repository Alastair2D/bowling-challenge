function FrameV3 (roll1, roll2) {
  this.inPlay = true
  this.ph1 = roll1.pins 
  this.ph2 = roll2.pins
  this.pinsArray = [this.ph1, this.ph2]
  this.totalPins = (this.ph1 + this.ph2)
}

FrameV3.prototype.isComplete = function () {
  if (this.rollsArray.length >= 2) {
    this.inPlay = false
    return true
  } else {
    return false
  }
}

FrameV3.prototype.add = function (roll1, roll2) {
  if (this.isComplete()) {
    throw new Error('Error')
  }
  else {
    this.totalPins += roll1.pins
    this.totalPins += roll2.pins
    this.rollsArray.push(roll1.pins, roll2.pins)
  }
}