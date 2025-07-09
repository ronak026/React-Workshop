import React, { useEffect, useState } from 'react'

function UseEffect() {

  let[count,setCount] = useState(0)

  useEffect(() =>{
      alert('hyy im ronak')
      console.log("Running useefect ",count);
  },[count])

  const addValue = () => {
    setCount(count+1)
  }

  return (
    <>
      <h1>hello I'm UseEffect </h1>
      <div>
        <h1>Counter:{count} </h1>
        <div>
          <button onClick={addValue}>click</button>
        </div>
      </div>
    </>
  )
}

export default UseEffect
