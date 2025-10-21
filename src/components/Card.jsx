import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ player }) => {
  return (
    <Link to={`/player/${player.id}`}>
    <div className="card card-side bg-base-100 shadow-md hover:shadow-lg transition-all duration-200 w-[500px]">
      <figure>
        <img
          style={{objectPosition:"top"}}
          src={player.profileImage}
          alt={player.fullName}
          className="w-40 h-40 object-cover rounded-l-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold text-primary">
          {player.fullName}
        </h2>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Country:</span> {player.country}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Club:</span> {player.currentClub}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Position:</span> {player.position}
        </p>
        <p className="text-sm text-gray-600">
          ⚽ Goals: <span className="font-semibold">{player.totalGoals}</span> | 🎯 Assists: <span className="font-semibold">{player.totalAssists}</span>
        </p>

        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-sm">View Profile</button>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Card
