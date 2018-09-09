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

// FrameV2.prototype.add = function (roll1, roll2) {
//   if (this.isComplete()) {
//     throw new Error('Error')
//   }
//   else {
//     this.totalPinsHit += roll1.pins
//     this.totalPinsHit += roll2.pins
//     this.pinsHitArray.push(roll1.pinsHit, roll2.pinsHit)
//   }
// }