import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react';

const NavBar = ({ searchedPlayer, setSearchedPlayer }) => {

   const [dark, setDark] = React.useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      {/* Left - Logo/Title */}
      <div className="flex">
        <a className="btn btn-ghost text-xl">FootBall Players</a>
      </div>

      {/* Center - Search */}
      <div className="flex-1 flex justify-center nav">
        <div className="relative w-64 md:w-96">
          <MagnifyingGlassIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" 
            style={{zIndex:"1"}} 
          />
          <input
            value={searchedPlayer}
            onChange={(e) => setSearchedPlayer(e.target.value)}
            type="text"
            placeholder="Search player..."
            className="input input-bordered w-full pl-10 bg-base-200 text-gray-100 placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
     {dark ? (
            // Moon Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              />
            </svg>
          ) : (
            // Sun Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4V2m0 20v-2m8-8h2M2 12h2m15.364-6.364l1.414-1.414M4.222 19.778l1.414-1.414M19.778 19.778l-1.414-1.414M4.222 4.222L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          )}
  </div>
  <ul
    tabIndex={0}
    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
  >
    <li><button onClick={() => setDark(false)} data-set-theme="light">🌞 Light</button></li>
    <li><button onClick={() => setDark(true)} data-set-theme="dark">🌙 Dark</button></li>

  </ul>
</div>


      {/* Right - Avatar */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="/src/assets/images/football.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
