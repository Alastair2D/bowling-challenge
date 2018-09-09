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
    it('adds roll to pinsArray', function () {
      frame.add(roll1)
      expect(frame.rollArray).toEqual([0])
    })
    it('adds two rolls to pinsArray', function() {
      roll1.inputPins(4)
      roll2.inputPins(2)
      frame.add(roll1)
      frame.add(roll2)
      expect(frame.rollArray).toEqual([4, 2])
    })
  })

  describe('#totalPinsDown', function () {
    it('sums total pins knocked over in a frame', function () {
      roll1.inputPins(5)
      roll2.inputPins(3)
      frame.add(roll1)
      frame.add(roll2)
      expect(frame.totalPinsDown()).toEqual(8)
    })
  })


});
