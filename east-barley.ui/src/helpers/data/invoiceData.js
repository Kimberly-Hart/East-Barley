import axios from 'axios';
// import { baseUrl } from '../apiKeys.json';

const getInvoicesByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44319/api/invoices/users/${userId}`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

const getLineItemsByInvoiceId = (invoiceId) => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44319/api/invoices/lineItems/${invoiceId}`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

export default { getInvoicesByUserId, getLineItemsByInvoiceId };
