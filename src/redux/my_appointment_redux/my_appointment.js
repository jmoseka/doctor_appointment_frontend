/* eslint-disable camelcase */
import axios from 'axios';

const GET_DATA = 'doctor_appointment_frontend/my_appointment/getData';

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const fetchData = () => async (dispatch) => {
  const url = 'http://127.0.0.1:3000/api/v1/users/3/reservations';
  const response = await axios.get(url);
  const data = await response.data;
  const arr = [];
  // console.log(typeof (data));
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

export default function myAppointmentReducer(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
}
