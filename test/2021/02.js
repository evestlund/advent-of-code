import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2021/02.js';

describe('2021_02', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('../input/2021/02.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n')
      .map((x) => {
        const [direction, steps] = x.split(' ');
        return [direction, parseInt(steps, 10)];
      });

    assert.equal(input.length, 1000);

    for (let i = 0; i < input.length; i++) {
      assert.equal(typeof input[i][0], 'string');
      assert.equal(typeof input[i][1], 'number');
    }
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
