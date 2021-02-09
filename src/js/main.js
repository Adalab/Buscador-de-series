'use strict';

let movies = [];
const inputElement = document.querySelector('.js-input');
const moviesContainer = document.querySelector('.js-results-list');
const placeholderImg = 'https://via.placeholder.com/210x295/ffffff/666666/?text=Imagen no encontrada';
const filterInput = document.querySelector('.js-filter');

//función api
function getDataFromApi() {
  const inputValue = inputElement.value;
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

// filtrar
function handleFilter() {
  console.log('filtrando');
  getDataFromApi();

}

filterInput.addEventListener('keyup', handleFilter);


// Pintar las películas

function paintMovies() {
  let htmlCode = '';
  for (const movie of movies) {
    console.log(movie.image);
    htmlCode += `<li  id="${movie.id}">`;
    htmlCode += `<div>`;
    if (movie.image !== null) {
      htmlCode += `<img src="${movie.image.medium}" alt="img"/>`;
    } else {
      htmlCode += `<img src="${placeholderImg}" alt="img"/>`;
    }
    htmlCode += `</div>`;
    htmlCode += `<h3>${movie.name}</h3>`;
    htmlCode += `</li>`;
  }
  moviesContainer.innerHTML = htmlCode;
}

