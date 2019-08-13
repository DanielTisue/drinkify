// Global app controller
import Search from './models/Search';
import Recipe from './models/Recipe';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';

//=====Global State of the App=====
// * search object
// * current recipe object
// * liked drink recipes

const state = {};

//============Search Controller=======================

const controlSearch = async () => {
  // 1) get the query from the view
  const query = searchView.getInput(); //TODO 
  //console.log(query);

  if (query) {
    // 2) New search object and add it to state
    state.search = new Search(query);

    // 3) prepare interface for what's going to happen
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    try {

      // 4) Search for recipes.
      await state.search.getResults(); 

      // 5) render results on UI
      //console.log(state.search.result);
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (err) {
      alert("Something is wrong with the search");
      console.log(err);
      clearLoader();
    }
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    };
});

//============Recipe Controller=======================

const controlRecipe = async () => {
  // Get ID from the url
  const id = window.location.hash.replace('#', '');
  //console.log(id);

  if (id) {
    //prepare the UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    //highlight selected search item
    if (state.search) searchView.highlightSelected(id);

    //create a new recipe obj
    state.recipe = new Recipe(id);

    try {
      //get recipe data
      await state.recipe.getRecipe();
      //console.log(state.recipe);
      // Render Recipe
      clearLoader();
      recipeView.renderRecipe(
        state.recipe,
        state.likes.isLiked(id)
        );

    } catch (err) {
      alert('Error processing recipe');
      console.log(err);
    }
  }
};

['hashchange', 'load']. forEach(event => window.addEventListener(event, controlRecipe));


//============Likes Controller=======================
const controlLike = () => {
  if(!state.likes) state.likes = new Likes();
   const currentID = state.recipe.id
  
 // console.log(state.recipe.id);

  //User has not yet liked current recipe
  if(!state.likes.isLiked(currentID)) {
    //Add like to the state
  const newLike = state.likes.addLike(
    currentID,
    state.recipe.drinkName,
    state.recipe.drinkImg,
  );
    //Toggle like button
    likesView.toggleLikeBtn(true);
    //Add Like to UI list
    likesView.renderLike(newLike);
    console.log(state.likes);
  //User has liked the current recipe 
  } else {
    //Remove like from the state
    state.likes.deleteLike(currentID);
    //Toggle like button
    likesView.toggleLikeBtn(false);
    //Remove Like from UI list
    likesView.deleteLike(currentID);
    console.log(state.likes);
  }
  likesView.toggleLikeMenu(state.likes.getNumLikes());
};

window.addEventListener('load', () => {
  state.likes = new Likes();
  state.likes.readStorage();
  likesView.toggleLikeMenu(state.likes.getNumLikes());
  state.likes.likes.forEach(like => likesView.renderLike(like));
});

// Handle Like Button
elements.recipe.addEventListener('click', e => {
   if (e.target.matches('.recipe__love, .recipe__love *')){
      //Like Controller
      controlLike();
   }
});