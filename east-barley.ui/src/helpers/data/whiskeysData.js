import axios from 'axios';
// import { baseUrl } from '../apiKeys.json';

const getAllWhiskeys = () => new Promise((resolve, reject) => {
  axios.get('https://localhost:44319/api/products/whiskey/all')
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

export default { getAllWhiskeys };
