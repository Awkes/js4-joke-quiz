// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * Extended version of localStorage mock, this is 
 * so you can actually save stuff in localStorage
 */
const localStorageMock = (() => {
  let store = {}
  return {
    getItem: jest.fn(key => store[key]),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: jest.fn(() => {
      store = {}
    }),
    removeItem: jest.fn(key => {
      delete store[key];
    })
  }
});

global.localStorage = localStorageMock()