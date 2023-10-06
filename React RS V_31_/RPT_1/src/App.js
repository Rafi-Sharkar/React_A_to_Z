import React from 'react'
import Child from './Components/State_Lifting/Child'

const App = () => {
const data = 'I am from parent (app)'
return (
<div>
<Child data2 = {data}/>
</div>
)
}
export default App
