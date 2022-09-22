import axios from 'axios';

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