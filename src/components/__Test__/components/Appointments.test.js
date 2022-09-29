import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/store';
import Appointments from '../../my_appointment/Appointments';

describe('DetailReservation', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Appointments />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
