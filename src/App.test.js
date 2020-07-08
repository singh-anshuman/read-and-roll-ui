import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('First JEST test',()=> {
  expect(true).toBeTruthy();
});

const testFn = jest.fn(()=>{return 23;});

test('First test with jest mocking',() => {
  testFn();
  expect(testFn).toBeCalledTimes(1);     
});