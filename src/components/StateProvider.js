// setup data layer
// need this to track the basket

import React, { createContext, useContext, useReducer } from 'react'


// This is the data layer
export const StateContext = createContext();


// Build a provider (Wrap entire app inside the provider)
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)


// Pull information from the data layer
// This is how we use it inside the component
export const useStateValue = () => useContext(StateContext);