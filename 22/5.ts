// prettier-ignore
const testInput = `    [D]     
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const input = `[N] [G]                     [Q]    
[H] [B]         [B] [R]     [H]    
[S] [N]     [Q] [M] [T]     [Z]    
[J] [T]     [R] [V] [H]     [R] [S]
[F] [Q]     [W] [T] [V] [J] [V] [M]
[W] [P] [V] [S] [F] [B] [Q] [J] [H]
[T] [R] [Q] [B] [D] [D] [B] [N] [N]
[D] [H] [L] [N] [N] [M] [D] [D] [B]
 1   2   3   4   5   6   7   8   9 

move 3 from 1 to 2
move 1 from 7 to 1
move 1 from 6 to 5
move 5 from 5 to 9
move 2 from 5 to 2
move 1 from 6 to 8
move 1 from 5 to 7
move 5 from 4 to 6
move 1 from 7 to 6
move 1 from 2 to 4
move 5 from 2 to 6
move 2 from 1 to 5
move 2 from 1 to 9
move 16 from 6 to 4
move 6 from 8 to 3
move 7 from 2 to 4
move 5 from 9 to 3
move 1 from 1 to 4
move 1 from 1 to 3
move 3 from 7 to 4
move 2 from 5 to 4
move 31 from 4 to 8
move 22 from 8 to 4
move 9 from 3 to 6
move 7 from 9 to 5
move 4 from 5 to 6
move 6 from 3 to 2
move 2 from 6 to 7
move 5 from 2 to 7
move 1 from 2 to 4
move 1 from 7 to 5
move 4 from 5 to 4
move 2 from 6 to 9
move 2 from 4 to 6
move 7 from 6 to 4
move 2 from 6 to 1
move 1 from 6 to 8
move 8 from 8 to 1
move 1 from 7 to 6
move 4 from 1 to 5
move 9 from 4 to 8
move 4 from 1 to 7
move 3 from 5 to 3
move 2 from 1 to 9
move 1 from 3 to 2
move 1 from 9 to 8
move 1 from 2 to 1
move 1 from 1 to 8
move 1 from 5 to 1
move 2 from 3 to 1
move 2 from 6 to 9
move 19 from 4 to 1
move 4 from 4 to 2
move 6 from 1 to 4
move 1 from 2 to 4
move 4 from 4 to 3
move 7 from 7 to 3
move 7 from 8 to 2
move 2 from 7 to 4
move 3 from 2 to 1
move 8 from 8 to 2
move 3 from 9 to 1
move 2 from 9 to 1
move 10 from 2 to 7
move 4 from 3 to 1
move 1 from 8 to 3
move 1 from 4 to 5
move 1 from 3 to 6
move 1 from 2 to 1
move 10 from 1 to 3
move 1 from 4 to 7
move 1 from 6 to 4
move 7 from 3 to 2
move 5 from 2 to 8
move 11 from 7 to 2
move 3 from 4 to 3
move 1 from 4 to 3
move 5 from 8 to 9
move 17 from 2 to 4
move 11 from 1 to 5
move 4 from 1 to 3
move 5 from 9 to 2
move 4 from 2 to 1
move 3 from 5 to 7
move 6 from 5 to 3
move 1 from 5 to 8
move 6 from 1 to 8
move 3 from 8 to 5
move 1 from 1 to 4
move 1 from 7 to 2
move 15 from 3 to 4
move 1 from 1 to 3
move 10 from 3 to 9
move 2 from 7 to 4
move 1 from 2 to 8
move 21 from 4 to 9
move 1 from 2 to 3
move 1 from 8 to 1
move 9 from 4 to 2
move 1 from 1 to 5
move 5 from 2 to 7
move 2 from 8 to 5
move 1 from 8 to 1
move 2 from 2 to 8
move 2 from 4 to 9
move 24 from 9 to 5
move 3 from 4 to 1
move 2 from 2 to 5
move 12 from 5 to 1
move 10 from 1 to 5
move 23 from 5 to 6
move 8 from 9 to 1
move 3 from 8 to 1
move 1 from 1 to 2
move 1 from 3 to 7
move 11 from 6 to 1
move 1 from 2 to 4
move 6 from 6 to 8
move 4 from 6 to 7
move 1 from 7 to 3
move 1 from 3 to 4
move 23 from 1 to 8
move 1 from 4 to 2
move 1 from 2 to 1
move 1 from 6 to 7
move 6 from 5 to 3
move 1 from 7 to 8
move 1 from 1 to 8
move 1 from 9 to 3
move 6 from 7 to 2
move 3 from 5 to 9
move 5 from 2 to 3
move 28 from 8 to 3
move 4 from 1 to 9
move 5 from 9 to 5
move 2 from 8 to 5
move 1 from 9 to 4
move 2 from 7 to 5
move 1 from 4 to 2
move 1 from 4 to 8
move 2 from 8 to 3
move 6 from 5 to 2
move 1 from 7 to 2
move 39 from 3 to 2
move 2 from 3 to 8
move 1 from 9 to 6
move 2 from 2 to 9
move 2 from 9 to 6
move 1 from 8 to 1
move 1 from 1 to 6
move 5 from 6 to 9
move 2 from 5 to 8
move 20 from 2 to 4
move 2 from 4 to 8
move 2 from 8 to 3
move 3 from 3 to 1
move 22 from 2 to 5
move 2 from 9 to 1
move 3 from 1 to 7
move 1 from 2 to 6
move 1 from 2 to 9
move 1 from 1 to 8
move 2 from 7 to 9
move 1 from 6 to 8
move 1 from 2 to 7
move 1 from 1 to 3
move 1 from 9 to 8
move 1 from 8 to 5
move 3 from 8 to 7
move 3 from 7 to 8
move 15 from 4 to 1
move 1 from 4 to 3
move 10 from 1 to 6
move 3 from 8 to 1
move 5 from 9 to 4
move 7 from 5 to 1
move 4 from 6 to 3
move 15 from 5 to 2
move 4 from 6 to 4
move 7 from 2 to 1
move 6 from 4 to 6
move 1 from 5 to 9
move 1 from 5 to 7
move 1 from 3 to 5
move 11 from 1 to 8
move 3 from 4 to 6
move 4 from 1 to 5
move 1 from 2 to 5
move 2 from 8 to 3
move 11 from 6 to 1
move 1 from 3 to 7
move 1 from 9 to 8
move 6 from 5 to 8
move 3 from 8 to 4
move 1 from 4 to 5
move 3 from 3 to 1
move 9 from 8 to 2
move 2 from 1 to 5
move 11 from 2 to 5
move 1 from 3 to 6
move 2 from 8 to 5
move 3 from 4 to 6
move 1 from 8 to 3
move 2 from 1 to 9
move 1 from 3 to 8
move 16 from 5 to 7
move 3 from 1 to 6
move 1 from 3 to 5
move 1 from 6 to 7
move 1 from 9 to 4
move 1 from 5 to 4
move 1 from 3 to 2
move 1 from 1 to 2
move 3 from 4 to 9
move 1 from 2 to 7
move 2 from 8 to 3
move 6 from 2 to 8
move 11 from 1 to 3
move 6 from 3 to 1
move 4 from 3 to 2
move 2 from 3 to 1
move 1 from 1 to 3
move 4 from 8 to 4
move 4 from 8 to 2
move 11 from 7 to 2
move 9 from 7 to 5
move 1 from 7 to 3
move 4 from 5 to 7
move 14 from 2 to 3
move 17 from 3 to 7
move 2 from 5 to 2
move 1 from 5 to 7
move 1 from 5 to 6
move 4 from 6 to 7
move 8 from 1 to 2
move 2 from 6 to 4
move 1 from 6 to 8
move 6 from 4 to 1
move 1 from 8 to 5
move 6 from 7 to 8
move 5 from 8 to 3
move 12 from 2 to 1
move 1 from 8 to 4
move 4 from 3 to 1
move 4 from 2 to 4
move 3 from 9 to 3
move 3 from 3 to 2
move 1 from 3 to 2
move 3 from 4 to 1
move 2 from 5 to 7
move 22 from 1 to 8
move 17 from 8 to 6
move 21 from 7 to 6
move 3 from 2 to 8
move 3 from 1 to 5
move 3 from 5 to 2
move 2 from 4 to 6
move 7 from 6 to 5
move 1 from 9 to 4
move 14 from 6 to 4
move 5 from 8 to 3
move 1 from 6 to 3
move 3 from 3 to 9
move 2 from 9 to 1
move 2 from 7 to 1
move 16 from 6 to 8
move 2 from 6 to 7
move 1 from 2 to 7
move 1 from 3 to 8
move 7 from 4 to 1
move 2 from 7 to 2
move 4 from 4 to 7
move 5 from 2 to 4
move 1 from 7 to 3
move 3 from 5 to 8
move 1 from 7 to 5
move 12 from 1 to 6
move 3 from 7 to 2
move 7 from 4 to 2
move 3 from 3 to 2
move 1 from 4 to 2
move 1 from 9 to 8
move 8 from 6 to 8
move 12 from 2 to 4
move 5 from 5 to 2
move 11 from 4 to 9
move 3 from 6 to 3
move 2 from 4 to 2
move 4 from 2 to 6
move 5 from 2 to 8
move 12 from 8 to 4
move 20 from 8 to 5
move 13 from 5 to 3
move 1 from 8 to 5
move 5 from 5 to 9
move 16 from 9 to 1
move 9 from 4 to 5
move 12 from 3 to 9
move 5 from 6 to 5
move 9 from 9 to 7
move 14 from 1 to 4
move 14 from 4 to 1
move 15 from 5 to 7
move 4 from 8 to 2
move 3 from 4 to 3
move 3 from 1 to 8
move 1 from 5 to 9
move 1 from 5 to 3
move 3 from 9 to 8
move 4 from 3 to 4
move 1 from 4 to 6
move 20 from 7 to 2
move 2 from 3 to 8
move 3 from 7 to 2
move 4 from 2 to 1
move 1 from 6 to 7
move 3 from 4 to 2
move 2 from 2 to 3
move 4 from 3 to 4
move 1 from 8 to 1
move 3 from 8 to 1
move 2 from 7 to 8
move 1 from 4 to 5
move 14 from 2 to 5
move 6 from 1 to 5
move 1 from 4 to 3
move 15 from 1 to 4
move 1 from 8 to 2
move 1 from 9 to 5
move 4 from 8 to 7
move 13 from 5 to 6
move 1 from 8 to 1
move 2 from 7 to 9
move 12 from 6 to 4
move 1 from 3 to 6
move 1 from 1 to 6
move 4 from 5 to 2
move 5 from 5 to 6
move 2 from 6 to 2
move 1 from 7 to 5
move 2 from 6 to 9
move 1 from 5 to 9
move 16 from 2 to 5
move 17 from 4 to 1
move 3 from 1 to 3
move 1 from 2 to 6
move 2 from 6 to 1
move 3 from 3 to 1
move 14 from 1 to 8
move 3 from 5 to 2
move 4 from 8 to 2
move 3 from 4 to 5
move 15 from 5 to 3
move 1 from 7 to 6
move 3 from 1 to 8
move 2 from 3 to 7
move 1 from 1 to 2
move 1 from 7 to 6
move 4 from 2 to 8
move 2 from 6 to 2
move 1 from 7 to 6
move 3 from 8 to 2
move 12 from 8 to 6
move 1 from 5 to 6
move 3 from 2 to 5
move 2 from 2 to 5
move 4 from 6 to 5
move 4 from 3 to 5
move 1 from 8 to 4
move 11 from 6 to 4
move 6 from 3 to 1
move 2 from 9 to 8
move 20 from 4 to 5
move 1 from 4 to 9
move 2 from 3 to 8
move 1 from 3 to 8
move 17 from 5 to 8
move 5 from 5 to 9
move 9 from 5 to 1
move 2 from 6 to 7
move 23 from 8 to 2
move 2 from 7 to 5
move 3 from 9 to 4
move 16 from 2 to 4
move 11 from 1 to 8
move 4 from 5 to 8
move 11 from 2 to 6
move 2 from 6 to 1
move 5 from 9 to 5
move 5 from 5 to 6
move 5 from 8 to 6
move 1 from 6 to 7
move 7 from 8 to 1
move 12 from 1 to 2
move 1 from 9 to 5
move 1 from 1 to 3
move 1 from 1 to 4
move 1 from 5 to 3
move 1 from 3 to 6
move 1 from 8 to 2
move 18 from 6 to 2
move 1 from 6 to 2
move 2 from 8 to 3
move 3 from 3 to 8
move 18 from 4 to 9
move 11 from 9 to 2
move 2 from 9 to 6
move 2 from 4 to 1
move 1 from 1 to 5
move 1 from 5 to 4
move 1 from 4 to 8
move 42 from 2 to 1
move 3 from 9 to 3
move 1 from 8 to 1
move 1 from 3 to 4
move 3 from 8 to 7
move 1 from 4 to 1
move 2 from 3 to 2
move 17 from 1 to 6
move 15 from 6 to 3
move 2 from 9 to 7
move 1 from 3 to 6
move 2 from 7 to 6
move 2 from 2 to 4
move 1 from 2 to 3
move 1 from 4 to 9
move 1 from 4 to 1
move 1 from 6 to 3
move 20 from 1 to 9
move 6 from 1 to 9
move 7 from 9 to 3
move 20 from 9 to 1
move 1 from 6 to 7
move 2 from 6 to 7
move 1 from 6 to 5
move 1 from 6 to 8
move 4 from 7 to 3
move 3 from 7 to 2
move 1 from 6 to 4
move 1 from 2 to 1
move 1 from 4 to 9
move 21 from 3 to 2
move 5 from 3 to 8
move 1 from 5 to 1
move 2 from 8 to 7
move 4 from 8 to 3
move 4 from 2 to 5
move 19 from 2 to 3
move 1 from 9 to 2
move 23 from 3 to 2
move 2 from 7 to 4
move 3 from 5 to 9
move 16 from 2 to 1
move 1 from 5 to 4
move 1 from 9 to 3
move 2 from 3 to 8
move 3 from 4 to 6
move 1 from 6 to 2
move 1 from 8 to 6
move 5 from 2 to 6
move 7 from 6 to 5
move 4 from 2 to 6
move 6 from 5 to 9
move 1 from 8 to 4
move 18 from 1 to 9
move 1 from 5 to 2
move 9 from 9 to 4
move 5 from 6 to 3
move 9 from 4 to 1
move 4 from 9 to 2
move 1 from 4 to 8
move 1 from 8 to 3
move 7 from 1 to 8
move 6 from 3 to 2
move 10 from 2 to 9
move 21 from 1 to 8
move 1 from 2 to 8
move 19 from 8 to 4
move 1 from 8 to 3
move 16 from 4 to 8
move 1 from 4 to 2
move 2 from 1 to 5
move 1 from 2 to 3
move 1 from 4 to 5
move 1 from 4 to 8
move 2 from 1 to 3
move 3 from 3 to 2
move 5 from 9 to 1
move 1 from 3 to 4
move 4 from 9 to 4
move 2 from 1 to 9
move 2 from 2 to 5
move 1 from 2 to 7
move 3 from 1 to 7
move 10 from 8 to 6
move 4 from 8 to 5
move 3 from 4 to 3
move 3 from 3 to 4
move 1 from 9 to 8
move 2 from 7 to 2
move 1 from 2 to 1
move 4 from 9 to 3`;

/**
 * [[N, Z], [D, C, M], [P]] // reverse it
 */

const [cratesRaw, instructions] = input.split('\n\n');

const createCrateMatrix = (raw: string) => {
  const crates = raw
    .split('\n')
    .slice(0, -1)
    .map((str) => str.replace(/    /g, ' _ ').replace(/\[|\]/g, '').split(' ').filter(Boolean));

  const matrix: string[][] = [[]];
  crates.forEach((crateRow, i) => {
    crateRow.forEach((crate, i2) => {
      if (!matrix[i2]) {
        matrix.push([]);
      }

      if (crate !== '_') matrix[i2].unshift(crate);
    });
  });
  return matrix;
};

const matrix = createCrateMatrix(cratesRaw);

const final = instructions.split('\n').reduce((prev, curr, i) => {
  const [howMany, from, to] = curr
    .replace(/[move | from | to ]/g, ' ')
    .split(' ')
    .filter(Boolean);

  let matrixUpdate = [...prev];

  // part 1
  // const crateToMove = matrixUpdate[Number(from) - 1].splice(-Number(howMany), Number(howMany)).reverse();
  // part 2
  const crateToMove = matrixUpdate[Number(from) - 1].splice(-Number(howMany), Number(howMany));
  crateToMove.map((item) => matrixUpdate[Number(to) - 1].push(item));
  console.log('cratetomove', crateToMove);

  return matrixUpdate;
}, matrix);

console.log('final', final.map((f) => f.pop()).join(''));
