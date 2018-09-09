How is this scorecard going to be used?
From the console.

### Plan A
scorecard = New Scorecard with 10 frames
Presents user with:

F1:R1. Enter number of pins hit in Roll 1
Add F1:R1 pinsHit to Frame's totalPinsHit  
Add F1:R1 pinsHit to Frame's pinsHitArray

If F1:R1.pinsHit = 10, define F1 as a strike
If F1:R1.pinsHit < 10, present user with

F1:R2.  Enter a number of pins hit in Roll 2
Add F1:R2 pinsHit to Frame's totalPinsHit
Add F1:R2.pinsHit to Frame's pinsHitArray



If F1:R2.pinsHit added to  


If not strike and not spare...
Adds total pins hit to frame score

If strike, turn on strikeScoring
If spare, turn on spareScoring

F2:R1.  Enter number of pins hit in Roll 1
If F1 = spare, and F2:R1 not a strike 

If not a strike...


F2:R2.  Enter number of pins hit in Roll 2

If spare, add F2:R1 score
If not a strike and not a spare
