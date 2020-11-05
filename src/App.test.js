import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Login from './Components/Login.js'



jest.mock("./App");
test('asda',() => {
	expect(2+2).toBe(4);
}
);
test('renders correctly', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('onNameChange',() => {
	expect(onNameChange('cristi')).toBe('cristi');
});


