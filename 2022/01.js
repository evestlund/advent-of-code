export function a(input) {
  return getSums(input)
    .sort((a, b) => b - a)
    .slice(0, 1);
}

export function b(input) {
  return getSums(input)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, value) => acc + value, 0);
}

function getSums(input) {
  const sums = [];
  let currentSum = 0;

  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === '') {
      sums.push(currentSum);
      currentSum = 0;
    } else {
      currentSum += input[i];
    }
  }
  sums.push(currentSum);

  return sums
}