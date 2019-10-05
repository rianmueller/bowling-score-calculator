exports.scoring = card => {
  let score = 0;

  for (let i = 0; i < card.length; i++) {
    // tenth frame
    if (i === 9 && card[9][0] + card[9][1] >= 10) {
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
  }

  return score;
};
