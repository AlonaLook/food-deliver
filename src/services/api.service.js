import axios from 'axios';

import { api, apiUrl } from '../config';

const get = (url = '', params = {}) => {
  return axios.get(`${apiUrl}/${url}`,{ params });
};

const getHomeData = () => {
  return get(api.home);
};

const getComplexesData = () => {
  return get(api.complexes);
};

const getCustomData = () => {
  return get(api.custom);
};

const getHeaderData = () => {
  return get(api.header);
};

const getContactData = () => {
  return get(api.contact)
};

const getPizzaData = () => {
  return get(api.pizza)
};

const getSushiData = () => {
  return get(api.sushi);
};

const getDishesData = () => {
  return get(api.dishes);
};

const getDrinksData = () => {
  return get(api.drinks);
};

const getFooterData = () => {
  return get(api.footer);
};

const getSearchData = (query) => {
  return get(api.search, { query });
};

const getCocktailsData = () => {
  return get(api.cocktails);
};

const getHotDrinksData = () => {
  return get(api.hotDrinks);
};

const getVirginDrinksData = () => {
  return get(api.virginDrinks);
};


export default {
  getHomeData,
  getComplexesData,
  getCustomData,
  getHeaderData,
  getFooterData,
  getContactData,
  getPizzaData,
  getSushiData,
  getDishesData,
  getDrinksData,
  getSearchData,
  getCocktailsData,
  getHotDrinksData,
  getVirginDrinksData
};

