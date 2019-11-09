import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './var.styles';

const Buttons = {
  INC: 'inc',
  DEC: 'dec',
};

export const Var = props => {
  const { name, age, incrementAge, decrementAge } = props;
  const increment = () => incrementAge(name);
  const decrement = () => decrementAge(name);

  return (
    <>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <Button id={Buttons.INC} type="button" onClick={increment}>
        {Buttons.INC}
      </Button>
      <Button id={Buttons.DEC} type="button" onClick={decrement}>
        {Buttons.DEC}
      </Button>
    </>
  );
};

Var.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  incrementAge: PropTypes.func.isRequired,
  decrementAge: PropTypes.func.isRequired,
};
