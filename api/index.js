import axios from './axios';

const getPokeData = () =>
  axios.get(`/`);

async function getPokeList() {
  try {
    const response = await axios.get(`/pokemon`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}



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