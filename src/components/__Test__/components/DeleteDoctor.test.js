import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/store';
import DeleteDoctor from '../../delete_doctor/DeleteDoctor';

describe('Delete listing', () => {
    it('renders correctly', () => {
        
  