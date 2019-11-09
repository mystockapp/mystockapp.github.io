import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { Button } from './var.styles';

const prop = 'background-color';
const value = 'yellow';

describe('<Button> component', () => {
  it(`should have ${prop}: ${value}`, () => {
    const wrapper = renderer.create(<Button />).toJSON();
    expect(wrapper).toHaveStyleRule(prop, value);
  });
});
