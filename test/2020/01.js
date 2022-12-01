import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2020/01.js';

describe('2020_01', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('../input/2020/01.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n')
      .map((x) => parseInt(x, 10));
  });

  it('test A', () => {
    const result = a([1721, 979, 366, 299, 675, 1456]);
    assert.equal(result, 514579);
  });

  it('solve A', () => {
    const result = a(input);
    assert.equal(result, 436404);
  });

  it('test B', () => {
    const result = b([1721, 979, 366, 299, 675, 1456]);
    assert.equal(result, 241861950);
  });

  it('solve B', () => {
    const result = b(input);
    assert.equal(result, 274879808);
  });
});
