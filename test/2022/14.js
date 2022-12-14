import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2022/14.js';

describe('2022_14', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('./input/14.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n');
  });

  it('test A', () => {
    let result = a([
      '498,4 -> 498,6 -> 496,6',
      '503,4 -> 502,4 -> 502,9 -> 494,9',
    ]);
    assert.equal(result, 24);
  });

  it('solve A', () => {
    let result = a(input);
    assert.equal(result, 793);
  });

  it('test B', () => {
    let result = b([
      '498,4 -> 498,6 -> 496,6',
      '503,4 -> 502,4 -> 502,9 -> 494,9',
    ]);
    assert.equal(result, 93);
  });

  it('solve B', () => {
    const result = b(input);
    assert.equal(result, 24166);
  });
});
