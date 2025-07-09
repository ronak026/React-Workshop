import React, { useState } from 'react'
import UseState from './components/UseState'
import BgChanger from './components/BgChanger'
import UseEffect from './components/UseEffect'
import TimerCount from './components/TimerCount'
import Clock from './components/Clock'
import TodoList from './components/TodoList'

function App() {
  // let[show,setShow]=useState(true)
  return (
    <div className='text-center mt-10'>
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <BgChanger/> */}
      {/* <TimerCount/> */}
      {/* <Clock/> */}
      <TodoList/>

      {/* <button onClick={() => setShow(!show)}
      className='bg-blue-600 text-white px-4 py-2 rounded-2xl'>
        {show ? "Stop":"Start"}
      </button>
      {show && <TimerCount/>} */}
    </div>
  )
}

export default App
