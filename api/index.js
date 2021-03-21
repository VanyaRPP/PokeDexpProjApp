import axios from './axios';

const getPokeData = () =>
  axios.get(`/`);

const getPokeList = () =>
  axios.get(`/pokemon`);

const getPokeBulba = () =>
  axios.get('pokemon/1');

const po = getPokeData()

console.log('po:', po);

const obj = {
  getPokeData,
  getPokeList,
  getPokeBulba,
};

export default obj;