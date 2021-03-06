// Dependencies
import React, { createContext, useContext, useReducer } from 'react';

// Prepares the data layer to send items to
export const StateContext = createContext();

// Wrap app and provide data layer parameters
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pulls information from data layer - custom hook
export const useStateValue = () => useContext(StateContext);