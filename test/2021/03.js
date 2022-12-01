import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a } from '../../2021/03.js';

describe('2021_03', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('../input/2021/03.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n');

    assert.equal(input.length, 1000);
  });

  it.skip('solve A', () => {
    const powerConsumption = a(input);
    assert.equal(powerConsumption, 1293);
  });

  it.skip('solve B', () => {
    const { horizontalPos, depth } = b(input);
    assert.equal(horizontalPos * depth, 1971232560);
  });
});
