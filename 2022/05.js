export function a(input) {
  const maxStackHeight = input.findIndex((x) => x[0] === 'm') - 2;

  const numberOfStacks = input[maxStackHeight].match(/\d+/g).length;

  const rawContainers = input
    .slice(0, maxStackHeight)
    .reverse();
  
  const stacks = [...Array(numberOfStacks).keys()]
    .map((_, index) => {
      return rawContainers
        .map(x => {
          return x[(index * 4) + 1];
        })
        .filter(x => x !== ' ');
    });

  const moves = input.slice(maxStackHeight + 2);

  moves
    .forEach((move) => {
      const [_, numberOfRaw, fromRaw, toRaw] = move.match(/move (\d+) from (\d+) to (\d+)/);
      const numberOf = parseInt(numberOfRaw, 10);
      const from = parseInt(fromRaw, 10);
      const to = parseInt(toRaw, 10);

      const stack = stacks[from - 1];

      const movingContainers = stack.slice(stack.length - numberOf).reverse();

      stacks[from - 1] = stack.slice(0, stack.length - numberOf);
      stacks[to - 1] = stacks[to - 1].concat(movingContainers)
    });

  return stacks.map(x => x[x.length - 1]).join("");
}

export function b(input) {
  const maxStackHeight = input.findIndex((x) => x[0] === 'm') - 2;

  const numberOfStacks = input[maxStackHeight].match(/\d+/g).length;

  const rawContainers = input
    .slice(0, maxStackHeight)
    .reverse();
  
  const stacks = [...Array(numberOfStacks).keys()]
    .map((_, index) => {
      return rawContainers
        .map(x => {
          return x[(index * 4) + 1];
        })
        .filter(x => x !== ' ');
    });

  const moves = input.slice(maxStackHeight + 2);

  moves
    .forEach((move) => {
      const [_, numberOfRaw, fromRaw, toRaw] = move.match(/move (\d+) from (\d+) to (\d+)/);
      const numberOf = parseInt(numberOfRaw, 10);
      const from = parseInt(fromRaw, 10);
      const to = parseInt(toRaw, 10);

      const stack = stacks[from - 1];

      const movingContainers = stack.slice(stack.length - numberOf);

      stacks[from - 1] = stack.slice(0, stack.length - numberOf);
      stacks[to - 1] = stacks[to - 1].concat(movingContainers)
    });

  return stacks.map(x => x[x.length - 1]).join("");
}
