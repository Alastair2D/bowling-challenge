function Roll() {
  this.pinsDown = 0
}

Roll.prototype.inputPinsDown = function (number) {
  if (number > 10) {
    throw new Error('Error') 
  } else {
  this.pinsDown += number 
  }
}



// if (weather.isStormy() === true) {
//   throw new Error('Weather is too stormy')
// } else {
//   if (this.hangar.length >= this.capacity) {
//     throw new Error('Hangar is at capacity')
//   }
//   this.hangar.push(plane);
//   return "Plane landed"
// }
// };


// if (this.temperature >= this.PS_ON_MAX_TEMP) {
//   return
// } else {


//   if (this.powerSave === true) {
//     if (this.temperature >= this.PS_ON_MAX_TEMP) {
//       return
//     } else {
//       this.temperature++
//     }

  
  // Thermostat.prototype.down = function () {
  //   if (this.temperature > this.MINIMUM_TEMPERATURE) {
  //     this.temperature--
  //   } else {
  //     return
  //   }
  // } 