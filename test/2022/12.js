import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2022/12.js';

describe('2022_12', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('./input/12.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n')
      .map((x) => x.split(""));
  });

  it('test A', () => {
    let result = a([
      'Sabqponm'.split(""),
      'abcryxxl'.split(""),
      'accszExk'.split(""),
      'acctuvwj'.split(""),
      'abdefghi'.split(""),
    ]);
    assert.equal(result, 31);
  });

  it('solve A', () => {
    let result = a(input);
    assert.equal(result, 383);
  });

  it('test B', () => {
    let result = b([
      'Sabqponm'.split(""),
      'abcryxxl'.split(""),
      'accszExk'.split(""),
      'acctuvwj'.split(""),
      'abdefghi'.split(""),
    ]);
    assert.equal(result, 29);
  });

  it('solve B', () => {
    const result = b(input);
    assert.equal(result, 377);
  });
});
