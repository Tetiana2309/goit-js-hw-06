const widget = document.querySelector(".widget");
const colorText = widget.querySelector(".color");
const changeBtn = widget.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
});
