import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'

function App() {
  console.log("parent rendering")
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-96">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Count: <span className="text-blue-700">{count}</span></h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition mb-6"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </button>
        <Child username={count < 2 ? "ronak":"vekariya"}/>
      </div>
    </div>
  )
}

export default App