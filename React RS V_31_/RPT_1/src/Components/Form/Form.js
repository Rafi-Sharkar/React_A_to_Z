import React, { useState } from 'react'
import style from './form.module.css'
// useState using Object
export default function Form() {
const [user, setUser] = useState({name:'', email:'', password:'', })
const {name, email, password} = user

const handleChange =(e) => {
// const fieldName = e.target.name
// if(fieldName === 'name'){
// setUser({name: e.target.value, email, password})}
// if(fieldName === 'email'){
// setUser({name, email: e.target.value, password})}
// if(fieldName === 'password'){
// setUser({name, email, password: e.target.value})}
// More easy way
setUser({...user,[e.target.name]:e.target.value})
}

const handleSubmit = (e) => {
console.log('Form is submited')
console.log(user)
e.preventDefault()
}
return (
<div>
<h1>Registration</h1>
<form action='' onSubmit={handleSubmit}>
<div className={style.formGroup}>
<label htmlFor='name'>Name : </label>
<input value={name} type='text' name='name' id='name' onChange={handleChange} required />
</div>
<div className={style.formGroup}>
<label htmlFor='email'>Email : </label>
<input value={email} type='email' name='email' id='email' onChange={handleChange} required />
</div>
<div className={style.formGroup}>
<label htmlFor='password'>Password : </label>
<input value={password} type='password' name='password' id='password' onChange={handleChange} required />
</div>
<div className={style.formGroup}>
<button type='submit'> Register </button>
</div>
</form>
</div>
)
}




