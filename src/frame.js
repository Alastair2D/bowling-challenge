function Frame() {
  this.pinsDownArray = []
  this.inPlay = true
}

  Frame.prototype.isComplete = function () {
    if (this.pinsDownArray.length >= 2) {
      return true 
    } else {
      return false 
    }
  } 

  Frame.prototype.add = function (roll) {
    // if (this.isComplete) {
    //   throw new Error('Error')
    // } else {
      this.pinsDownArray.push(roll.pinsDown)
    // }
  }
