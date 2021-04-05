const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("#ingredients");
const createlist = (ingredients) => {
  const itemCreate = document.createElement("li");
  itemCreate.textContent = ingredients;
  return itemCreate;
};
const listElement = ingredients.map(createlist);
ingredientsEl.append(...listElement);




