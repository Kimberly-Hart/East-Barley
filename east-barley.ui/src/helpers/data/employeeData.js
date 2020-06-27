import axios from 'axios';

const baseURL = 'https://localhost:44319/api';

const getEmployeeByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/users/employee/${userId}`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

const getInvoicesBySalesRepId = (salesRepId) => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/invoices/salesRep/${salesRepId}`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

const totalSalesBySalesRepId = (salesRepId) => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/invoices/salesRep/${salesRepId}/totalSales`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

const monthlySalesBySalesRepId = (salesRepId, month, year) => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/invoices/salesRep/${salesRepId}/monthlySales/${month}/${year}`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

export default {
  getEmployeeByUserId,
  getInvoicesBySalesRepId,
  totalSalesBySalesRepId,
  monthlySalesBySalesRepId,
};
