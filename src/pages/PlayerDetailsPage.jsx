// import React, { useContext } from 'react'
// import { playersContext } from '../playerContextProvider/PlayerContextProvider'
// import { useParams } from 'react-router-dom';


// const PlayerDetailsPage = () => {

//   const {playerId} =  useParams()
//   const {playerList} = useContext(playersContext) ;
  
//   const player = playerList.find((player)=> player.id === Number(playerId))
//   console.log(player)

//   return (
//     <div>
//      {player.fullName}     
//     </div>
//   )
// }

// export default PlayerDetailsPage


import React, { useContext } from 'react'
import { playersContext } from '../playerContextProvider/PlayerContextProvider'
import { useParams, Link, useOutletContext } from 'react-router-dom'

const PlayerDetailsPage = () => {
  const { playerId } = useParams()
  const { playerList } = useContext(playersContext)
  const {setSearchedPlayer} = useOutletContext()

  const player = playerList.find((p) => p.id === Number(playerId))

  if (!player) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-6">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-5xl rounded-2xl overflow-hidden">
        <figure className="lg:w-1/2">
          <img
            src={player.profileImage}
            alt={player.fullName}
            className="object-cover w-full h-full lg:h-[600px]"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl font-bold text-primary">
            {player.fullName}
          </h2>
          <p className="text-lg text-gray-600 italic mb-2">
            "{player.nickname}"
          </p>
          <div className="divider"></div>

          <div className="space-y-2 text-gray-700">
            <p><strong>🇦🇷 Country:</strong> {player.country}</p>
            <p><strong>🏟️ Current Club:</strong> {player.currentClub}</p>
            <p><strong>🎯 Position:</strong> {player.position}</p>
            <p><strong>🎂 Age:</strong> {player.age}</p>
            <p><strong>⚽ Goals:</strong> {player.totalGoals}</p>
            <p><strong>🅰️ Assists:</strong> {player.totalAssists}</p>
            <p><strong>🏆 Ballon d'Or Wins:</strong> {player.ballonDOrWins}</p>
          </div>

          {player.internationalTitles.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-1">🌍 International Titles:</h3>
              <ul className="list-disc ml-6">
                {player.internationalTitles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="card-actions justify-end mt-6">
            <Link to="/">
              <button onClick={()=>setSearchedPlayer("")} className="btn btn-primary btn-wide">
                ← Back to Players
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerDetailsPage

