import axios from 'axios';
// import { baseUrl } from '../apiKeys.json';

const getUserByUID = (uid) => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44319/api/users/firebase/${uid}`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

export default { getUserByUID };
