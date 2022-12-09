export function a(moves) {
  const headHistory = moveHead(moves);

  const tailMoves = headHistory.reduce((tails, head) => {
    const prevTail = tails[tails.length - 1] || head;

    const newTail = moveTail(prevTail, head);

    tails.push(newTail)
    return tails;
  }, []);

  return new Set(tailMoves.map(([x, y]) => `${x}-${y}`)).size;
}

export function b(moves) {
  const headHistory = moveHead(moves);

  const tailMoves = headHistory.reduce((tails, head) => {
    const prevTail = tails[tails.length - 1] || Array.from({ length: 9 }, () => [0, 0]);

    const newTail = prevTail.reduce((acc, prev) => {
      const prevs = acc[acc.length - 1] || head

      const movedTail = moveTail(prev, prevs);

      acc.push(movedTail);
      return acc;
    }, []);

    tails.push(newTail)
    return tails;
  }, []);

  return new Set(tailMoves.map((x) => x[x.length - 1]).map(([x, y]) => `${x}-${y}`)).size;
}

function moveTail([tx, ty], [hx, hy]) {
  let x = tx;
  let y = ty;

  const xDiff = hx - tx;
  const yDiff = hy - ty;

  if (xDiff === 2 || Math.abs(yDiff) === 2 && xDiff === 1) x = tx + 1;
  if (xDiff === -2 || Math.abs(yDiff) === 2 && xDiff === -1) x = tx - 1;

  if (yDiff === 2 || Math.abs(xDiff) === 2 && yDiff === 1) y = ty + 1;
  if (yDiff === -2 || Math.abs(xDiff) === 2 && yDiff === -1) y = ty - 1;

  return [x, y]
}

function moveHead(moves) {
  const headPosition = { x: 0, y: 0 };
  const headHistory = [[0, 0]];

  for (let i = 0; i < moves.length; i++) {
    const [direction, steps] = moves[i].split(" ");

    const stepsInt = parseInt(steps, 10);

    for (let j = 1; j <= stepsInt; j++) {
      if (direction === 'U') {
        headPosition.y += 1;
      } else if (direction === 'R') {
        headPosition.x += 1;
      } else if (direction === 'D') {
        headPosition.y -= 1;
      } else if (direction === 'L') {
        headPosition.x -= 1;
      }
      headHistory.push([headPosition.x, headPosition.y]);
    }
  }

  return headHistory;
}