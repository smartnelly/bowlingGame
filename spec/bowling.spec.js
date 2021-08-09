const bowlingGame = require("../bowling");
let game;

beforeEach(() => {
  game = new bowlingGame();
});

function rollMany(rolls, pins) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}
// 20 "0"
it("should return 0 for a game of all zeros", () => {
  rollMany(20, 0);
  expect(game.score).toEqual(0);
});

// 20 "1"
it("should return 20 for game of all ones", () => {
  rollMany(20, 1);
  expect(game.score).toEqual(20);
});

// spare 4,6 | 5
it("handles a spare with correct bonus", () => {
  game.roll(4);
  game.roll(6);
  game.roll(5);
  rollMany(17, 0);
  expect(game.score).toEqual(20);
});

// strike 10 | 10 | 5,4
it("handles a strike with correct bonus", () => {
  game.roll(10);
  game.roll(10);
  game.roll(5);
  game.roll(4);
  rollMany(14, 0);
  expect(game.score).toEqual(53);
});

// All strike
it("max 300", () => {
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  console.log(game.rolls);
  expect(game.score).toEqual(300);
});

// Greater or equal to 0
it("pins should greater or equal to 0", () => {
  game.roll(-1);
  expect(game.roll(-1)).toEqual("Error");
});

// Less then or equal to 10
it("pins should less then or equal to 10", () => {
  game.roll(11);
  expect(game.roll(11)).toEqual("Error");
});

// pins should be Integer
it("pins should be Integer", () => {
  game.roll(2.5);
  expect(game.roll(2.5)).toEqual("Error");
});
