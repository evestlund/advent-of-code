import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2022/09.js';

describe('2022_09', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('./input/09.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents
      .split('\n');

    assert.equal(input.length, 2000);
  });

  it('test A', () => {
    let result = a([
      'R 4',
      'U 4',
      'L 3',
      'D 1',
      'R 4',
      'D 1',
      'L 5',
      'R 2'
    ]);
    assert.equal(result, 13);
  });

  it('solve A', () => {
    const result = a(input);
    assert.equal(result, 6243);
  });

  it('test B', () => {
    let result = b([
      'R 5',
      'U 8',
      'L 8',
      'D 3',
      'R 17',
      'D 10',
      'L 25',
      'U 20',
    ]);
    assert.equal(result, 36);
  });

  it('solve B', () => {
    const result = b(input);
    assert.equal(result, 2630);
  });
});
