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
    it('throws error if user enters number > 10', function () {
      expect(function() { roll.inputPinsDown(20) }).toThrowError('Error')
    })
    it('throws error if user enters number < 10', function () {
      expect(function () { roll.inputPinsDown(-2) }).toThrowError('Error')
    })
    it('adds number to @pinsDown', function() {
      roll.inputPinsDown(7)
      expect(roll.pinsDown).toEqual(7)
    })
  })



  });
