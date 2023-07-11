const categoriesList = document.querySelector("#categories");
const categories = categoriesList.children;
console.log(`Number of categories: ${categories.length}`);

Array.from(categories).forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}\nElements: ${categoryItems}`);
});
