const scoring = require("./bowling.js");
const chai = require("chai");
const should = chai.should();

describe("Scoring of bowling games", function() {
  it("Should score 0 for allGutters", function() {
    let allGutters = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ];
    let score = bowling.scoring(allGutters);
    score.should.equal(0);
  });

  it("Should score 64 for weakGame", function() {
    let weakGame = [
      [5, 2],
      [6, 1],
      [0, 5],
      [7, 1],
      [2, 5],
      [1, 3],
      [3, 2],
      [8, 0],
      [0, 7],
      [4, 2]
    ];
    let score = bowling.scoring(weakGame);
    score.should.equal(64);
  });

  it("Should score 156 for prettyGoodGame", function() {
    let prettyGoodGame = [
      [9, 1],
      [8, 1],
      [6, 4],
      [7, 2],
      [10],
      [10],
      [6, 3],
      [5, 5],
      [10],
      [9, 1, 8]
    ];
    let score = bowling.scoring(prettyGoodGame);
    score.should.equal(156);
  });

  it("Should score 215 for greatGame", function() {
    let greatGame = [
      [10],
      [8, 2],
      [10],
      [10],
      [10],
      [9, 1],
      [7, 3],
      [9, 1],
      [9, 1],
      [10, 9, 1]
    ];
    let score = bowling.scoring(greatGame);
    score.should.equal(215);
  });

  it("Should score 268 for awesomeGame", function() {
    let awesomeGame = [
      [9, 1],
      [10],
      [10],
      [10],
      [10],
      [8, 2],
      [10],
      [10],
      [10],
      [10, 10, 10]
    ];
    let score = bowling.scoring(awesomeGame);
    score.should.equal(268);
  });

  it("Should score 300 for perfectGame", function() {
    let perfectGame = [
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10, 10, 10]
    ];
    let score = bowling.scoring(perfectGame);
    score.should.equal(300);
  });
});
