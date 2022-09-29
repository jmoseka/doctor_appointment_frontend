import { NotificationManager } from 'react-notifications';
import axios from 'axios';

const LOGIN_USER = 'DOCTOR_APPOINTMENT/LOGIN_USER';
const LOGIN_USER_SUCCESS = 'DOCTOR_APPOINTMENT/LOGIN_USER_SUCCESS';
const LOGIN_USER_FAILURE = 'DOCTOR_APPOINTMENT/LOGIN_USER_FAILURE';
export const LOGOUT = 'LOGOUT';
const initialUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

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

const logout = () => {
  localStorage.removeItem('user');
};

export const LoginUserAction = (payload) => async (dispatch) => {
  dispatch(LoginUser());
  axios
    .post(
      'https://hidden-citadel-49495.herokuapp.com/login',
      payload,
    )
    .then((res) => {
      dispatch(LoginUserSuccess(res.data));
      NotificationManager.success(
        'You have Loged In successfully !',
        'Successful!',
        2000,
      );
    })
    .catch((error) => {
      dispatch(LoginUserFailure(error.response.data));
      NotificationManager.error(
        'Error while Login in to the website!',
        'Error!',
      );
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
    case LOGOUT: {
      logout();
      return { ...state, user: null };
    }
    default:
      return state;
  }
};

export {
  LoginUserReducer,
  LoginUser,
  LoginUserSuccess,
  LoginUserFailure,
  logout,
};
