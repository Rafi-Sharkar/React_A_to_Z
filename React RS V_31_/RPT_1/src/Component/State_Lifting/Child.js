import React from 'react'

export default function Child(props){
    const data = "Child (child)"
    props.onData(data)
  return (
    <div>
      <h1>Data import from</h1>
      <h3>{props.dt}</h3>
    </div>
  )
}
