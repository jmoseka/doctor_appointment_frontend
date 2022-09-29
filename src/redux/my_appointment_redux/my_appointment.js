/* eslint-disable camelcase */
import { NotificationManager } from 'react-notifications';
import axios from '../../config/axios';
import localStorages from '../../helpers/localStorage';

const GET_DATA = 'doctor_appointment_frontend/my_appointment/getData';
const CREATE_RESERVE = 'doctor_appointment_frontend/my_appointment/RESERVE';
const DELETE_APPOINTMENT = 'doctor_appointment_frontend/my_appointment/deleteAppointment';

const { id } = localStorages.getUser().user || '';
const userID = id;

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const createReserve = (payload) => ({
  type: CREATE_RESERVE,
  payload,
});

export const deleteAppointment = (id) => ({
  type: DELETE_APPOINTMENT,
  id,
});

export const deleteAppointmentAction = (payload) => async (dispatch) => {
  axios
    .delete(`/api/v1/users/${userID}/reservations/${payload}`)
    .then((res) => {
      dispatch(deleteAppointment(res.data));
    });
};

export const fetchData = () => async (dispatch) => {
  // eslint-disable-next-line no-template-curly-in-string
  const url = `/api/v1/users/${userID}/reservations/`;
  const response = await axios.get(url);
  const data = await response.data;
  const arr = [];
  data.forEach((element) => {
    const { city, date_reserved, id } = element;
    const { name } = element.doctor;
    arr.push({
      appointmentId: id,
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
      NotificationManager.error('Error while creating the Reservation!', 'Error!');
    });
};

export default function myAppointmentReducer(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    case CREATE_RESERVE:
      return [...state, action.payload];
    case DELETE_APPOINTMENT:
      return state.filter((appointment) => appointment.appointmentId !== action.payload.id);

    default:
      return state;
  }
}
