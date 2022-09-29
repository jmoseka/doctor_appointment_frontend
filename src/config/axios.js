import axiosInstance from 'axios';

const { jwt } = JSON.parse(localStorage.getItem('user')) || '';

export default axiosInstance.create({
  baseURL: 'https://hidden-citadel-49495.herokuapp.com',
  headers: { Authorization: jwt },
});
