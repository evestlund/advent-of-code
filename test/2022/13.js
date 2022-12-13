import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2022/13.js';

describe('2022_13', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('./input/13.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n');
  });

  it('test A', () => {
    let result = a([
      '[1,1,3,1,1]',
      '[1,1,5,1,1]',
      '',
      '[[1],[2,3,4]]',
      '[[1],4]',
      '',
      '[9]',
      '[[8,7,6]]',
      '',
      '[[4,4],4,4]',
      '[[4,4],4,4,4]',
      '',
      '[7,7,7,7]',
      '[7,7,7]',
      '',
      '[]',
      '[3]',
      '',
      '[[[]]]',
      '[[]]',
      '',
      '[1,[2,[3,[4,[5,6,7]]]],8,9]',
      '[1,[2,[3,[4,[5,6,0]]]],8,9]',
    ]);
    assert.equal(result, 13);
  });

  it('solve A', () => {
    let result = a(input);
    assert.equal(result, 5506);
  });

  it('test B', () => {
    let result = b([
      '[1,1,3,1,1]',
      '[1,1,5,1,1]',
      '',
      '[[1],[2,3,4]]',
      '[[1],4]',
      '',
      '[9]',
      '[[8,7,6]]',
      '',
      '[[4,4],4,4]',
      '[[4,4],4,4,4]',
      '',
      '[7,7,7,7]',
      '[7,7,7]',
      '',
      '[]',
      '[3]',
      '',
      '[[[]]]',
      '[[]]',
      '',
      '[1,[2,[3,[4,[5,6,7]]]],8,9]',
      '[1,[2,[3,[4,[5,6,0]]]],8,9]',
    ]);
    assert.equal(result, 140);
  });

  it('solve B', () => {
    const result = b(input);
    assert.equal(result, 21756);
  });
});
