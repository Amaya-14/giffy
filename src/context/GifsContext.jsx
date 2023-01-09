import React, { createContext, useState } from 'react'

export const GifsContext = createContext()

export function GifsContextProvider(prop) {
  const [gifs, setGifs] = useState([])

  return (
    <GifsContext.Provider
      value={{
        gifs,
        setGifs,
      }}>
      {prop.children}
    </GifsContext.Provider>
  )
}
