import React from 'react'

// function Person(props) {
//   return (
//     <div>
//       <h1>{props.username}</h1>
//       <h2>{props.color}</h2>
//       <h3>{props.kam}</h3>
//     </div>
//   )
// }

function Person({username, color, kam}) {
  return (
    <div>
      <h1>{username}</h1>
      <h2>{color}</h2>
      <h3>{kam}</h3>
    </div>
  )
}

export default Person
