const allIngredientsDOM = document.querySelectorAll('li');

const ingredientai = [];

for (let i = 0; i < allIngredientsDOM.length; i++) {
    const item = allIngredientsDOM[i];
    const itemName = item.innerText;
    const nameInUpperCase = itemName.toUpperCase();
    console.log(itemName);

    ingredientai.push(nameInUpperCase);
}

console.log(ingredientai);