import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    // key is always 1 so don't need a key const
    try { 

      let res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.query}`);
      this.result = res.data.drinks;
      console.log(this.result);
    } catch(err) {
      alert(`Oh shit ${err}`);
    }
  }
}