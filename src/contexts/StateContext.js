import React, { createContext, useContext, useReducer } from 'react'

import UserReducer from './../reducers/UserReducer'

const initialState = {
  user: UserReducer()
}

const mainReducer = (state, action) => ({
  user: UserReducer(state.user, action)
})

const Context = createContext();

const StateProvider = ({ children }) => {
  [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

const useUser = () => useContext(Context)

export {
  Context,
  StateProvider,
  useUser
}