import axiosInstance from 'axios';

const { jwt } = JSON.parse(localStorage.getItem('user')) || '';

export default axiosInstance.create({
  baseURL: 'http://localhost:3000',
  headers: { Authorization: jwt },
});
