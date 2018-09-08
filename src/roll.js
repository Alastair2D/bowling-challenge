function Roll() {
  this.pins = 0
}

  Roll.prototype.inputPins = function (number) {
    if (number > 10) {
      throw new Error('Error') 
    } else if (number < 0) {
      throw new Error('Error')
    } else {
    this.pins += number 
    }
  }

  // Roll.prototype.defineRoll = function () {
  // }

  // f1 = new Frame
  // r1 = new Roll
  // r2 = new Roll
  // r1.inputPins(1)
  // r2.inputPins(2)
  // f1.add(r1)
  // f1.add(r2)
  // f1.rollArray 
  // f1.isComplete()

