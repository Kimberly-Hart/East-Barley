import axios from 'axios';
// import { baseUrl } from '../apiKeys.json';

const getAnyProductById = (productId) => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44319/api/products/${productId}`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

export default { getAnyProductById };
