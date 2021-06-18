import css from "./css/styles.css";
import normalize from "./css/modern-normalize.css";
import modalCss from "./css/modal.css";
import refs from "./js/refs.js";
import searchItemTemplate from "./template/countrySearchItem.hbs";
import modalCountryItem from "./template/modalCountryItem.hbs";
import countriesListItem from "./template/countriesListItem.hbs";

import arr from "./db/countries.json";

const { searchForm, searchResults, coutriesList, modal, modalContent } = refs;

searchForm.addEventListener("submit", onFormSend);

function onFormSend(event) {
  event.preventDefault();

  let search = event.target.elements.search.value.toLowerCase();
  console.log(search);

  let country = arr.filter((elem) => {
    return elem.name.toLowerCase().includes(search);
  });

  console.log(country);
  let items = searchItemTemplate(country);

  searchResults.insertAdjacentHTML("afterbegin", items);

  [...searchResults.children].forEach((elem) => {
    elem.addEventListener("click", (e) => {
      let search = e.target.textContent.trim();
      let country = arr.filter((elem) => elem.name === search);

      let items = modalCountryItem(country);

      modalContent.insertAdjacentHTML("afterbegin", items);
      modal.classList.remove("is-hidden");
    });
  });
}

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    modal.classList.add("is-hidden");
    clearModalContent();
  }
});

modal.addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    modal.classList.add("is-hidden");
    clearModalContent();
  }
});

window.addEventListener("DOMContentLoaded", getAllCountries);

function getAllCountries(e) {
  let items = countriesListItem(arr);

  coutriesList.insertAdjacentHTML("afterbegin", items);

  [...coutriesList.children].forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const chooseCountry = elem.textContent.trim();
      console.log(chooseCountry);
      let country = arr.filter((elem) => elem.name === chooseCountry);
      console.log(country);

      let items = modalCountryItem(country);
      modalContent.insertAdjacentHTML("afterbegin", items);
      modal.classList.remove("is-hidden");
    });
  });
}

function clearModalContent() {
  modalContent.innerHTML = "";
}
