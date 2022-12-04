import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a } from '../../2021/03.js';

describe('2021_03', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('./input/03.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n');
  });

  it('test A', () => {
    const powerConsumption = a([
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
    assert.equal(powerConsumption, 198);
  });

  it('solve A', () => {
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
