import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2022/01.js';

describe('2022_01', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('../input/2022/01.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n')
      .map((x) => {
        if (x) return parseInt(x, 10)
        return x;
      });
  });

  it('test A', () => {
    const result = a([
      1000,
      2000,
      3000,
      '',
      4000,
      '',
      5000,
      6000,
      '',
      7000,
      8000,
      9000,
      '',
      10000
    ]);
    assert.equal(result, 24000);
  });

  it('solve A', () => {
    const result = a(input);
    assert.equal(result, 67016);
  });

  it('test B', () => {
    const result = b([
      1000,
      2000,
      3000,
      '',
      4000,
      '',
      5000,
      6000,
      '',
      7000,
      8000,
      9000,
      '',
      10000
    ]);
    assert.equal(result, 45000);
  });

  it('solve B', () => {
    const result = b(input);
    assert.equal(result, 200116);
  });
});
