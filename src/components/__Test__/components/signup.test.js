import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/store';
import Signup from '../../auth/signup';

describe('Signup', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Signup />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
