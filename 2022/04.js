export function a(input) {
  return input
    .filter(x => {
      const { first, second } = createAssignements(x)

      return contains(first, second) || contains(second, first);
    }).length
}

export function b(input) {
  return input
    .filter(x => {
      const { first, second } = createAssignements(x)

      return some(first, second)
    }).length
}

function createAssignements(input) {
  const [p1, p2] = input.split(',');

  const [p1start, p1stop] = p1.split("-");
  const [p2start, p2stop] = p2.split("-");
  
  const first = [...Array(p1stop - p1start + 1).keys()].map((_, index) => parseInt(p1start, 10) + index)
  const second = [...Array(p2stop - p2start + 1).keys()].map((_, index) => parseInt(p2start, 10) + index)

  return { first, second };
}

function contains(array1, array2) {
  return array1.every(value => array2.includes(value));
}

function some(array1, array2) {
  return array1.some(value => array2.includes(value));
}