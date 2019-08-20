# Drinkify
This site was intended as a bartenders' best friend! A user can search through hundreds of drink recipes and like various recipes.

## Motivation
Having worked in the service industry for many years, much of which was spent bartending, I found that there is always at least one customer who orders a drink that I had never heard of. At the time the common go to was google. I wanted to design an app that a bartendender (or cocktail enthusiast) could use as a drink recipe reference.

## Screenshots
![Drinkify Cocktail Recipe Search](https://res.cloudinary.com/danieltisue/image/upload/v1566310221/Screen_Shot_2019-08-20_at_7.56.30_AM.png)

## Tech/framework used
<b>Built with</b>
- Html, CSS, JavaScript, Webpack, Babel
### Dependencies
    babel/polyfill
    axios
### DevDependencies
    babel/core
    babel/preset-env
    babel-loader
    html-webpack-plugin
    webpack-dev-server

## Features
This site uses AXIOS for http requests, MVC architecture, local browser storage to remember users recipe likes, async functions, DOM manipulation. 

## Installation
1. Clone or download repository.
1. Install webpack cli: https://webpack.js.org/
1. Install Babel: https://babeljs.io/
1. Configure webpack and Babel: see webpack.config.js & .babelrc files for reference.
1. Command line prompt: `npm run start` (to start app).
1. Search for drinks!

## API Reference
The Cocktail DB: https://www.thecocktaildb.com/api.php

### Bugs
- Pagination was removed due to showing results as *undefined* after selecting other pages.
- Ingredients from recipeView need to displayed better because currently both *null* and *undefined* values are displayed.

## More Info
Currently this project is not yet deployed. The more important features such as bug fixes, and mobile responsiveness are being developed currently. 
 