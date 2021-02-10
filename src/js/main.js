'use strict';

let movies = [];
let favorites = [];
const inputElement = document.querySelector('.js-input');
const moviesContainer = document.querySelector('.js-results-list');
const placeholderImg = '//via.placeholder.com/210x295/ffffff/666666/?text=Imagen no encontrada';
const formElement = document.querySelector('.js-form');

//función api
function getDataFromApi() {
  const inputValue = inputElement.value;
  fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      movies = [];
      for (let index = 0; index < data.length; index++) {
        const showList = data[index].show;
        movies.push(showList);
      }
      paintMovies();
      setInLocalStorage();
    });
}
// evitar que envíe el input por defecto y filtrar
function handleForm(ev) {
  ev.preventDefault();
  getDataFromApi();
}
formElement.addEventListener('submit', handleForm);


// Pintar las películas

function paintMovies() {
  let htmlCode = '';
  for (const movie of movies) {
    let isFavoriteClass = '';
    if (isFavoriteMovie(movie)) {
      isFavoriteClass = 'show-background';
    } else {
      isFavoriteClass = '';
    }
    htmlCode += `<li  class="serie__list js-movie ${isFavoriteClass}"id="${movie.id}">`;
    htmlCode += `<div class="">`;
    if (movie.image !== null) {
      htmlCode += `<img class="serie__image" src="${movie.image.medium}" alt="img"/>`;
    } else {
      htmlCode += `<img class="serie__image" src="${placeholderImg}" alt="img"/>`;
    }
    htmlCode += `</div>`;
    for (const movieColor of movies) {
      htmlCode += `<div class="movie__color"style="background-color: #${movieColor}"></div>`;
    }
    htmlCode += `<h3 class="serie__name">${movie.name}</h3>`;
    htmlCode += `</li>`;
  }
  moviesContainer.innerHTML = htmlCode;
  listenMovieEvents();
}

//Escuchar movie events, la ejecuto dentro de la función de pintar porque la ejecutamos en es momento

function listenMovieEvents() {
  const movieElements = document.querySelectorAll('.js-movie');
  for (const movieElement of movieElements) {
    movieElement.addEventListener('click', handleMovie);
  }
}

//Aquí verifico si la peli que clico es favorita
function isFavoriteMovie(movie) {
  const favoriteFound = favorites.find(favorite => {
    return favorite.id === movie.id;
  });
  if (favoriteFound === undefined) {
    return false;
  } else {
    return true;
  }
}

function handleMovie(ev) {
  const clickedMovieId = parseInt(ev.currentTarget.id);
  const favoritesFoundIndex = favorites.findIndex(function (favorite) {
    return favorite.id === clickedMovieId;
  });
  if (favoritesFoundIndex === -1) {
    const movieFound = movies.find(function (movie) {
      return movie.id === clickedMovieId;
    });
    favorites.push(movieFound);
  } else {
    favorites.splice(favoritesFoundIndex, 1);
  }
  paintMovies();
  paintFavorites();
}
// Pintar las peliculas favoritas en una lista
function paintFavorites() {
  let htmlCode = '';
  for (const favorite of favorites) {
    htmlCode += `<li class="js-fav" id="${favorite.id}">`;
    htmlCode += `<h2 class="js-favTitle"${favorite.name}</h2>`;
    const moviesImg = favorite.image;
    if (moviesImg === null) {
      htmlCode += `<img class="sectionFav__list--img" src="${placeholderImg}">`;
    } else {
      htmlCode += `<img class="sectionFav__list--img" src="${moviesImg.medium}">`;
    }
    htmlCode += `</li>`;
  }
  const favCointer = document.querySelector('.js-fav-list');
  favCointer.innerHTML = htmlCode;
}
//guarda en localStorage
function setInLocalStorage() {
  const stringMovies = JSON.stringify(favorites);
  localStorage.setItem('favorites', stringMovies);
}
// //recuperar del localStorage y si no llamar al api
function getFromLocalStorage() {
  const localStorageMovies = localStorage.getItem('favorites');
  if (localStorageMovies === null) {
    getDataFromApi();
  } else {
    const arrayMovies = JSON.parse(localStorageMovies);
    favorites = arrayMovies;
    paintFavorites();
  }
}

//reset
// const resetElement = document.querySelector('.js-reset');
// function resetButton() {
//   localStorage.clear('favouriteMovies');
//   favorite = [];
//   paintFavorites();
// }
// resetElement.addEventListener('click', resetButton);

getFromLocalStorage();