import axios from '../../config/axios';

const SIGN_UP = 'DOCTOR_APPOINTMENT/SIGN_UP';
const SIGN_UP_SUCCESS = 'DOCTOR_APPOINTMENT/SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'DOCTOR_APPOINTMENT/SIGN_UP_FAILURE';

const initialState = [];

const SignUp = (payload) => ({
  type: SIGN_UP,
  payload,
});

const SignUpSuccess = (payload) => ({
  type: SIGN_UP_SUCCESS,
  payload,
});

const SignUpFailure = (payload) => ({
  type: SIGN_UP_FAILURE,
  payload,
});

export const SignUpAction = (payload) => async (dispatch) => {
  dispatch(SignUp());
  axios
    .post('https://hidden-citadel-49495.herokuapp.com/api/v1/users', payload)
    .then((res) => {
      dispatch(SignUpSuccess(res.data));
    })
    .catch((error) => {
      dispatch(SignUpFailure(error.response.data));
    });
};

const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, loading: true };
    case SIGN_UP_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case SIGN_UP_FAILURE:
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
};

export {
  SignUpReducer, SignUp, SignUpSuccess, SignUpFailure,
};
