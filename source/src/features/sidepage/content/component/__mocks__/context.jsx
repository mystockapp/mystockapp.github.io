import React from 'react';
const vars = [];

export const AppContext = React.createContext({
  vars,
  incrementAge: undefined,
  decrementAge: undefined,
});
