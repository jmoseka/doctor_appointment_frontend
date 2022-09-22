import axios from 'axios';
const GET_DATA = 'doctor_appointment_frontend/my_appointment/getData';

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
