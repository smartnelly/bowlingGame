// Unibet is starting a bowling club. To help with the club, we have engaged you to program a scoring system.

// The features on the system are:

// One player only
// In each frame, the bowler has 2 tries to knock down all the pins
// If in 2 tries, the bowler fails to knock down all the pins, their score is the sum of the number of pins they've knocked down in the 2 attempts

// E.g, if a bowler rolls, 4,4

// Their score is 8.

// If in 2 tries, the bowler knocks down all the pins, it is a spare. The scoring of a spare is the sum of the number of pins knocked down plus the number of pins knocked down in the next bowl.

// E.g, if a bowler rolls, 4,6 | 5, 0

// Their score is 20. So that's (4 + 6 + 5) + (5 + 0)

// If in one try, the bowler knocks down all the pins, it is a strike. The scoring of a strike is the sum of the number of pins knocked down plus the number of pins knocked down in the next two bowls.

// E.g, if a bowler rolls, 10 | 5, 4

// Their score is 28. So that's (10 + 5 + 4) + ( 5 + 4)

// There are 10 pins in a frame
// There are 10 frames in a match

// Don't worry about validating the number of rolls in a frame
// The interface should look like this (in Javascript);

// bowlingGame.roll(noOfPins);
// bowlingGame.score();

// OPTIONAL

// If time permits implement the rules for the last frame (i.e, 10th frame)

// In the last frame, if the bowler bowls a spare, they get another bowl. The score of this frame is the sum of the three bowls.
// In the last frame, if the bowler bowls a strike, they get another 2 bowls. The score of this frame is the sum of the three bowls
// If one has a strike for every roll, their score is 300

class bowlingGame {
  constructor() {
    this.rolls = [];
  }

  //number of pins rolled every
  roll(noOfPins) {
    if (noOfPins >= 0 && noOfPins <= 10 && Number.isInteger(noOfPins)) {
      this.rolls.push(noOfPins);
    } else {
      return "Error";
    }
  }

  get score() {
    let score = 0;
    let rollIndex = 0;

    // for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
    //   if (this.rolls[rollIndex] === 10) {
    //     //if strike
    //     //apply strike bonus
    //     score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    //     rollIndex++; //move onto the next roll
    //     continue; //move onto next iteration in the loop
    //   }

    //   //sum total pins in this frame (2 rolls)
    //   let frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

    //   if (frameScore === 10) {
    //     //if spare
    //     score += 10 + this.rolls[rollIndex + 2]; //apply spare bonus
    //   } else {
    //     score += frameScore;
    //   }

    //   rollIndex += 2; //move onto the first roll of the next frame
    // }

    //for each frame (10 in total)
    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      //Strike
      if (this.isStrike(rollIndex)) {
        //apply strike bonus
        score += this.strikeSum(rollIndex);
        rollIndex++;
        console.log("rollIndex ++ =" + rollIndex);
        continue;
      }
      //Spare
      let frameScore = this.sumFrame(rollIndex);
      if (this.isSpare(frameScore)) {
        //apply spare bonus
        score += this.spareSum(rollIndex);
      } else {
        // not strike or spare
        score += frameScore;
      }

      rollIndex += 2; //move onto the first roll of the next frame
      console.log("rollIndex += 2 = " + rollIndex);
    }
    return score;
  }
  //sum total pins rollws in this frame (2 rolls)
  sumFrame(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }

  spareSum(rollIndex) {
    return 10 + this.rolls[rollIndex + 2];
  }
  strikeSum(rollIndex) {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  isSpare(frameScore) {
    return frameScore === 10;
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }
}
module.exports = bowlingGame;
