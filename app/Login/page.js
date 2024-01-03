import React from 'react'

const Login = () => {
  return (
    <div className='inline-flex flex-col flex-1 py-2 px-2 '>
      <h1>Login</h1>
      <input type="text" name="username" id="username"className='my-2' /> 
      <input type="password" name="password" id="password" className="my-2" />
      <button className='bg-gray-300 my-2'>Login</button>
    
    </div>
  )
}

export default Login