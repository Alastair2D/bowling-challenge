function Frame() {
  this.inPlay = true
  // this.roll1 = nil 
  // this.roll2 = nil
  this.pinsHitArray = []
}

  Frame.prototype.isComplete = function () {
    if (this.pinsHitArray.length >= 2) {
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
        this.pinsHitArray.push(roll.pinsHit)
      }
  }

  Frame.prototype.totalPinsHit = function () {
    // totalPins = 0
    return this.pinsHitArray.reduce(function(a,b) {
      return a + b}, 0);
    }


  // Frame.prototype.allDown = function () {
  // }
