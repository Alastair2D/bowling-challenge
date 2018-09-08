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
