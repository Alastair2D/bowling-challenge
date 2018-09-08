function Frame() {
  this.inPlay = true
  this.pinsDownArray = []
}

  Frame.prototype.isComplete = function () {
    if (this.pinsDownArray.length >= 2) {
      this.inPlay = false
      return true  
    } else {
      return false 
    }
  } 

  Frame.prototype.add = function (roll) {
      if (this.isComplete()) {
        throw new Error('Error')
      } 
      else {
        this.pinsDownArray.push(roll.pinsDown)
      }
  }

  Frame.prototype.allDown = function () {
  }
