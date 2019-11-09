import React from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../../context';
import { Var } from './var';
import { Title } from './container.styles';

const renderVars = context => {
  const { vars, incrementAge, decrementAge } = context;
  return Object.keys(vars).map(name => (
    <Var key={name} name={vars[name].name} age={vars[name].age} incrementAge={incrementAge} decrementAge={decrementAge} />
  ));
};

export const ContainerContent = ({ children }) => (
  <AppContext.Consumer>
    {context => (
      <>
        <Title>Vars:</Title>
        {renderVars(context)}
        {children}
      </>
    )}
  </AppContext.Consumer>
);

ContainerContent.defaultProps = {
  children: null,
};

ContainerContent.propTypes = {
  children: PropTypes.node,
};
