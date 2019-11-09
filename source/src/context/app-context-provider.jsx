import React from 'react';
import PropTypes from 'prop-types';
import { AppContext } from './app-context';

const INCREMENT = 1;

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vars: [
        {
          name: 'A',
          age: 20,
        },
        {
          name: 'B',
          age: 30,
        },
        {
          name: 'C',
          age: 40,
        },
      ],
    };
  }

  modifyAge(name, inc) {
    const { vars } = this.state;
    const current = vars.find(({ name: varName }) => varName === name);
    if (current) {
      current.age = inc ? current.age + INCREMENT : current.age - INCREMENT;
    }
    this.setState({
      vars,
    });
  }

  incrementAge(name) {
    this.modifyAge(name, true);
  }

  decrementAge(name) {
    this.modifyAge(name);
  }

  render() {
    const { children } = this.props;
    const { vars } = this.state;
    return (
      <AppContext.Provider
        value={{
          vars,
          incrementAge: this.incrementAge,
          decrementAge: this.decrementAge,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
