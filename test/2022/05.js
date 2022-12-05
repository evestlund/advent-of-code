import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2022/05.js';

describe('2022_05', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('./input/05.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n');
  });

  it('test A', () => {
    const result = a([
      '    [D]    ',
      '[N] [C]    ',
      '[Z] [M] [P]',
      ' 1   2   3',
      '',
      'move 1 from 2 to 1',
      'move 3 from 1 to 3',
      'move 2 from 2 to 1',
      'move 1 from 1 to 2'
    ]);
    assert.equal(result, 'CMZ');
  });

  it('solve A', () => {
    const result = a(input);
    assert.equal(result, 'HNSNMTLHQ');
  });

  it('test B', () => {
    const result = b([
      '    [D]    ',
      '[N] [C]    ',
      '[Z] [M] [P]',
      '1   2   3',
      '',
      'move 1 from 2 to 1',
      'move 3 from 1 to 3',
      'move 2 from 2 to 1',
      'move 1 from 1 to 2'
  ]);
    assert.equal(result, 'MCD');
  });

  it('solve B', () => {
    const result = b(input);
    assert.equal(result, 'RNLFDJMCT');
  });
});
