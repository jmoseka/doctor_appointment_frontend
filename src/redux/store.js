import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { SignUpReducer } from './auth/register';
import { LoginUserReducer } from './auth/login';
import myAppointmentReducer from './my_appointment_redux/my_appointment';

const reducer = combineReducers({
  user: SignUpReducer,
  login: LoginUserReducer,
  my_appointment: myAppointmentReducer,
});

const store = createStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;
