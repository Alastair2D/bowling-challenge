function Frame() {
  this.pinsDownArray = []
}

  Frame.prototype.addPinsDown = function (roll) {
    this.pinsDownArray.push(roll.pinsDown)
  }



// Airport.prototype.land = function (plane, weather = new Weather()) {

// // Roll.prototype.inputPinsDown = function (number) {
// //   if (number > 10) {
// //     throw new Error('Error')
// //   } else {
// //     this.pinsDown += number
// //   }
// // }


//   Airport.prototype.land = function (plane, weather = new Weather()) {
//     if (weather.isStormy() === true) {
//       throw new Error('Weather is too stormy')
//     } else {
//       if (this.hangar.length >= this.capacity) {
//         throw new Error('Hangar is at capacity')
//       }
//       this.hangar.push(plane);
//       return "Plane landed"
//     }
//   };