describe("Roll", function() {
  var roll

  beforeEach(function() {
    roll = new Roll()
  })

  describe('#new', function() {
    it('defaults with pinsDown = 0', function() {
      expect(roll.pinsDown).toEqual(0)
    })
  })

  describe('#inputPinsDown', function() {
    it('user input adds number to this.pinsDown', function() {
      roll.inputPinsDown(7)
      expect(roll.pinsDown).toEqual(7)
    })
  })



  });
