import axios from 'axios';
// import { baseUrl } from '../apiKeys.json';

const getAllBooks = () => new Promise((resolve, reject) => {
  axios.get('https://localhost:44319/api/products/books/all')
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

export default { getAllBooks };
