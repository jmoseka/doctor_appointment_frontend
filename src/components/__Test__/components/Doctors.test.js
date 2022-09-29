import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/store';
import Doctors from '../../Doctors';

describe('DoctorList', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Doctors />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
