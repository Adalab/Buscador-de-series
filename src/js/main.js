'use strict';

let movies = [];
const inputElement = document.querySelector('.js-input');
const inputValue = inputElement.value;
const moviesContainer = document.querySelector('.js-fav-list');
const placeholderImg =
  'https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com';
//función api
function getDataFromApi() {
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      for (let index = 0; index < data.length; index++) {
        const showList = data[index].show;
        movies.push(showList);
      }
      paintMovies();
    });
}
// Pintar las películas

function paintMovies() {
  let htmlCode = '';
  for (let index = 0; index < movies.length; index++) {
    const name = movies[index].name;
    const image = movies[index].image;
    const id = movies[index].id;
    htmlCode += `<li class="movie-target js-movieTarget" id="${id}">`;
    htmlCode += `<div class="imageContainer"`;
    if (image) {
      htmlCode += `<img src"${image.medium}" class="movie-img js-movie-image" alt="img"/>`;
    } else {
      htmlCode += `<img src"${placeholderImg}" class="movie-img js-movie-image" alt="img"/>`;
      htmlCode += `</div>`;
    }

    htmlCode += `<h3 class="movie-title js-movieTitle">${name}</h3>`;
    htmlCode += `</li>`;
  }
  moviesContainer.innerHTML = htmlCode;
}

paintMovies();
//start api
getDataFromApi();
