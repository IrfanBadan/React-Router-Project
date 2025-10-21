import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import PlayerContextProvider, { playersContext } from '../playerContextProvider/PlayerContextProvider'
import { useOutletContext } from 'react-router-dom';

const HomePage = () => {
  
  const {playerList} = useContext(playersContext) ;
  const {searchedPlayer} = useOutletContext()

  const filteredPlayers = playerList.filter((player)=>
    player.fullName.toLowerCase().includes(searchedPlayer.toLowerCase()))

  // console.log(filterdPlayers)
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {filteredPlayers.length > 0 ? (
  filteredPlayers.map(p => <Card key={p.id} player={p} />)
) : searchedPlayer ? (
  <p>No players found for "{searchedPlayer}"</p>
) : (
  <p>Loading players...</p>
)}
    </div>
  )
}

export default HomePage
