import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2022/10.js';

describe('2022_10', () => {
  let testInput, input;

  it('read input', async () => {
    const testFilePath = new URL('./input/10_test.txt', import.meta.url);
    const testContents = await readFile(testFilePath, { encoding: 'utf8' });

    testInput = testContents
      .split('\n');

    const filePath = new URL('./input/10.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n');
  });

  it('test A', () => {
    let result = a(testInput);
    assert.equal(result, 13140);
  });

  it('solve A', () => {
    const result = a(input);
    assert.equal(result, 13920);
  });

  it('test B', () => {
    let result = b(testInput);
    assert.deepEqual(result, [
      '##..##..##..##..##..##..##..##..##..##..',
      '###...###...###...###...###...###...###.',
      '####....####....####....####....####....',
      '#####.....#####.....#####.....#####.....',
      '######......######......######......####',
      '#######.......#######.......#######.....',
    ]);
  });

  it('solve B', () => {
    const result = b(input);
    assert.deepEqual(result, [
      '####..##..#....#..#.###..#....####...##.',
      '#....#..#.#....#..#.#..#.#....#.......#.',
      '###..#....#....####.###..#....###.....#.',
      '#....#.##.#....#..#.#..#.#....#.......#.',
      '#....#..#.#....#..#.#..#.#....#....#..#.',
      '####..###.####.#..#.###..####.#.....##..',
    ]);
  });
});
