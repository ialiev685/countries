import axiosFetch from "./fetch/axiosFetch.js";
import pexelsFetch from "./fetch/clientFetch.js";
import classicFetch from "./fetch/classicFetch.js";
import createGallery from "./createGallery.js";
import refs from "./refs.js";
const { searchForm } = refs;

const KEY = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";
const perPage = "10";

const BASE_URL = "https://api.pexels.com/";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let query = e.target.elements.search.value.toLowerCase();
  const queryParams = `v1/search?query=${query}&per_page=${perPage}`;
  //   axiosFetch(BASE_URL + queryParams, KEY, createGallery, searchForm);
  pexelsFetch(KEY, query, perPage, createGallery, searchForm);
  //   classicFetch(KEY, BASE_URL + queryParams, createGallery, searchForm);
});
