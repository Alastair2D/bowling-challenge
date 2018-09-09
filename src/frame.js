function Frame() {
  this.inPlay = true
  this.rollArray = []
}

  Frame.prototype.isComplete = function () {
    if (this.rollArray.length >= 2) {
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
        this.rollArray.push(roll.pins)
      }
  }

  Frame.prototype.totalPinsDown = function () {
      var pins = frame.rollArray
      var sum = 0
      for (var i = 0; i < pins.length; i++) {
        sum += numbers[i]
      }
  }

  // Frame.prototype.allDown = function () {
  // }

  // Frame.prototype.score = function () {
  // }
