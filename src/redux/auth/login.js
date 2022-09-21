import axios from 'axios';

const LOGIN_USER = 'DOCTOR_APPOINTMENT/LOGIN_USER';
const LOGIN_USER_SUCCESS = 'DOCTOR_APPOINTMENT/LOGIN_USER_SUCCESS';
const LOGIN_USER_FAILURE = 'DOCTOR_APPOINTMENT/LOGIN_USER_FAILURE';

const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const initialState = {
  user: initialUser,
  loading: false,
  error: null,

};

const LoginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

const LoginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

const LoginUserFailure = (payload) => ({
  type: LOGIN_USER_FAILURE,
  payload,
});

export const LoginUserAction = (payload) => async (dispatch) => {
  dispatch(LoginUser());
  axios
    .post('http://localhost:3000/login', payload)
    .then((res) => {
      dispatch(LoginUserSuccess(res.data));
    })
    .catch((error) => {
      dispatch(LoginUserFailure(error.response.data));
    });
};

const LoginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, loading: false, data: action.payload };
    case LOGIN_USER_FAILURE:
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
};

export {
  LoginUserReducer, LoginUser, LoginUserSuccess, LoginUserFailure,
};
