describe("Roll", function() {

  beforeEach(function() {
    roll = new Roll()
  })

  describe('#new', function() {
    it('defaults with pinsHit = 0', function() {
      expect(roll.pinsHit).toEqual(0)
    })
  })

  describe('#inputPinsHit', function() {
    it('throws error if user enters number > 10', function () {
      expect(function() { roll.inputPinsHit(11) }).toThrowError('Error')
    })
    it('throws error if user enters number < 10', function () {
      expect(function () { roll.inputPinsHit(-2) }).toThrowError('Error')
    })
    it('adds number to @pinsHit', function() {
      roll.inputPinsHit(7)
      expect(roll.pinsHit).toEqual(7)
    })
  })



  });
