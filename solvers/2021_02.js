export function a(navigations) {
  let horizontalPos = 0;
  let depth = 0;

  for (let i = 0; i < navigations.length; i++) {
    const [ direction, steps ] = navigations[i].split(' ');
    if (direction === 'forward') horizontalPos += parseInt(steps, 10);
    if (direction === 'down') depth += parseInt(steps, 10);
    if (direction === 'up') depth -= parseInt(steps, 10);
  }

  return { horizontalPos, depth };
}

export function b(navigations) {
  let horizontalPos = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < navigations.length; i++) {
    const [ direction, steps ] = navigations[i].split(' ');
    if (direction === 'forward') {
      horizontalPos += parseInt(steps, 10);
      depth += aim * parseInt(steps, 10);
    }
    if (direction === 'down') aim += parseInt(steps, 10);
    if (direction === 'up') aim -= parseInt(steps, 10);
  }

  return { horizontalPos, depth };
}
