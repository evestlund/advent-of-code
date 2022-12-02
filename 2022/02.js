const winsOver = {
  "A": "Y",
  "B": "Z",
  "C": "X"
}

const draw = {
  "A": "X",
  "B": "Y",
  "C": "Z"
}

const losesAgainst = {
  "A": "Z",
  "B": "X",
  "C": "Y"
}

export function a(input) {
  let score = 0;

  for (let i = 0; i < input.length; i++) {
    const [opponent, response] = input[i].split(" ");
    score += calcScore(opponent, response)
  }

  return score;
}

export function b(input) {
  let score = 0;

  for (let i = 0; i < input.length; i++) {
    const [opponent, expectedResult] = input[i].split(" ");

    let response;

    if (expectedResult === "X") response = losesAgainst[opponent];
    if (expectedResult === "Y") response = draw[opponent];
    if (expectedResult === "Z") response = winsOver[opponent];

    score += calcScore(opponent, response)
  }

  return score;
}

function calcScore(opponent, response) {
  let score = 0;

  if (winsOver[opponent] === response) score += 6;
  else if (draw[opponent] === response) score += 3;

  if (response === "X") score += 1
  if (response === "Y") score += 2
  if (response === "Z") score += 3

  return score;
}