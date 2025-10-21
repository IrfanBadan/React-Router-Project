import React, { useEffect, useState, createContext } from 'react'

export const playersContext = createContext()

const PlayerContextProvider = ({ children }) => {
  const [playerList, setPlayerList] = useState([])

  async function playersData() {
    const res = await fetch("/players.json")
    const data = await res.json()
    setPlayerList(data)
  }

  useEffect(() => {
    playersData()
  }, [])

  const value = { playerList }

  return (
    <playersContext.Provider value={value}>
      {children}
    </playersContext.Provider>
  )
}

export default PlayerContextProvider
