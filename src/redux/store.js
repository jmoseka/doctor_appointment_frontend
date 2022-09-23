import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { SignUpReducer } from './auth/register';
import { LoginUserReducer } from './auth/login';
import myAppointmentReducer from './my_appointment_redux/my_appointment';
import doctorsReducer from './doctorReduce/doctors';

const reducer = combineReducers({
  user: SignUpReducer,
  login: LoginUserReducer,
  my_appointment: myAppointmentReducer,
  doctor: doctorsReducer,
});

const store = createStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;
