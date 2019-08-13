import axios from 'axios';
// import { key, proxy } from '../config';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`);
        this.drinkName = res.data.drinks[0].strDrink;
        this.drinkImg = res.data.drinks[0].strDrinkThumb;
      this.ingredient1 = res.data.drinks[0].strIngredient1 + ' ' + res.data.drinks[0].strMeasure1;
      this.ingredient2 = res.data.drinks[0].strIngredient2 + ' ' + res.data.drinks[0].strMeasure2;
      this.ingredient3 = res.data.drinks[0].strIngredient3 + ' ' + res.data.drinks[0].strMeasure3;
      this.ingredient4 = res.data.drinks[0].strIngredient4 + ' ' + res.data.drinks[0].strMeasure4;
      this.ingredient5 = res.data.drinks[0].strIngredient5 + ' ' + res.data.drinks[0].strMeasure5;
      this.ingredient6 = res.data.drinks[0].strIngredient6 + ' ' + res.data.drinks[0].strMeasure6;
      this.ingredient7 = res.data.drinks[0].strIngredient7 + ' ' + res.data.drinks[0].strMeasure7;
      this.ingredient8 = res.data.drinks[0].strIngredient8 + ' ' + res.data.drinks[0].strMeasure8;
      this.ingredient9 = res.data.drinks[0].strIngredient9 + ' ' + res.data.drinks[0].strMeasure9;
      this.ingredient10 = res.data.drinks[0].strIngredient10 + ' ' + res.data.drinks[0].strMeasure10;
      this.ingredient11 = res.data.drinks[0].strIngredient11 + ' ' + res.data.drinks[0].strMeasure11;
      this.ingredient12 = res.data.drinks[0].strIngredient12 + ' ' + res.data.drinks[0].strMeasure12;
      this.ingredient13 = res.data.drinks[0].strIngredient13 + ' ' + res.data.drinks[0].strMeasure13;
      this.ingredient14 = res.data.drinks[0].strIngredient14 + ' ' + res.data.drinks[0].strMeasure14;
      this.ingredient15 = res.data.drinks[0].strIngredient15 + ' ' + res.data.drinks[0].strMeasure15;
      this.instructions = res.data.drinks[0].strInstructions;
      
    } catch (error) {
      console.log(error);
      alert('Something went wrong :(');
    }
  } 
};

