const rounds = 20;

export function a(monkeys) {
  const counts = Array.from({ length: monkeys.length }, () => 0);

  Array.from({ length: 20 }, () => {
    monkeys.forEach((monkey, index) => {
      counts[index] = counts[index] + monkey.items.length;
      monkey.items.forEach((item) => {
        const level = parseInt(item, 10);

        const operationValue = monkey.operation.includes('old')
          ? level
          : parseInt(monkey.operation.match(/\d+/)[0], 10);
  
        const changedLevel = monkey.operation.includes('+')
          ? level + operationValue
          : monkey.operation.includes('*')
            ? level * operationValue : 0;

        const newWorryLevel = Math.floor(changedLevel / 3);
  
        const testPasses = newWorryLevel % monkey.test === 0;
        
        if (testPasses) monkeys[monkey.true].items = monkeys[monkey.true].items.concat([newWorryLevel])
        else monkeys[monkey.false].items = monkeys[monkey.false].items.concat([newWorryLevel])
      })

      monkey.items = [];
    })
  })

  const sorted = counts.sort((a, b) => b - a);
  return sorted[0] * sorted[1];
}

export function b(monkeys) {
  const counts = Array.from({ length: monkeys.length }, () => 0);

  const leastCommonMultipleIsh = monkeys.reduce((product, monkey) => product * monkey.test, 1);

  Array.from({ length: 10000 }, (_, round) => {
    monkeys.forEach((monkey, index) => {
      counts[index] = counts[index] + monkey.items.length;

      monkey.items.forEach((item) => {
        const level = parseInt(item, 10);

        const operationValue = monkey.operation.includes('old')
          ? level
          : parseInt(monkey.operation.match(/\d+/)[0], 10);
  
        let changedLevel = monkey.operation.includes('+')
          ? level + operationValue
          : monkey.operation.includes('*')
          ? level * operationValue : 0;

        const newWorryLevel = changedLevel % leastCommonMultipleIsh;
  
        const testPasses = newWorryLevel % monkey.test === 0
        
        if (testPasses) monkeys[monkey.true].items = monkeys[monkey.true].items.concat([newWorryLevel])
        else monkeys[monkey.false].items = monkeys[monkey.false].items.concat([newWorryLevel])
      })

      monkey.items = [];
    })
  })

  const sorted = counts.sort((a, b) => b - a);
  return sorted[0] * sorted[1];
}
