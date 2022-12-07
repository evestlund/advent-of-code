import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2021/04.js';

describe('2021_04', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('./input/04.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n');
  });

  it.skip('test A', () => {
    const result = a([
      '7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1',
      '',
      '22 13 17 11  0',
      '8  2 23  4 24',
      '21  9 14 16  7',
      '6 10  3 18  5',
      '1 12 20 15 19',
      '',
      '3 15  0  2 22',
      '9 18 13 17  5',
      '19  8  7 25 23',
      '20 11 10 24  4',
      '14 21 16 12  6',
      '',
      '14 21 17 24  4',
      '10 16 15  9 19',
      '18  8 23 26 20',
      '22 11 13  6  5',
      '2  0 12  3  7'
    ]);
    assert.equal(result, 4512);
  });

  it.skip('solve A', () => {
    const powerConsumption = a(input);
    assert.equal(powerConsumption, 2724524);
  });

  it.skip('test B', () => {
    const lifeSupportRating = b([
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010'
    ]);
    assert.equal(lifeSupportRating, 230);
  });

  it.skip('solve B', () => {
    const lifeSupportRating = b(input);
    assert.equal(lifeSupportRating, 1971232560);
  });
});
