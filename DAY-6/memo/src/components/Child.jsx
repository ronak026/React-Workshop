import React from 'react'

function Child(props) {
  console.log("chile rendering")
  return (
    <div>
      hello : {props.username}
    </div>
  )
}

export default React.memo(Child)
