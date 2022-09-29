function nextEmpty(puzzle: Array<Array<number>>) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (puzzle[i][j] === 0) return [i, j];
    }
  }
  return [-1, -1];
}

function checkRow(puzzle: Array<Array<number>>, row: number, value: number) {
  for (let i = 0; i < puzzle[row].length; i++) {
    if (puzzle[row][i] === value) return false;
  }

  return true;
}

function checkColumn(
  puzzle: Array<Array<number>>,
  column: number,
  value: number
) {
  for (let i = 0; i < puzzle.length; i++) {
    if (puzzle[i][column] === value) return false;
  }

  return true;
}

function checkSquare(
  puzzle: Array<Array<number>>,
  row: number,
  column: number,
  value: number
) {
  let boxRow = Math.floor(row / 3) * 3;
  let boxCol = Math.floor(column / 3) * 3;

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (puzzle[boxRow + r][boxCol + c] === value) return false;
    }
  }

  return true;
}

function checkValue(
  puzzle: Array<Array<number>>,
  row: number,
  column: number,
  value: number
): boolean {
  if (
    checkRow(puzzle, row, value) &&
    checkColumn(puzzle, column, value) &&
    checkSquare(puzzle, row, column, value)
  )
    return true;

  return false;
}

export function solve(puzzle: Array<Array<number>>): Array<Array<number>> {
  const emptySpot = nextEmpty(puzzle);
  const row = emptySpot[0];
  const col = emptySpot[1];

  if (row === -1) return puzzle;

  for (let num = 1; num <= 9; num++) {
    if (checkValue(puzzle, row, col, num)) {
      puzzle[row][col] = num;
      solve(puzzle);
    }
  }

  if (nextEmpty(puzzle)[0] !== -1) puzzle[row][col] = 0;

  return puzzle;
}
