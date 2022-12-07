import assert from 'node:assert';
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';

import { a, b, buildFileStructure } from '../../2022/07.js';

describe('2022_07', () => {
  let input;

  it('read input', async () => {
    const filePath = new URL('./input/07.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });

    input = contents.split('\n');
  });

  it('test A', () => {
    const { fileStructure, sizes, baseSize } = a([
      '$ cd /',
      '$ ls',
      'dir a',
      '14848514 b.txt',
      '8504156 c.dat',
      'dir d',
      '$ cd a',
      '$ ls',
      'dir e',
      '29116 f',
      '2557 g',
      '62596 h.lst',
      '$ cd e',
      '$ ls',
      '584 i',
      '$ cd ..',
      '$ cd ..',
      '$ cd d',
      '$ ls',
      '4060174 j',
      '8033020 d.log',
      '5626152 d.ext',
      '7214296 k',
    ]);

    assert.deepEqual(fileStructure, [
      [
        'a',
        [
          'e',
          '584 i'
        ],
        '29116 f',
        '2557 g',
        '62596 h.lst'
      ],
      '14848514 b.txt',
      '8504156 c.dat',
      [
        'd',
        '4060174 j',
        '8033020 d.log',
        '5626152 d.ext',
        '7214296 k',
      ]
    ]);

    assert.equal(baseSize, 48381165);
    assert.deepEqual(sizes, [584, 94853]);
    const sum = sizes.reduce((sum, val) => sum + val, 0);
    assert.equal(sum, 95437);
  });

  it('solve A', () => {
    const { sizes } = a(input);
    const sum = sizes.reduce((sum, val) => sum + val, 0);
    assert.equal(sum, 1182909);
  });

  it('test B', () => {
    const { fileStructure, sizes, baseSize } = b([
      '$ cd /',
      '$ ls',
      'dir a',
      '14848514 b.txt',
      '8504156 c.dat',
      'dir d',
      '$ cd a',
      '$ ls',
      'dir e',
      '29116 f',
      '2557 g',
      '62596 h.lst',
      '$ cd e',
      '$ ls',
      '584 i',
      '$ cd ..',
      '$ cd ..',
      '$ cd d',
      '$ ls',
      '4060174 j',
      '8033020 d.log',
      '5626152 d.ext',
      '7214296 k',
    ]);

    assert.deepEqual(fileStructure, [
      [
        'a',
        [
          'e',
          '584 i'
        ],
        '29116 f',
        '2557 g',
        '62596 h.lst'
      ],
      '14848514 b.txt',
      '8504156 c.dat',
      [
        'd',
        '4060174 j',
        '8033020 d.log',
        '5626152 d.ext',
        '7214296 k',
      ]
    ]);

    assert.equal(baseSize, 48381165);

    const neededSpace = 30_000_000;
    const currentFreeSpace = 70_000_000 - baseSize;

    const toDel = sizes
      .filter((x) => x > neededSpace - currentFreeSpace)
      .sort((a, b) => a - b)[0]

    assert.equal(toDel, 24933642);
  });

  it('solve B', () => {
    const { sizes, baseSize } = b(input);

    assert.equal(baseSize, 42677139);

    const neededSpace = 30_000_000;
    const currentFreeSpace = 70_000_000 - baseSize;

    const toDel = sizes
      .filter((x) => x > neededSpace - currentFreeSpace)
      .sort((a, b) => a - b)[0]

    assert.equal(toDel, 2832508);
  });
});
