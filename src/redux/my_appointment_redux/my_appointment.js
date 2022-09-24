/* eslint-disable camelcase */
import { NotificationManager } from 'react-notifications';
import axios from '../../config/axios';

const GET_DATA = 'doctor_appointment_frontend/my_appointment/getData';
const CREATE_RESERVE = 'doctor_appointment_frontend/my_appointment/RESERVE';

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const createReserve = (payload) => ({
  type: CREATE_RESERVE,
  payload,
});

export const fetchData = () => async (dispatch) => {
  const url = '/api/v1/users/3/reservations';
  const response = await axios.get(url);
  const data = await response.data;
  const arr = [];
  data.forEach((element) => {
    const { city, date_reserved } = element;
    const { name, id } = element.doctor;
    arr.push({
      docId: id,
      cityName: city,
      dateReserved: date_reserved,
      doctorName: name,
    });
  });
  dispatch(getData(arr));
};

export const reserveAction = (payload) => async (dispatch) => {
  axios
    .post(`/api/v1/users/${payload.user_id}/reservations`, payload)
    .then((res) => {
      dispatch(createReserve(res.data));
      NotificationManager.success(
        'You have reserved a doctor!',
        'Successful!',
        2000,
      );
    })
    .catch((error) => {
      dispatch(createReserve(error.response.data));
      NotificationManager.error('Error while creating new book!', 'Error!');
    });
};

export default function myAppointmentReducer(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    case CREATE_RESERVE:
      return [...state, action.payload];
    default:
      return state;
  }
}
