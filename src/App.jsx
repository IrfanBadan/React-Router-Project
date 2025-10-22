import React , { useState } from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import PlayerContextProvider from './playerContextProvider/PlayerContextProvider'

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
