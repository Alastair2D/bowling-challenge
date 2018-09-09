function Roll() {
  this.pinsHit = 0
}

  Roll.prototype.inputPinsHit = function (number) {
    if (number > 10) {
      throw new Error('Error') 
    } else if (number < 0) {
      throw new Error('Error')
    } else {
    this.pinsHit += number 
    }
  }

  // Roll.prototype.defineRoll = function () {
  // }

//   f1 = new Frame
//   r1 = new Roll
//   r2 = new Roll
//   r1.inputPins(1)
//   r2.inputPins(2)
//   f1.add(r1)
//   f1.add(r2)
//   f1.rollArray 
//   f1.isComplete()

// r1 = new Roll
// r2 = new Roll
// r1.inputPins(3)
// r2.inputPins(4)
// f3 = new FrameV3(r1, r2)
// f3.add(r1, r2)

