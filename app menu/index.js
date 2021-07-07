 // fetch cherche moi ce lien ve que tu es aller me chercher j'aimerai que tu me l'affiche .then(res) res.json veut dire je
 // te converti en JS une fois converti affiche moi c'est avec .then  tout ce que j'ai mis avant je vais l'appeler data
 // async sous forme asynchrone va toujours avec await sinon il risque de ne pas afficher certaine chose

 // ici on a les constante et les variable évolutif
const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");
let meals = [];


// la fonction asynchrone pour fetcher
 async function fetchMeals(search) {
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((data) => (meals = data.meals));

  console.log(meals);
}


// fonction affichage
function mealsDisplay() {
  if (meals === null) {
    result.innerHTML = "<h2>Aucun résultat</h2>";
  } else {
    meals.length = 12;

    result.innerHTML = meals
      .map((meal) => {
        let ingredients = [];

        for (i = 1; i < 21; i++) {
          if (meal[`strIngredient${i}`]) {
            let ingredient = meal[`strIngredient${i}`];
            let measure = meal[`strMeasure${i}`];

            ingredients.push(`<li>${ingredient} - ${measure}</li>`);
          }
        }

        return `
            <li class="card">
              <h2>${meal.strMeal}</h2>
              <p>${meal.strArea}</p>
              <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
              <ul>${ingredients.join("")}</ul>
            </li>
            `;
      })
      .join("");
  }
}



// les evenements
input.addEventListener("input", (e) => {
  fetchMeals(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mealsDisplay();
});

