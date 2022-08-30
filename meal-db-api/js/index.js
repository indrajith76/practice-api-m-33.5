const loadMeals = (meal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    const foodsContainer = document.getElementById('foods-container');
    foodsContainer.textContent = ``;
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
                    <button onclick="loadFoodDetails('${meal.idMeal}')" class="btn btn-outline-primary my-auto">Details</button>
                </div>
            </div>
        `
        foodsContainer.appendChild(foodDiv);
    });
}


const loadFoodDetails = async(mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    const res = await fetch(url)
    const data = await res.json()
    displayFoodDetails(data.meals[0]);
}

const displayFoodDetails = meals => {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
        <div class='d-flex'>
        <img src='${meals.strMealThumb}'/>
        <div class='mt-5 ms-3 me-5'>
            <h2>Food Name: ${meals.strMeal}</h2>
            <h5 class='text-secondary'>Category : ${meals.strCategory}</h5>
            <h5 class='text-secondary'>It's ${meals.strArea} food.</h5>
            <p><strong>Descriptions:</strong> ${meals.strInstructions.slice(0,400)}</p>
            <button class='btn btn-danger'>Order Now</button>
        </div>
        </div>
        <button onclick='cancelDetails()' class='cancel'>✖</button>
    `;
}

const cancelDetails = () => {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = ``;
}

document.getElementById('search-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    loadMeals(inputField.value);
    console.log(inputField.value);
})

loadMeals('')
