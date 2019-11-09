import React from 'react';
import { mount } from 'enzyme';
import { Var } from './var';

let component;
const age = 20;
const name = 'test';
const key = 'key';
const incrementAge = jest.fn();
const decrementAge = jest.fn();

describe('Var', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    const rest = {
      age,
      key,
      name,
      incrementAge,
      decrementAge,
    };
    component = mount(<Var {...rest} />);
  });

  it('should render correctly', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('should render the 1st button with type button', () => {
    expect(
      component
        .find('button')
        .first()
        .props().type
    ).toBe('button');
  });

  it('should render the last button with type button', () => {
    expect(
      component
        .find('button')
        .last()
        .props().type
    ).toBe('button');
  });

  it('should render 2 buttons', () => {
    const buttons = component.find('button');
    const NUMBER_OF_BUTTONS = 2;
    expect(buttons.length).toEqual(NUMBER_OF_BUTTONS);
  });

  describe('onClick', () => {
    it('should call incrementAge on the first button click', () => {
      component
        .find('button')
        .first()
        .simulate('click');

      expect(incrementAge).toHaveBeenCalled();
    });
    it('should call decrementAge on the last button click', () => {
      component
        .find('button')
        .last()
        .simulate('click');

      expect(decrementAge).toHaveBeenCalled();
    });
  });
});
