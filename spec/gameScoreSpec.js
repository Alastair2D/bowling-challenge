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



});
