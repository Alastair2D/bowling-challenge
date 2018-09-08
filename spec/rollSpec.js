describe("Roll", function() {
  var roll

  beforeEach(function() {
    roll = new Roll()
  })

  describe('#new', function() {
    it('defaults with pins_down = 0', function() {
      expect(roll.pinsDown).toEqual(0)
    })
    it('defaults with an empty score array', function() {
      expect(roll.score).toEqual([])
    })
  })

  describe('#inputPinsDown', function() {
    it('user inputs number of pins knocked over', function() {
      roll.inputPinsDown(7)
      expect(roll.pinsDown).toEqual(7)
    })
  })



  });
