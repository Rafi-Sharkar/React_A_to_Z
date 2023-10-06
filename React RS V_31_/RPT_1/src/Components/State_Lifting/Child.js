import React from 'react'

const Child = (props) => {
const {data2} = props
return (
<div>
<h1>Here is the data</h1>
<h1>{data2}</h1>
</div>
)
}
export default Child