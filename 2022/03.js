const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function a(input) {
  return input
    .map((packed, index) => {
      const firstCompart = packed.slice(0, (packed.length / 2))
      const secondCompart = packed.slice((packed.length / 2))
      
      return firstCompart.split("").find((x) => secondCompart.includes(x));
    })
    .reduce((sum, letter) => sum + alphabet.indexOf(letter[0]) + 1, 0)
}

export function b(input) {
  return [...Array(input.length / 3).keys()]
    .map((_, index) => {
      const mappedIndex = index * 3;

      const first = input[mappedIndex].split("");
      const second = input[mappedIndex + 1].split("");
      const third = input[mappedIndex + 2].split("");

      return intersection(first, intersection(second, third));
    })
    .reduce((sum, letter) => sum + alphabet.indexOf(letter[0]) + 1, 0)
}

function intersection(array1, array2) {
  return array1.filter(value => array2.includes(value));
}