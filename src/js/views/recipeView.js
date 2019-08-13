import { elements } from './base';


export const clearRecipe = () => {
    elements.recipe.innerHTML = '';
}

export const renderRecipe = (recipe, isLiked) => {
  const markup = `
    <figure class="recipe__fig">
                <img src="${recipe.drinkImg}" alt="${recipe.drinkName}" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${recipe.drinkName}</span>
                </h1>
            </figure>
         <div class="recipe__info">
            <div class="recipe__details">
                <button class="recipe__love">
                    <svg class="header__likes">
                        <use href="img/icons.svg#icon-heart${isLiked ? '' : '-outlined'}"></use>
                    </svg>
                </button>
            </div>
        </div>
            <div class="recipe__ingredients">
            <h2 class="heading-2">Ingredients List</h2>
                <ul class="recipe__ingredient-list">
                  <li class="recipe__item">
                        <svg class="recipe__icon" >
                            <use href="img/icons.svg#icon-check"></use>
                        </svg >
                        <div class="recipe__ingredient">
                            ${recipe.ingredient1}
                        </div>
                    </li>
                    <li class="recipe__item">
                        <svg class="recipe__icon" >
                            <use href="img/icons.svg#icon-check"></use>
                        </svg >
                        <div class="recipe__ingredient">
                            ${recipe.ingredient2}
                        </div>
                    </li>
                    <li class="recipe__item">
                        <svg class="recipe__icon" >
                            <use href="img/icons.svg#icon-check"></use>
                        </svg >
                        <div class="recipe__ingredient">
                            ${recipe.ingredient3}
                        </div>
                    </li>
                    <li class="recipe__item">
                        <svg class="recipe__icon" >
                            <use href="img/icons.svg#icon-check"></use>
                        </svg >
                        <div class="recipe__ingredient">
                            ${recipe.ingredient4}
                        </div>
                    </li>
                    <li class="recipe__item">
                        <svg class="recipe__icon" >
                            <use href="img/icons.svg#icon-check"></use>
                        </svg >
                        <div class="recipe__ingredient">
                            ${recipe.ingredient5}
                        </div>
                    </li>
                    <li class="recipe__item">
                        <svg class="recipe__icon" >
                            <use href="img/icons.svg#icon-check"></use>
                        </svg >
                        <div class="recipe__ingredient">
                            ${recipe.ingredient6}
                        </div>
                    </li>
                    <li class="recipe__item">
                        <svg class="recipe__icon" >
                            <use href="img/icons.svg#icon-check"></use>
                        </svg >
                        <div class="recipe__ingredient">
                            ${recipe.ingredient7}
                        </div>
                    </li>
                    <li class="recipe__item">
                        <svg class="recipe__icon" >
                            <use href="img/icons.svg#icon-check"></use>
                        </svg >
                        <div class="recipe__ingredient">
                            ${recipe.ingredient8}
                        </div>
                    </li>
                    <li class="recipe__item">
                        <svg class="recipe__icon" >
                            <use href="img/icons.svg#icon-check"></use>
                        </svg >
                        <div class="recipe__ingredient">
                            ${recipe.ingredient9}
                        </div>
                    </li>
                    <li class="recipe__item">
                        <svg class="recipe__icon" >
                            <use href="img/icons.svg#icon-check"></use>
                        </svg >
                        <div class="recipe__ingredient">
                            ${recipe.ingredient10}
                        </div>
                    </li>  
                </ul>
            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">How to make it</h2>
                <p class="recipe__directions-text">
                   <span>${recipe.instructions}</span>
                </p>
            </div>
  `;
  elements.recipe.insertAdjacentHTML('afterbegin', markup);
};


