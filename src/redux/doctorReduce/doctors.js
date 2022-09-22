import axios from '../../config/axios';

// const BASE_URL = 'http://localhost:3000/api/v1/doctors;

const GET_DOCTORS = 'DOCTOR_APPOINTMENT/GET_DOCTORS';
const CREATE_DOCTOR = 'DOCTOR_APPOINTMENT/CREATE_DOCTOR';
const DELETE_DOCTOR = 'DOCTOR_APPOINTMENT/DELETE_DOCTOR';

const doctorsState = [];

const getDoctors = (payload) => ({
  type: GET_DOCTORS,
  payload,
});

const createDoctor = (payload) => ({
  type: CREATE_DOCTOR,
  payload,
});

const deleteDoctor = (payload) => ({
  type: DELETE_DOCTOR,
  payload,
});

export const getDoctorsAction = () => async (dispatch) => {
  axios
    .get('api/v1/doctors')
    .then((res) => {
      dispatch(getDoctors(res.data));
    })
    .catch((error) => {
      dispatch(getDoctors(error.response.data));
    });
};

export const createDoctorAction = (payload) => async (dispatch) => {
  axios
    .post('api/v1/doctors', payload)
    .then((res) => {
      dispatch(createDoctor(res.data));
    })
    .catch((error) => {
      dispatch(createDoctor(error.response.data));
    });
};

export const deleteDoctorAction = (payload) => async (dispatch) => {
  axios
    .delete(`api/v1doctors/${payload}`)
    .then((res) => {
      dispatch(deleteDoctor(res.data));
    });
};

const doctorsReducer = (state = doctorsState, action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return action.payload;
    case CREATE_DOCTOR:
      return [...state, action.payload];
    case DELETE_DOCTOR:
      return state.filter((doctor) => doctor.id !== action.payload.id);
    default:
      return state;
  }
};

export default doctorsReducer;
