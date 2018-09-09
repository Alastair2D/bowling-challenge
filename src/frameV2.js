function FrameV2 (roll1, roll2) {
  this.inPlay = true
  this.ph1 = roll1.pinsHit 
  this.ph2 = roll2.pinsHit
  this.pinsHitArray = [this.ph1, this.ph2]
  this.totalPinsHit = (this.ph1 + this.ph2)
}

FrameV2.prototype.isComplete = function () {
  if (this.rollsArray.length >= 2) {
    this.inPlay = false
    return true
  } else {
    return false
  }
}




  // Frame.prototype.allDown = function () {
  // }

  // Frame.prototype.score = function () {
  // }
