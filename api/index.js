import axios from './axios';

async function getPokeData() {
  try {
    const response = await axios.get(`/`);
    console.log('fgh123', response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
async function getPokeList() {
  try {
    const response = await axios.get(`/pokemon`);
    console.log('fgh', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const getPokeBulba = () =>
  axios.get('pokemon/1');

const obj = {
  getPokeData,
  getPokeList,
  getPokeBulba,
};

export default obj;