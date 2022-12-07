export function a(binaryNumbers) {
  const positions = getsEm(binaryNumbers);

  const gammaBinary = positions
    .reduce((acc, [zero, one]) => {
      return zero > one ? acc + '0' : acc + '1';
    }, '');

  const gammaRate = parseInt(gammaBinary, 2);


  const epsilonBinary = positions
    .reduce((acc, [zero, one]) => {
      return zero < one ? acc + '0' : acc + '1';
    }, '');

  const epsilonRate = parseInt(epsilonBinary, 2);

  return gammaRate * epsilonRate;
}

export function b(input) {
  const oxygenGeneratorRating = [...Array(input[0].length).keys()]
    .reduce((prev, _, index) => {
      const positions = getsEm(prev);
      const [ zero, one ] = positions[index];

      return prev.filter((number) => {
        return one > zero || zero === one ? number[index] === '1' : number[index] === '0';
      })
    }, input)[0]

  const co2ScrubberRating = [...Array(input[0].length).keys()]
    .reduce((prev, _, index) => {
      if (prev.length === 1) return prev;
    
      const positions = getsEm(prev);
      const [ zero, one ] = positions[index];

      return prev.filter((number) => {
        return one > zero || zero === one ? number[index] === '0' : number[index] === '1';
      })
    }, input)[0]

  return parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);
}

function getsEm(binaryNumbers) {
  let positions = [];

  for (let i = 0; i < binaryNumbers.length; i++) {
    const split = binaryNumbers[i].split('');

    for (let j = 0; j < split.length; j++) {
      const number = parseInt(split[j]);

      if (!positions[j]) positions.push([0, 0]);

      if (number === 0) positions[j][0] += 1;
      if (number === 1) positions[j][1] += 1;
    }
  }

  return positions;
}
