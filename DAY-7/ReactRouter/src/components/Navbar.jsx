import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-gray-800 p-4">
      <ul className="flex list-none m-0 p-0">
        <li className="mr-5">
          <Link className="text-white no-underline hover:underline" to='/'>Home</Link>
        </li>
        <li className="mr-5">
          <Link className="text-white no-underline hover:underline" to='/about'>About</Link>
        </li>
        <li>
          <Link className="text-white no-underline hover:underline" to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
