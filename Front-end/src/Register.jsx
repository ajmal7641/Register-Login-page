import React , { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Register = () => {

  const [name,setName] =  useState('');
  const [email,setEmail] =  useState('');
  const [password,setPassword] =  useState('');


const navigate = useNavigate()


const handleSubmit = (e) =>{
  e.preventDefault();
  axios.post('http://localhost:3001/register',{name,email,password})
       .then(result=>{
        console.log(result);
        navigate('/login')
       })
       .catch(error=>{
        console.log(error);
       })
}

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder='Enter Name'
              className='form-control rounded-0'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder='Enter email'
              className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder='Enter password'
              className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
        </form>
        <p>Already have an account?</p>
        <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
      </div>
    </div>
  )
}

export default Register