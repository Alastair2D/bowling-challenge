describe("Frame", function() {
  var roll
  var frame

  beforeEach(function() {
    frame = new Frame();
    roll = new Roll (); 
  })

  describe('#new', function () {
    it('defaults with an empty pinsDownArray', function () {
      expect(frame.pinsDownArray).toEqual([])
    })
  })

  describe('#addRoll', function() {
    it('adds pinsDown to pinsDownArray', function () {
      frame.addPinsDown(roll)
      expect(frame.pinsDownArray).toEqual([0])
    })

  })



});