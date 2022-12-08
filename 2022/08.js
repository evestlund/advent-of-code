export function a(horizontalTrees) {
  const verticalTrees = transpose(horizontalTrees);

  // console.log(horizontalTrees);

  // first and last columns are always visible
  let sum = verticalTrees.length * 2;

  for (let x = 1; x < verticalTrees.length - 1; x++) {

    const column = verticalTrees[x];

    // first and last trees in column/row are always visible
    sum += 2;
    
    for (let y = 1; y < column.length - 1; y++) {
      const currentTreeHeight = column[y];
      // console.log('x:', x, ', y:', y, currentTreeHeight);

      const row = horizontalTrees[y];
      
      const treesAbove = column.slice(0, y);
      const treesRight = row.slice(x + 1);
      const treesBelow = column.slice(y + 1);
      const treesLeft = row.slice(0, x)
      // console.log('column:', column, treesAbove, treesBelow);
      // console.log('row:', row, treesLeft, treesRight);

      const visible = 
        treesAbove.every((someTree) => someTree < currentTreeHeight)
        || treesRight.every((someTree) => someTree < currentTreeHeight)
        || treesBelow.every((someTree) => someTree < currentTreeHeight)
        || treesLeft.every((someTree) => someTree < currentTreeHeight)

      if (visible) sum += 1;
    }
  }

  return sum;
}

export function b(horizontalTrees) {
  const verticalTrees = transpose(horizontalTrees);

  let highestScenicScore = 0;

  // console.log(horizontalTrees);

  for (let x = 1; x < verticalTrees.length - 1; x++) {

    const column = verticalTrees[x];
    
    for (let y = 1; y < column.length - 1; y++) {
      const currentTreeHeight = column[y];
      // console.log('x:', x, ', y:', y, currentTreeHeight);

      const row = horizontalTrees[y];
      
      const treesAboveInReverse = column.slice(0, y).reverse();
      const treesRight = row.slice(x + 1);
      const treesBelow = column.slice(y + 1);
      const treesLeftInReverse = row.slice(0, x).reverse();

      const sigthAbove = treesAboveInReverse.findIndex((someTree) => someTree >= currentTreeHeight) + 1 || treesAboveInReverse.length;
      const sightRight = treesRight.findIndex((someTree) => someTree >= currentTreeHeight) + 1 || treesRight.length;
      const sightBelow = treesBelow.findIndex((someTree) => someTree >= currentTreeHeight) + 1 || treesBelow.length;
      const sightLeft = treesLeftInReverse.findIndex((someTree) => someTree >= currentTreeHeight) + 1 || treesLeftInReverse.length;

      // console.log('column:', column, treesAboveInReverse, treesBelow, sigthAbove, sightBelow);
      // console.log('row:', row, treesLeftInReverse, treesRight, sightLeft, sightRight);

      const scenicScore = sigthAbove * sightRight * sightBelow * sightLeft;

      if (scenicScore > highestScenicScore) highestScenicScore = scenicScore;
    }
  }

  return highestScenicScore;
}

function transpose(matrix) {
  return matrix.reduce((prev, next) => next.map((item, i) =>
    (prev[i] || []).concat(next[i])
  ), []);
}
