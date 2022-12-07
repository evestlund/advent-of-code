export function a(input) {
  const { fileStructure, sizes, baseSize } = buildFileStructure(input)

  const underSomeSize = sizes.filter((x) => x <= 100_000);

  return { fileStructure, sizes: underSomeSize, baseSize };
}

export function b(input) {
  const { fileStructure, sizes, baseSize } = buildFileStructure(input)
  
  return { fileStructure, sizes, baseSize };
}

export function buildFileStructure(input) {
  const fileStructure = [];
  const sizes = [];

  let currentFolder = fileStructure;
  let folderHistory = [];

  for (let i = 1; i < input.length; i++) {
    if (/^\d/.test(input[i])) {
      currentFolder.push(input[i]);
    } else if (/^dir/.test(input[i])) {
      const [_, folder] = input[i].match(/^dir (.+)$/);
      currentFolder.push([folder]);
    } else if (/^\$ cd [a-z]+$/.test(input[i])) {
      const [_, folder] = input[i].match(/^\$ cd ([a-z]+)$/);
      folderHistory.push(currentFolder);
      currentFolder = currentFolder.find((x) => x[0] === folder);
    } else if (/^\$ cd ..$/.test(input[i])) {
      const size = calcSize(currentFolder);
      sizes.push(size);

      currentFolder = folderHistory.pop();
    }
  }

  const size = calcSize(currentFolder);
  sizes.push(size);

  const baseSize = calcSize(fileStructure);

  return { fileStructure, sizes, baseSize };
}

function calcSize(array) {
  return array.reduce((sum, val) => {
    if (Array.isArray(val)) {
      return sum + calcSize(val);
    } else if (/^\d+/.test(val)) {
      return sum + parseInt(val.match(/^(\d+)/)[1]);
    }
    return sum;
  }, 0)
}