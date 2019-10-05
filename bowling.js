// array of objects (arrays are objects)
// sample
// [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]]
// sample
// [[1, 2], [3, 4], [5, 5], [6, 4], [7, 3], [8, 2], [9, 1], [8, 2], [7, 3], [7, 2]]
// sample
// [[1, 2], [3, 4], [5, 5], [6, 4], [7, 3], [8, 2], [9, 1], [8, 2], [7, 3], [8, 2, 10]]
// sample
// [[1, 2], [3, 4], [5, 5], [6, 4], [7, 3], [8, 2], [9, 1], [8, 2], [7, 3], [10, 9, 1]]
// sample
// [[1, 2], [3, 4], [5, 5], [6, 4], [7, 3], [8, 2], [9, 1], [8, 2], [10], [10, 9, 1]]

// rules
// 0) assume the inputs are always correct
// 1) If a frame adds up to less than 10, add the sum to the score
// 2) If a frame adds up to 10 with two balls, add the sum plus the next ball to the score
// 3) If a frame adds up to 10 with one ball, add the sum plus the next two balls to the score
// 4) If 10th frame adds up to 10 or more, add a bonus ball to the frame

function scoring(card) {
  let score = 0;

  // tenth frame
  if (card[9][0] + card[9][1] >= 10) {
    score = score + card[9][0] + card[9][1] + card[9][2];
  }
  // strike
  else if (card[i][0] === 10) {
    if (card[i + 1][1]) {
      score = score + 10 + card[i + 1][0] + card[i + 1][1];
    } else {
      score = score + 10 + card[i + 1][0] + card[i + 2][0];
    }
  }
  // spare
  else if (card[i][0] + card[i][1] === 10) {
    score = score + 10 + card[i + 1][0];
  }
  // open frame
  else if (card[i][0] + card[i][1] < 10) {
    score = score + card[i][0] + card[i][1];
  }
  return score;
}

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
scoring(allGutters);
// score should be 0

let terribleGame = [
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
scoring(terribleGame);
// score should be 64

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
scoring(prettyGoodGame);
// score should be 156

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
scoring(greatGame);
// score should be 215

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
scoring(awesomeGame);
// score should be 268

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
scoring(perfectGame);
// score should be 300
