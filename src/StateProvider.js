// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from 'react';

//THIS IS THE DATA LAYER (Prepares Data layer)
export const StateContext = createContext();

//BUILD A PROVIDER (Wrap our app and provide the data layer)
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value ={useReducer(reducer, initialState,)}>
        {children}
    </StateContext.Provider>
);

//This is how we use it inside of a component (Pull information from data layer)
export const useStateValue = () => useContext(StateContext);