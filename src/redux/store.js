import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { SignUpReducer } from './auth/register';
import { LoginUserReducer } from './auth/login';

const reducer = combineReducers({
  user: SignUpReducer,
  login: LoginUserReducer,
});

const store = createStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;
