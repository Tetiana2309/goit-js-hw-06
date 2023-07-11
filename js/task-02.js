const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("#ingredients");

const items = ingredients.map((text) => {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("item");
  return li;
});

ul.append(...items);
