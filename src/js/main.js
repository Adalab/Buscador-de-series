/* eslint-disable no-console */
'use strict';

let series = [];
const inputElement = document.querySelector('.js-input');
const inputValue = inputElement.value;
//CREAR función y meter api dentro
function getDataFromApi() {
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      for (let index = 0; index < data.length; index++) {
        const showList = data[index].show;
        series.push(showList);
      }
      console.log(data);
    });
} //start api
getDataFromApi();
