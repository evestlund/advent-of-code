export function a(input) {
  let result = 0;

  for (let i = 0; i < input.length; i += 1) {
    for (let j = 0; j < input.length; j += 1) {
      if (j === i) continue;
      if ((input[i] + input[j]) === 2020) return input[i] * input[j];
    }
  }
}

export function b(input) {
  for (let i = 0; i < input.length; i += 1) {
    for (let j = 0; j < input.length; j += 1) {
      if (j === i) continue;
      for (let k = 0; k < input.length; k += 1) {
        if (k === i || k === j) continue;
        if ((input[i] + input[j] + input[k]) === 2020) return input[i] * input[j] * input[k];
      }
    }
  }
}
