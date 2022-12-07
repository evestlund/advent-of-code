export function a(input) {
  return Array.from(chunk_every(input, 4))
    .findIndex((x) => {
      if (new Set(x).size === 4) return true;
      return false
    }) + 3;
}

export function b(input) {
  return Array.from(chunk_every(input, 14))
    .findIndex((x) => {
      if (new Set(x).size === 14) return true;
      return false
    }) + 13;
}

function* chunk_every(input = '', size) {
  for (let i = size - 1; i < input.length; i += 1) {
    yield input.slice(i - size, i);
  }
}
