import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../solvers/2021_02.js';

describe('2021_02', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('./input/2021_02.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents.split('\n');

    assert.equal(input.length, 1000);
  });

  it('solve A', () => {
    const { horizontalPos, depth } = a(input);
    assert.equal(horizontalPos * depth, 1882980);
  });

  it('solve B', () => {
    const { horizontalPos, depth } = b(input);
    assert.equal(horizontalPos * depth, 1971232560);
  });
});
