import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/store';
import NewAppointment from '../../new-appointment/NewAppointment';

describe('BookAppointment', () => {
  it('renders correctly', () => {
    window.localStorage.setItem('user', 1);
    const tree = render(
      <Provider store={store}>
        <Router>
          <NewAppointment />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
