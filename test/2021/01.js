import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2021/01.js';

describe('2021_01', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('./input/01.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n')
      .map((x) => parseInt(x, 10));

    assert.equal(input.length, 2000);

    for (let index = 0; index < input.length; index++) {
      assert.equal(typeof input[index], 'number');
    }
  });

  it('solve A', () => {
    const result = a(input);
    assert.equal(result, 1616);
  });

  it('solve B', () => {
    const result = b(input);
    assert.equal(result, 1645);
  });
});
