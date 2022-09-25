/* eslint-disable camelcase */
import axios from 'axios';
import localStorages from '../../helpers/localStorage';

const GET_DATA = 'doctor_appointment_frontend/my_appointment/getData';
const DELETE_APPOINTMENT = 'doctor_appointment_frontend/my_appointment/deleteAppointment';

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const deleteAppointment = (id) => ({
  type: DELETE_APPOINTMENT,
  id,
});

export const deleteAppointmentAction = (payload) => async (dispatch) => {
  axios
    .delete(`http://127.0.0.1:3000/api/v1/users/3/reservations/${payload}`)
    .then((res) => {
      dispatch(deleteAppointment(res.data));
    });
};

const { id } = localStorages.getUser().user;

export const fetchData = () => async (dispatch) => {
  const url = `http://127.0.0.1:3000/api/v1/users/${id}/reservations`;
  const response = await axios.get(url);
  const data = await response.data;
  const arr = [];
  // console.log(typeof (data));
  data.forEach((element) => {
    const { city, date_reserved } = element;
    const { name, id } = element.doctor;
    arr.push({
      appointmentId: id,
      cityName: city,
      dateReserved: date_reserved,
      doctorName: name,
    });
  });
  dispatch(getData(arr));
};

export default function myAppointmentReducer(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    case DELETE_APPOINTMENT:
      return state.filter((appointment) => appointment.appointmentId !== action.payload.id);
    default:
      return state;
  }
}
