import { elements } from './base';

export const toggleLikeBtn = isLiked => {
  const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
  document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`);
  //img/icons.svg#icon-heart-outlined
};

export const toggleLikeMenu = numLikes => {
  elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
};

export const renderLike = like => {
  const markup = `
    <li>
        <a class="likes__link" href="#${like.id}">
            <figure class="likes__fig">
                <img src="${like.img}" alt="${like.title}">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${limitRecipeTitle(like.title)}</h4>
            </div>
        </a>
    </li>
  `;
  elements.likesList.insertAdjacentHTML('beforeend', markup);
}

export const deleteLike = id => {
  const el = document.querySelector(`.likes__link[href*="${id}"]`).parentElement;
  if (el) el.parentElement.removeChild(el);
}

export const limitRecipeTitle = (title, limit = 10) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(' ').reduce((acc, cur) =>{
      if(acc + cur.length <= limit){
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${newTitle.join(' ')} ...`;
  } 
  return title;
}