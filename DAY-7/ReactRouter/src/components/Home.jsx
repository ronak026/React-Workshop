import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  let navigate = useNavigate()

  function handleClick() {
    navigate('/about')
  }

  return (
    <div className="bg-gray-900 min-h-[80vh] flex justify-center items-center">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200"
      >
        Click to Navigate About
      </button>
    </div>
  )
}

export default Home
