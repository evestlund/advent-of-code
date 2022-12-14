export function a(input) {
  const cave = createCave(input);

  let limiter = 0;

  let prevPos = [500, 0];

  const origCaveSize = Object.entries(cave).length;

  while (limiter < 3000) {
    limiter++;

    const newPos = canSandFlow(prevPos, cave);

    if (newPos[0] !== prevPos[0] || newPos[1] !== prevPos[1]) {
      prevPos = newPos;
    } else {
      cave[`${prevPos[0]},${prevPos[1]}`] = true;
      limiter = 0;
      prevPos = [500, 0];
    }
  }

  const newCaveSize = Object.entries(cave).length;

  return newCaveSize - origCaveSize;
}

export function b(input) {
  const cave = createCave(input);

  const floor = findFloor(cave);

  let prevPos = [500, 0];
  const lastPos = [500, 0];

  const origCaveSize = Object.entries(cave).length;

  while (true) {
    const newPos = canSandFlow(prevPos, cave);

    if (newPos[1] === floor) {
      cave[`${prevPos[0]},${prevPos[1]}`] = true;
      prevPos = [500, 0];
    } else if (newPos[0] !== prevPos[0] || newPos[1] !== prevPos[1]) {
      prevPos = newPos;
    } else if (newPos[0] === lastPos[0] && newPos[1] === lastPos[1]) {
      break;
    } else {
      cave[`${prevPos[0]},${prevPos[1]}`] = true;
      prevPos = [500, 0];
    }
  }

  const newCaveSize = Object.entries(cave).length;

  return newCaveSize - origCaveSize + 1;
}

function findFloor(cave) {
  return Object.entries(cave).reduce((highestSoFar, coordinates) => {
    const [_, y] = JSON.parse(`[${coordinates}]`);
    return highestSoFar > y ? highestSoFar : y;
  }, 0) + 2;
}

function canSandFlow(pos, cave) {
  const [x, y] = pos;

  if (!cave[`${x},${y + 1}`]) return [x, y + 1];
  if (!cave[`${x - 1},${y + 1}`]) return [x - 1, y + 1];
  if (!cave[`${x + 1},${y + 1}`]) return [x + 1, y + 1];

  return pos;
}

function createCave(input) {
  const cave = {};

  for (let i = 0; i < input.length; i++) {
    const rock = input[i];
    const coordinates = rock.split(' -> ');
    
    for (let j = 1; j < coordinates.length; j++) {
      const [x0, y0] = JSON.parse(`[${coordinates[j - 1]}]`);
      const [x1, y1] = JSON.parse(`[${coordinates[j]}]`);

      let wall;
      if (x0 === x1) {
        wall = Array.from({ length: Math.abs(y1 - y0) + 1 }, (_, index) => {
          return index + (y0 > y1 ? y1 : y0);
        }).forEach((val) => {
          cave[`${x0},${val}`] = true;
        })
      }
      if (y0 === y1) {
        wall = Array.from({ length: Math.abs(x1 - x0) + 1 }, (_, index) => {
          return index + (x0 > x1 ? x1 : x0);
        }).forEach((val) => {
          cave[`${val},${y0}`] = true;
        })
      }
    }
  }

  return cave;
}
