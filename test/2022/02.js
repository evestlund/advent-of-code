import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2022/02.js';

describe('2022_02', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('../input/2022/02.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n');
  });

  it('test A', () => {
    const result = a([
      "A Y",
      "B X",
      "C Z"
    ]);
    assert.equal(result, 15);
  });

  it('solve A', () => {
    const result = a(input);
    assert.equal(result, 10404);
  });

  it('test B', () => {
    const result = b([
      "A Y",
      "B X",
      "C Z"
    ]);
    assert.equal(result, 12);
  });

  it('solve B', () => {
    const result = b(input);
    assert.equal(result, 10334);
  });
});
