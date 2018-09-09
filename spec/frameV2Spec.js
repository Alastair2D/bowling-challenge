describe("FrameV2", function() {

  beforeEach(function() {
    r1 = new Roll
    r2 = new Roll
    r1.inputPinsHit(7)
    r2.inputPinsHit(2)
    frame = new FrameV2(r1, r2)
  })  


  describe('#new', function () {
    it('defaults as inPlay', function () {
      expect(frame.inPlay).toBe(true)
    })
    it('takes roll1.pinsHit, roll2.pinsHit & sets them to ph1, ph2', function () {
      expect(frame.ph1).toEqual(7)
      expect(frame.ph2).toEqual(2)
    })
    it('takes roll1.pinsHit and roll2.pinsHit & adds them to pinsHitArray', function () {
      expect(frame.pinsHitArray).toEqual([7, 2]) 
    })
    it('takes ph1 and ph2 and adds them to totalPinsHit', function () {
      expect(frame.totalPinsHit).toEqual(9) 
    })
  })



});
