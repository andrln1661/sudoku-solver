import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

for (let i = 0; i < 9; i++) {
  let newCell = document.createElement("div");
  newCell.classList.add("big_cell");
  newCell.classList.add(`big-cell-${i}`);
  for (let j = 0; j < 9; j++) {
    let otherCell = document.createElement("div");
    otherCell.classList.add("cell");
    otherCell.classList.add(`cell-${(i * 9) + (j + 1)}`);
    newCell.appendChild(otherCell);
  }
  app.appendChild(newCell);
}
