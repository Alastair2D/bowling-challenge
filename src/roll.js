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


// Roll.prototype.checkStrike = function () {
//   if (roll.pinsHit = 10) 
// }


// Roll.prototype.isSpare = function () {
// }

  // Roll.prototype.defineRoll = function () {
  // }