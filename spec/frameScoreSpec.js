describe("Frame Score", function() {

  beforeEach(function(){
    frameScore = new FrameScore ()
    frame = new Frame()
    roll1 = new Roll ()
  })

  describe('#new', function() {
    it('defaults with nothing', function() {
        expect(frameScore.total).toEqual(0)
    })
  })

  describe('#totalPinsDown', function() {
    it('sums total pins knocked over in a frame', function() {
      roll1.inputPinsDown(5)
      roll2.inputPinsDown(3)
      frame.add(roll1)
      frame.add(roll2)
      // frame.pinsDownArray 
      framescore.totalPinsDown
      expect(frameScore.total).toEqual(8)
    })
  })




});
