const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

span.style.fontSize = input.value + "px";

input.addEventListener("input", (event) => {
  const fontSize = event.currentTarget.value + "px";
  span.style.fontSize = fontSize;
});
