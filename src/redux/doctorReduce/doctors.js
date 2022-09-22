import axios from 'axios';

// const BASE_URL = 'http://127.0.0.1:3000/api/v1';

const GET_DOCTORS = 'DOCTOR_APPOINTMENT/GET_DOCTORS';
const CREATE_DOCTOR = 'DOCTOR_APPOINTMENT/CREATE_DOCTOR';
const DELETE_DOCTOR = 'DOCTOR_APPOINTMENT/DELETE_DOCTOR';

const doctorsState = []

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
    .get('http://localhost:3000/doctors')
    .then((res) => {
      dispatch(getDoctors(res.data));
    });
};

export const createDoctorAction = (payload) => async (dispatch) => {
  axios
    .post('http://localhost:3000/doctors', payload)
    .then((res) => {
      dispatch(createDoctor(res.data));
    });
};

export const deleteDoctorAction = (payload) => async (dispatch) => {
  axios
    .delete(`http://localhost:3000/doctors/${payload}`)
    .then((res) => {
      dispatch(deleteDoctor(res.data));
    }); 
};

