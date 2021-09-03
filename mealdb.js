const searchFood = () => {
    const searchField =document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value ='';
    if (searchText == ''){
        console.log('Please write something to display')
    }
    else{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResults(data.meals))
    }
    
    
};
const displaySearchResults = meals => {
    const searchResult = document.getElementById('search-result');
    // clear innerHTML
    searchResult.textContent = '';
    if(meals.length == 0){
        console.log('please put value')
    }
    meals.forEach( meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div onclick = "loadSearchResults(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            </div>
          </div>
        `
        searchResult.appendChild(div);
    })
};


const loadSearchResults = mealId => {
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDeatils(data.meals[0]))
};

const displayMealDeatils = meal => {
    console.log(meal)
    const mealDetail = document.getElementById('meal-detail');
    const div = document.createElement('div');
    mealDetail.textContent ='';
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
          <a href="meal.strYoutube" class="btn btn-primary">Go somewhere</a>
    `
    mealDetail.appendChild(div);
};