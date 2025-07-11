import React from 'react'
import {
  createBrowserRouter, 
  RouterProvider
}
from "react-router-dom"
import About from './components/About'
import Home from './components/Home'
import DashBoard from './components/DashBoard'
import Navbar from './components/Navbar'
import Courses from './components/Courses'
import Report from './components/Report'
const router = createBrowserRouter([
  {
    path:'/',
    element:<div>
      <Navbar/>
      <Home/>
      </div>
  },
  {
    path:'/about',
    element:<div>
      <Navbar/>
      <About/>
      </div>
  },
  {
    path:'/dashboard',
    element:<div>
      <Navbar/>
      <DashBoard/>
      </div>,
      children:[{
        path:'courses',
        element:<Courses/>
      },
      {
        path:'report',
        element:<Report/>
      }]
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
