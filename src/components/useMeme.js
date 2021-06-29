import React, { createContext, useContext } from "react"
import { useMemeReducer } from "./memeReducer"

const MemeContext = createContext()

export const MemeProvider = ({ children }) => {
  let [state, dispatch] = useMemeReducer()

  return (
    <MemeContext.Provider value={{ state, dispatch }}>
      {children}
    </MemeContext.Provider>
  )
}

export const useMeme = () => useContext(MemeContext)
