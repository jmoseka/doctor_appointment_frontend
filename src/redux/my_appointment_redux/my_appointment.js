import axios from 'axios';

const GET_DATA = 'doctor_appointment_frontend/my_appointment/getData';

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const fetchData = () => async () => {
  const url = 'http://localhost:3000/api/v1/users';
  const response = await axios.get(url);
  // const data = await response.data;
  // const myAppointmentData = [];
  console.log(response);
};

export default function myAppointmentReducer(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
}
