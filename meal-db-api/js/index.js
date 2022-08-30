const loadMeals = (meal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    const foodsContainer = document.getElementById('foods-container');
    meals.forEach(meal => {
        const foodDiv = document.createElement('div');
        foodDiv.classList.add('col');
        foodDiv.innerHTML = `
            <div class="card position-relative">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 80)}</p>
                </div>
                <div class='details-div'>
                    <button class="btn btn-outline-primary my-auto">Details</button>
                </div>
            </div>
        `
        foodsContainer.appendChild(foodDiv);
    });
}


loadMeals('f')