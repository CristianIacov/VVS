import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Login from './Components/Login.js'
import { shallow } from 'enzyme';
import Admin from './Components/Admin.js'
import App from './App.js'
import Visualize from './Components/Visualize.js'
import Maintenance from './Components/Maintenance.js'
import StoppedServer from './Components/StoppedServer.js'
import setAdmin from './App.js'

jest.mock("./App");
test('asda',() => {
	expect(2+2).toBe(4);
}
);
test('renders correctly', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
  const tree = renderer.create(<Admin />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
  const tree = renderer.create(<Maintenance />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders correctly', () => {
  const tree = renderer.create(<StoppedServer />).toJSON();
  expect(tree).toMatchSnapshot();
});