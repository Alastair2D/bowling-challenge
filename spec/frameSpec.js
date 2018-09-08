describe("Frame", function() {

  beforeEach(function() {
    frame = new Frame()
    roll = new Roll () 
    roll2 = new Roll ()
    roll3 = new Roll ()
  })

  describe('#new', function () {
    it('defaults with an empty pinsDownArray', function() {
      expect(frame.pinsDownArray).toEqual([])
    })
    it('defaults as inPlay', function() {
      expect(frame.inPlay).toBe(true)
    })
  })

  describe('#isComplete', function () {
    it('checks if a frame is complete', function() {
      frame.add(roll) 
      frame.add(roll2)
      expect(frame.isComplete()).toBe(true)
    })
  })

  describe('#add', function() {
    // it('throws an error if pinsDownArray is full / frame is complete', function() {
    //   frame.add(roll)
    //   frame.add(roll2)
    //   expect(function () { frame.add(roll3) }).toThrowError('Error')
    // }) 
    it('adds pinsDown to pinsDownArray', function () {
      frame.add(roll)
      expect(frame.pinsDownArray).toEqual([0])
    })
  })



});
