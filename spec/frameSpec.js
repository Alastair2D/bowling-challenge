describe("Frame", function() {

  beforeEach(function() {
    frame = new Frame()
    roll1 = new Roll () 
    roll2 = new Roll ()
    roll3 = new Roll ()
  })

  describe('#new', function () {
    it('defaults with an empty pinsDownArray', function() {
      expect(frame.rollArray).toEqual([])
    })
    it('defaults as inPlay', function() {
      expect(frame.inPlay).toBe(true)
    })
  })

  describe('#isComplete', function () {
    it('checks if a frame is complete', function() {
      frame.add(roll1) 
      frame.add(roll2)
      expect(frame.isComplete()).toBe(true)
    })
  })

  describe('#add', function() {
    it('throws an error if pinsArray is full/frame is complete', function() {
      frame.add(roll1)
      frame.add(roll2)
      expect(function () { frame.add(roll3) }).toThrowError('Error')
    }) 
    it('adds pins to pinsArray', function () {
      frame.add(roll1)
      expect(frame.rollArray).toEqual([0])
    })
  })



});
