describe("FrameV2", function() {

  beforeEach(function() {
    r1 = new Roll
    r2 = new Roll
    r1.inputPinsHit(4)
    r2.inputPinsHit(2)
    frame = new FrameV2(r1, r2)
  })  


  describe('#new', function () {
    it('defaults as inPlay', function () {
      expect(frame.inPlay).toBe(true)
    })
    it('takes roll1.pinsHit and roll2.pinsHit & adds them to pinsHitArray', function () {
      // r1 = new Roll 
      // r2 = new Roll 
      // r1.inputPinsHit(4)
      // r2.inputPinsHit(2)
      // frame = new FrameV2(r1, r2)
      expect(frame.pinsHitArray).toEqual([4, 2]) 
    })
  })



});
