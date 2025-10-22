import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import PlayerContextProvider from './playerContextProvider/PlayerContextProvider'
import { themeChange } from 'theme-change'

const App = () => {
    const [searchedPlayer , setSearchedPlayer] = useState("")
    // console.log(searchedPlayer)
  return (
    <div>
       <NavBar searchedPlayer={searchedPlayer} setSearchedPlayer={setSearchedPlayer} />
       <PlayerContextProvider>
       <Outlet context={{ searchedPlayer, setSearchedPlayer }}/>
       </PlayerContextProvider>
    </div>
  )
}

export default App
