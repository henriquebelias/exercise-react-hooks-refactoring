// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const INITIAL_STATE = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
  }
  const [cars, setCars] = useState(INITIAL_STATE);

  function moveCar(car, side) {
    setCars({
      cars: {
        cars,
        [car]: side,
      },
    });
  };

  const context = {
    ...cars,
    moveCar,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
