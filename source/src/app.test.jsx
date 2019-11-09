import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

let component;

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    component = shallow(<App />);
  });

  it('should render correctly', () => {
    expect(component.exists()).toBeTruthy();
  });
});
