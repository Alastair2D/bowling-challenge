describe("Frame", function() {

  beforeEach(function() {
    frame = new Frame()
    roll1 = new Roll () 
    roll2 = new Roll ()
    roll3 = new Roll ()
  })

  describe('#new', function () {
    it('defaults with an empty pinsHitArray', function() {
      expect(frame.pinsHitArray).toEqual([])
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
    it('throws an error if pinsHitArray is full/frame is complete', function() {
      frame.add(roll1)
      frame.add(roll2)
      expect(function () { frame.add(roll3) }).toThrowError('Error')
    }) 
    it('adds roll to rollArray', function () {
      frame.add(roll1)
      expect(frame.pinsHitArray).toEqual([0])
    })
    it('adds two rolls to pinsHitArray', function() {
      roll1.inputPinsHit(4)
      roll2.inputPinsHit(2)
      frame.add(roll1)
      frame.add(roll2)
      expect(frame.pinsHitArray).toEqual([4, 2])
    })
  })

  describe('#totalPinsHit', function () {
    it('sums total pins knocked over in a frame', function () {
      roll1.inputPinsHit(5)
      roll2.inputPinsHit(3)
      frame.add(roll1)
      frame.add(roll2)
      expect(frame.totalPinsHit()).toEqual(8)
    })
  })


});
