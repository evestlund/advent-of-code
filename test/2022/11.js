import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b } from '../../2022/11.js';

describe('2022_11', () => {
  let testInput, input;

  it('read input', async () => {
    testInput = [{
      items: [79, 98],
      operation: '* 19',
      test: 23,
      true: 2,
      false: 3,
    }, {
      items: [54, 65, 75, 74],
      operation: '+ 6',
      test: 19,
      true: 2,
      false: 0,
    }, {
      items: [79, 60, 97],
      operation: '* old',
      test: 13,
      true: 1,
      false: 3,
    }, {
      items: [74],
      operation: '+ 3',
      test: 17,
      true: 0,
      false: 1,
    }];

    // 0
    input = [{
      items: [91, 66],
      operation: '* 13',
      test: 19,
      true: 6,
      false: 2,
    }, {
      items: [78, 97, 59],
      operation: '+ 7',
      test: 5,
      true: 0,
      false: 3,
    }, {
      items: [57, 59, 97, 84, 72, 83, 56, 76],
      operation: '+ 6',
      test: 11,
      true: 5,
      false: 7,
    }, {
      items: [81, 78, 70, 58, 84],
      operation: '+ 5',
      test: 17,
      true: 6,
      false: 0,
    }, {
      items: [60],
      operation: '+ 8',
      test: 7,
      true: 1,
      false: 3,
    }, {
      items: [57, 69, 63, 75, 62, 77, 72],
      operation: '* 5',
      test: 13,
      true: 7,
      false: 4,
    }, {
      items: [73, 66, 86, 79, 98, 87],
      operation: '* old',
      test: 3,
      true: 5,
      false: 2,
    }, {
      items: [95, 89, 63, 67],
      operation: '+ 2',
      test: 2,
      true: 1,
      false: 4,
    }];
  });

  it('test A', () => {
    let result = a(JSON.parse(JSON.stringify(testInput)));
    assert.equal(result, 10605);
  });

  it('solve A', () => {
    let result = a(JSON.parse(JSON.stringify(input)));
    assert.equal(result, 101436);
  });

  it('test B', () => {
    let result = b(JSON.parse(JSON.stringify(testInput)));
    // assert.equal(result, 10197);
    assert.equal(result, 2713310158);
  });

  it('solve B', () => {
    const result = b(input);
    assert.equal(result, 19754471646);
  });
});
