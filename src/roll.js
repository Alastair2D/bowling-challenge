function Roll() {
  this.pinsDown = 0
}

  Roll.prototype.inputPinsDown = function (number) {
    if (number > 10) {
      throw new Error('Error') 
    } else if (number < 0) {
      throw new Error('Error')
    } else {
    this.pinsDown += number 
    }
  }

  // Roll.prototype.defineRoll = function () {
  // }

  // f1 = new Frame
  // r1 = new Roll
  // r2 = new Roll
  // r1.inputPinsDown(1)
  // r2.inputPinsDown(2)
  // f1.add(r1)
  // f1.add(r2)
  // f1.pinsDownArray 
  // f1.isComplete()

