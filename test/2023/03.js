// --- Day 3: Gear Ratios ---

// You and the Elf eventually reach a gondola lift station; he says the gondola lift will take you up to the water source,
// but this is as far as he can bring you. You go inside.

// It doesn't take long to find the gondolas, but there seems to be a problem: they're not moving.

// "Aaah!"

// You turn around to see a slightly-greasy Elf with a wrench and a look of surprise.
// "Sorry, I wasn't expecting anyone! The gondola lift isn't working right now; it'll still be a while before I can fix it." You offer to help.

// The engineer explains that an engine part seems to be missing from the engine,
// but nobody can figure out which one. If you can add up all the part numbers in the engine schematic, 
// it should be easy to work out which part is missing.

// The engine schematic (your puzzle input) consists of a visual representation of the engine.
// There are lots of numbers and symbols you don't really understand, but apparently any number
// adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum. (Periods (.) do not count as a symbol.)

// Here is an example engine schematic:

// 467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
// ...$.*....
// .664.598..

// In this schematic, two numbers are not part numbers because they are not adjacent to a symbol:
// 114 (top right) and 58 (middle right). Every other number is adjacent to a symbol and so is a part number; their sum is 4361.

// Of course, the actual engine schematic is much larger. What is the sum of all of the part numbers in the engine schematic?




// --- Part Two ---
// The engineer finds the missing part and installs it in the engine!
// As the engine springs to life, you jump in the closest gondola, finally ready to ascend to the water source.

// You don't seem to be going very fast, though. Maybe something is still wrong? Fortunately, 
// the gondola has a phone labeled "help", so you pick it up and the engineer answers.

// Before you can explain the situation, she suggests that you look out the window. 
// There stands the engineer, holding a phone in one hand and waving with the other. 
// You're going so slowly that you haven't even left the station. You exit the gondola.

// The missing part wasn't the only issue - one of the gears in the engine is wrong. 
// A gear is any * symbol that is adjacent to exactly two part numbers. Its gear ratio is the result of multiplying those two numbers together.

// This time, you need to find the gear ratio of every gear and add them all up so that the engineer can figure out which gear needs to be replaced.

// Consider the same engine schematic again:

// 467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
// ...$.*....
// .664.598..

// In this schematic, there are two gears. The first is in the top left; it has part numbers
//  467 and 35, so its gear ratio is 16345. The second gear is in the lower right; its gear ratio
// is 451490. (The * adjacent to 617 is not a gear because it is only adjacent to one part number.) Adding up all of the gear ratios produces 467835.

// What is the sum of all of the gear ratios in your engine schematic?



// --- Solution ---

function a(contents) {
  const numbers = [];

  const rows = contents.split('\n');

  let currentNumber = false;

  for (let y = 0; y < rows.length; y++) {
    const row = rows[y];

    for (let x = 0; x < row.length; x++) {
      const value = row[x];

      if (value.match(/\d/)) {
        if (!currentNumber) currentNumber = value.match(/\d/)[0];
        else currentNumber += value.match(/\d/)[0];
        
        if (!row[x + 1] || !row[x + 1].match(/\d/)) {
          findAdjacent();

          if (numbers[numbers.length - 1] !== currentNumber) {
            // process.stdout.write(currentNumber.split('').map(() => '.').join(''))
          } else {
            // process.stdout.write(currentNumber)
          }

          currentNumber = false;
        }
      } else {
        // process.stdout.write(value) 
      }

      function findAdjacent() {
        for (let searchY = Math.max(0, y - 1); searchY <= Math.min(y + 1, rows.length - 1); searchY++) {
          const searchRow = rows[searchY];

          for (let searchX = Math.max(0, (x - currentNumber.length)); searchX <= Math.min(x + 1, searchRow.length - 1); searchX++) {
            const element = searchRow[searchX];

            if (searchY === y && searchX > (x - currentNumber.length) && searchX <= x) continue;

            if (element !== '.') {
              numbers.push(currentNumber);
              return;
            }
          }
        }
      }
    }

    // process.stdout.write('\n')
  }


  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }

  return sum;
}



function b(contents) {
  const numbers = [];

  const rows = contents.split('\n');

  let currentNumber = false;

  for (let y = 0; y < rows.length; y++) {
    const row = rows[y];

    for (let x = 0; x < row.length; x++) {
      const value = row[x];

      if (value.match(/\d/)) {
        if (!currentNumber) currentNumber = value.match(/\d/)[0];
        else currentNumber += value.match(/\d/)[0];
        
        if (!row[x + 1] || !row[x + 1].match(/\d/)) {
          findAdjacentGear();

          if (numbers[numbers.length - 1] !== currentNumber) {
            // process.stdout.write(currentNumber.split('').map(() => '.').join(''))
          } else {
            // process.stdout.write(currentNumber)
          }

          currentNumber = false;
        }
      } else {
        // process.stdout.write(value) 
      }

      function findAdjacentGear() {
        for (let searchY = Math.max(0, y - 1); searchY <= Math.min(y + 1, rows.length - 1); searchY++) {
          const searchRow = rows[searchY];

          for (let searchX = Math.max(0, (x - currentNumber.length)); searchX <= Math.min(x + 1, searchRow.length - 1); searchX++) {
            const element = searchRow[searchX];

            // if (searchY === y && searchX > (x - currentNumber.length) && searchX <= x) continue;

            if (element === '*') {
              numbers.push({ number: currentNumber, adjacentGear: { x: searchX, y: searchY } });
              return;
            }
          }
        }
      }
    }

    // process.stdout.write('\n')
  }

  // console.log(numbers);


  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i].adjacentGear.x === numbers[j].adjacentGear.x && numbers[i].adjacentGear.y === numbers[j].adjacentGear.y) {
        sum += parseInt(numbers[i].number) * parseInt(numbers[j].number);
        break;
      }
    }
  }

  return sum;
}

// --- Tests ---

import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

describe('2023_03', () => {
  it('test A', () => {
    const result = a(
`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`);

    assert.equal(result, 4361);
  });

  it('solve A', async () => {
    const filePath = new URL('./03.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    const result = a(contents);

    assert.equal(result, 529618);
    // 528231 - to low
    // 544187 - too high
  });

  it('test B', () => {
    const result = b(`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`);

    assert.equal(result, 467835);
  });

  it('solve B', async () => {
    const filePath = new URL('./03.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    const result = b(contents);
    assert.equal(result, 77509019);
  });
});
