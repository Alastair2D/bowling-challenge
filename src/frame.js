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
    // totalPins = 0
    return this.rollArray.reduce(function(a,b) {
      return a + b}, 0);
    }

    // this.rollArray.forEach(function (value) {
    //   this.sum += value;
    // }) 
    //   return this.sum
    // }
    


    // this.rollArray.reduce()


  // Frame.prototype.allDown = function () {
  // }

  // Frame.prototype.score = function () {
  // }
