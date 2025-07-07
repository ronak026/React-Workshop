import React from 'react'
import Person from './components/Person'
import Card from './components/Card'

function App() {
  return (
    <div>
      {/* <h1 className='text-red-800'>Hello</h1> */}
      {/* <Person username="ronak" color="skyblue" kam="dev" /> */}
      <Card movie="The Tomorrow War" actor="Chris Pratt" rate="4.8" year="2021" img = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhotZZ36j8rndD5i2OG1scehoqeH_m7uLmohqF-yDDfR8X7kFk" />
      <Card movie="fast and furious " actor="Vin Diesel" rate="5.0" year="2013" img = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbN736nldgdkbYUhLVy6FTrD9ymkkSl_-vxjkqgY_Aaqbtx0YSJdX0VsINGBE9k0WPqGkfR3yOAVQ-PoymQI1qtABFRdGLnQ" />

    </div>
  )
}

export default App
