export function a(input) {
  const withoutBlanks = input
    .filter((x) => x !== '');
  
  const pairs = Array.from({ length: withoutBlanks.length / 2 }, (_, i) => {
    const currentPair = i * 2;

    return [
      JSON.parse(withoutBlanks[currentPair]),
      JSON.parse(withoutBlanks[currentPair + 1])
    ]
  })
  
  const checkedIfRightOrder = pairs.map(([left, right]) => {
    return checkOrder(left, right);
  })

  return checkedIfRightOrder.reduce((sum, val, index) => val ? sum + index + 1 : sum, 0);
}

export function b(input) {
  const allPackets = input
    .filter((x) => x !== '')
    .map((x) => JSON.parse(x))
    .concat([[[2]], [[6]]]);

  allPackets.sort((left, right) => {
    const correct = checkOrder(left, right);

    if (correct) return -1;
    if (!correct) return 1;
  });

  return (allPackets.findIndex((x) => JSON.stringify(x) === '[[2]]') + 1) * (allPackets.findIndex((x) => JSON.stringify(x) === '[[6]]') + 1);
}

function checkOrder(left, right) {
  if (Number.isInteger(left) && Number.isInteger(right)) {
    if (left < right) return true;
    else if (left > right) return false;
    if (left === right) return null;
  } else if (Array.isArray(left) && Array.isArray(right)) {
    if (left.length === 0 && right.length !== 0) return true;
    if (left.length !== 0 && right.length === 0) return false;
    if (left.length === 0 && right.length === 0) return null;

    const [ left0, ...leftRest ] = left;
    const [ right0, ...rightRest ] = right;

    const res = checkOrder(left0, right0);
a
    if (res === true) return true;
    if (res === false) return false;

    return checkOrder(leftRest, rightRest);
  } else if (Number.isInteger(left) && Array.isArray(right)) {
    return checkOrder([left], right);
  } else if (Array.isArray(left) && Number.isInteger(right)) {
    return checkOrder(left, [right]);
  }
}
