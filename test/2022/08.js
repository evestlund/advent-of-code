import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2022/08.js';

describe('2022_08', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('./input/08.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n')
      .map((x) => {
        return x
          .split('')
          .map((y) => parseInt(y, 10));
      });
  });

  it('test A', () => {
    const result = a([
      [3, 0, 3, 7, 3],
      [2, 5, 5, 1, 2],
      [6, 5, 3, 3, 2],
      [3, 3, 5, 4, 9],
      [3, 5, 3, 9, 0]
    ]);
    assert.equal(result, 21);
  });

  it('solve A', () => {
    const result = a(input);
    assert.equal(result, 1669);
  });

  it('test B', () => {
    const result = b([
      [3, 0, 3, 7, 3],
      [2, 5, 5, 1, 2],
      [6, 5, 3, 3, 2],
      [3, 3, 5, 4, 9],
      [3, 5, 3, 9, 0]
  ]);
    assert.equal(result, 8);
  });

  it('solve B', () => {
    const result = b(input);
    assert.equal(result, 331344);
  });
});
