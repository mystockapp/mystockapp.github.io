import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { Title } from './container.styles';

const prop = 'text-align';
const value = 'center';

describe('<Title> component', () => {
  it(`should have ${prop}: ${value}`, () => {
    const wrapper = renderer.create(<Title />).toJSON();
    expect(wrapper).toHaveStyleRule(prop, value);
  });
});
