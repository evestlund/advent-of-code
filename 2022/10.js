export function a(instructions) {
  const cycles = getCycles(instructions);

  return Array.from({ length: Math.floor(cycles.length / 40) }, (_, index) => 20 + index * 40)
    .reduce((sum, interestingSignal) => sum + (cycles[interestingSignal - 1] * interestingSignal), 0)
}

export function b(instructions) {
  const cycles = getCycles(instructions);
  
  return Array.from({ length: Math.floor(cycles.length / 40) }, (_, index) => index * 40)
    .reduce((rows, row) => {
      return rows.concat([
        Array.from({ length: 40 })
          .map((_, index) => {
            const currentCycle = cycles[row + index];
            if (currentCycle - 1 <= index && index <= currentCycle + 1) return '#';
            return '.';
          })
          .join('')
      ]);
    }, [])
}

function getCycles(instructions) {
  return instructions
    .map((value) => value.split(' '))
    .reduce((acc, [instruction, value]) => {
      const prevCycle = acc[acc.length - 1];
      if (instruction === 'noop') return acc.concat([prevCycle]);
      if (instruction === 'addx') return acc.concat([prevCycle, prevCycle + parseInt(value, 10)]);
    }, [1]);
}
