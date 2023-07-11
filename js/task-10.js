function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = inputEl.valueAsNumber;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const boxEl = document.createElement("div");
    boxEl.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background-color: ${getRandomHexColor()};
        margin-bottom: 10px;
      `;
    boxes.push(boxEl);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
