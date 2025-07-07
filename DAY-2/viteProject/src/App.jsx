import React from 'react'

function App() {
  let a =10
  let b = "ronak"
  let c = true
  let arr = ["ram","shyam", "sita", "gita"]
  let obj =  {
    name: "ronak",
    age: 20,
    address:"rajkot"
  }
  return (
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>{JSON.stringify(c)}</h1>
      {/* <h1>{arr}</h1> */}
      {/* {
        arr.map((item, index) => {
          return <h1>{item}</h1>
        })
    } */}
  {/* {Object.keys(obj).map((key) => {
    return <h1 key={key}>{key}: {JSON.stringify(obj[key])}</h1>
  })} */}

  {Object.entries(obj).map(([key, value]) => {
    return <h1>{key}:{value}</h1>
  })}
    </div>
  )
}

export default App
