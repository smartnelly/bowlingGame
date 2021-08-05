const bowlingGame = require("../bowling");
let game;

beforeEach(() => {
  game = new bowlingGame();
});

function rollMany(rolls, pins) {
  if (pins >= 0) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }
}

it("should return 0 for a game of all zeros", () => {
  rollMany(20, 0);
  expect(game.score).toEqual(0);
});

it("should return 20 for game of all ones", () => {
  rollMany(20, 1);
  expect(game.score).toEqual(20);
});

it("handles a spare with correct bonus", () => {
  game.roll(5);
  game.roll(5);
  game.roll(1);
  rollMany(17, 0);
  expect(game.score).toEqual(12);
});

it("handles a strike with correct bonus", () => {
  game.roll(10);
  game.roll(1);
  game.roll(1);
  rollMany(17, 0);
  expect(game.score).toEqual(14);
});

it("max 300", () => {
  rollMany(1000000, 10);
  expect(game.score).toEqual(300);
});

it("pins should greater or equal to 0", () => {
  rollMany(10, -1);
  expect(game.score).toEqual(NaN);
});
