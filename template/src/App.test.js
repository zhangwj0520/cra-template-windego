/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';


test('renders learn react link', () => {
  const { getByText } = render(
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
