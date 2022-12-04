export function a(binaryNumbers) {
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

export function b() {
}
