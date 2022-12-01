export function a(navigations) {
  let horizontalPos = 0;
  let depth = 0;

  for (let i = 0; i < navigations.length; i++) {
    const [ direction, steps ] = navigations[i];
    if (direction === 'forward') horizontalPos += steps;
    if (direction === 'down') depth += steps;
    if (direction === 'up') depth -= steps;
  }

  return { horizontalPos, depth };
}

export function b(navigations) {
  let horizontalPos = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < navigations.length; i++) {
    const [ direction, steps ] = navigations[i];
    if (direction === 'forward') {
      horizontalPos += steps;
      depth += aim * steps;
    }
    if (direction === 'down') aim += steps;
    if (direction === 'up') aim -= steps;
  }

  return { horizontalPos, depth };
}
