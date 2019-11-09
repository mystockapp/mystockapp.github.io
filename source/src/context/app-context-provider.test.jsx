import React from 'react';
import { shallow } from 'enzyme';
import { AppContextProvider } from './app-context-provider';

const AGEA = 20;
const AGEB = 30;
const INCREMENT = 1;

describe('AppContextProvider', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = shallow(<AppContextProvider>test</AppContextProvider>);
    instance = component.instance();
  });

  it('should render correctly in "debug" mode', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('should increment age value by 1 in case of incrementAge function is called', () => {
    expect(component.state('vars')[0].age).toBe(AGEA);
    instance.incrementAge('A');
    expect(component.state('vars')[0].age).toBe(AGEA + INCREMENT);
  });

  it('should decrement age value by 1 in case of decrementAge function is called', () => {
    expect(component.state('vars')[1].age).toBe(AGEB);
    instance.decrementAge('B');
    expect(component.state('vars')[1].age).toBe(AGEB - INCREMENT);
  });

  it('should not increment age value in case of incrementAge function is with no value', () => {
    expect(component.state('vars')[1].age).toBe(AGEB);
    instance.incrementAge();
    expect(component.state('vars')[1].age).toBe(AGEB);
  });
});
