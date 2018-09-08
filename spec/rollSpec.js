describe("Roll", function() {
  var roll

  beforeEach(function() {
    roll = new Roll()
  })

  describe('#new', function() {
    it('defaults with an empty score array', function () {
      expect(roll.score).toEqual([])
    })
  })



  });