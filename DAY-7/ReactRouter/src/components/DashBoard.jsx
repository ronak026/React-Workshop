import React from 'react'
import { Outlet } from 'react-router-dom'

function DashBoard() {
  return (
    <div className="bg-gray-900 min-h-[80vh] flex justify-center items-center">
      <h1 className="text-white text-4xl tracking-wider">DashBoard Page</h1>
      <Outlet/>
    </div>
  )
}

export default DashBoard
