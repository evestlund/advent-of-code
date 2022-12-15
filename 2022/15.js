export function a(input, row) {
  const intervals = [];

  for (let i = 0; i < input.length; i++) {
    const [[x1, y1], [x2, y2]] = input[i];
    const manhattanDistance = getManhattanDistance(x1, y1, x2, y2);

    const diffInY = Math.abs(row - y1)

    const smallestX = x1 - (manhattanDistance - diffInY);
    const highestX = x1 + (manhattanDistance - diffInY) + 1;

    if (smallestX > highestX) continue;

    intervals.push([smallestX, highestX]);
  }

  const newIntervals = mergeIntervals(intervals);

  const size = newIntervals[0][1] - newIntervals[0][0]

  return size - 1;
}

function getManhattanDistance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

export function b(input, max) {
  for (let currentY = 0; currentY <= max; currentY++) {
    const intervals = [];

    for (let i = 0; i < input.length; i++) {
      const [[x1, y1], [x2, y2]] = input[i];
      const manhattanDistance = getManhattanDistance(x1, y1, x2, y2);
  
      const diffInY = Math.abs(currentY - y1)
  
      const smallestX = Math.min(max, Math.max(0, x1 - (manhattanDistance - diffInY)));
      const highestX = Math.min(max, Math.max(0, x1 + (manhattanDistance - diffInY) + 1));

      if (smallestX > highestX) continue;

      intervals.push([smallestX, highestX]);
    }

    const newInterval = mergeIntervals(intervals);

    if (newInterval.length > 1) {
      const foundYou = newInterval[0][1];
      return (foundYou * 4000000) + currentY;
    }
  }
}

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  
  let result = [[intervals[0][0], intervals[0][1]]]

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] <= result[result.length - 1][1]) {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
}