import "./style.css";
import { solve } from "./sudoku";

function copyPuzz(puzzle: Array<Array<number>>): Array<Array<number>> {
  let result = [];
  for (let i = 0; i < 9; i++) {
    let rowres = [];
    for (let j = 0; j < 9; j++) {
      rowres.push(puzzle[i][j]);
    }
    result.push(rowres);
  }
  return result;
}

function fillBoard(board: Array<Array<number>>) {
  for (let i = 0; i < 81; i++) {
    let populatedBoard = board.reduce((acc, cur) => acc.concat(cur), []);
    let num = document.createTextNode(populatedBoard[i].toString());
    document.getElementById(`cell-${i + 1}`)?.appendChild(num);
  }
}

let puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

let board = copyPuzz(puzzle);
fillBoard(board)