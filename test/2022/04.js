import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2022/04.js';

describe('2022_04', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('./input/04.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n');
  });

  it('test A', () => {
    const result = a([
      '2-4,6-8',
      '2-3,4-5',
      '5-7,7-9',
      '2-8,3-7',
      '6-6,4-6',
      '2-6,4-8',
      '9-21,14-43'
    ]);
    assert.equal(result, 2);
  });

  it('solve A', () => {
    const result = a(input);
    assert.equal(result, 562);
  });

  it('test B', () => {
    const result = b([
      '2-4,6-8',
      '2-3,4-5',
      '5-7,7-9',
      '2-8,3-7',
      '6-6,4-6',
      '2-6,4-8',
  ]);
    assert.equal(result, 4);
  });

  it('solve B', () => {
    const result = b(input);
    assert.equal(result, 924);
  });
});
