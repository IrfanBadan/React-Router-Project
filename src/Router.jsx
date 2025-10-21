import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import PlayerDetailsPage from './pages/PlayerDetailsPage'


const router =  createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:"/player/:playerId",
                element:<PlayerDetailsPage/>
            },
            {
                path:"*",
                element:<NotFound/>
            }
        ]
    }
])

export default router 
