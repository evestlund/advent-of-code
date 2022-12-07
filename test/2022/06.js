import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2022/06.js';

describe('2022_06', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('./input/06.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents;
  });

  it('test A', () => {
    let result = a('mjqjpqmgbljsphdztnvjfqwrcgsmlb');
    assert.equal(result, 7);
    result = a('bvwbjplbgvbhsrlpgdmjqwftvncz');
    assert.equal(result, 5);
    result = a('nppdvjthqldpwncqszvftbrmjlhg');
    assert.equal(result, 6);
    result = a('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg');
    assert.equal(result, 10);
    result = a('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw');
    assert.equal(result, 11);
  });

  it('solve A', () => {
    const result = a(input);
    assert.equal(result, 1953);
  });

  it('test B', () => {
    let result = b('mjqjpqmgbljsphdztnvjfqwrcgsmlb');
    assert.equal(result, 19);
    result = b('bvwbjplbgvbhsrlpgdmjqwftvncz');
    assert.equal(result, 23);
    result = b('nppdvjthqldpwncqszvftbrmjlhg');
    assert.equal(result, 23);
    result = b('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg');
    assert.equal(result, 29);
    result = b('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw');
    assert.equal(result, 26);
  });

  it('solve B', () => {
    const result = b(input);
    assert.equal(result, 2301);
  });
});
