import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ player }) => {
  return (
    <Link to={`/player/${player.id}`}>
      <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-200 w-full max-w-[500px] h-[360px] md:h-[200px] flex flex-col md:flex-row overflow-hidden">
        {/* Image Section */}
        <figure className="md:w-40 md:h-full w-full h-40 md:h-auto">
          <img
            style={{ objectPosition: "top" }}
            src={player.profileImage}
            alt={player.fullName}
            className="object-cover w-full h-full rounded-t-xl md:rounded-l-xl md:rounded-t-none"
          />
        </figure>

        {/* Content Section */}
        <div className="card-body p-4 flex flex-col justify-between">
          <div>
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
          </div>

          {/* CTA Button */}
          <div className="card-actions justify-end mt-2">
            <button className="btn btn-outline btn-sm">View Profile</button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
