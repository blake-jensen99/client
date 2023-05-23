import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const nav = useNavigate()


  const login = e => {
    e.preventDefault()
    nav('/dash')
  }
  const signup = e => {
    e.preventDefault()
    nav('/dash')
  }


  return (
    <div>
      <h1 className='m-5 text-center'>CoinTracker</h1>
      <div className='d-flex justify-content-center mt-5 gap-5 ' >
        <form onSubmit={login}>
          <h3>Login</h3>
          <div className='mb-3'>
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="text" className='form-control' />
          </div>
          <div className='mb-3'>
            <label htmlFor="pass" className='form-label'>Password</label>
            <input type="password" className='form-control'/>
          </div>
          <button type="submit" className='btn btn-outline-success'>Login</button>
        </form>
        <form onSubmit={signup}>
          <h3>Sign-up</h3>
          <div className="mb-3">
            <label htmlFor="fname" className='form-label'>First Name:</label>
            <input type="text" className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="lname" className='form-label'>Last Name:</label>
            <input type="text" className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="semail" className='form-label'>Email</label>
            <input type="text" className='form-control'/>
          </div>
          <div className="mb-3">
            <label htmlFor="spass" className='form-label'>Password:</label>
            <input type="password" className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="cspass" className='form-label'>Confirm Password:</label>
            <input type="password" className='form-control' />
          </div>
          <button type="submit" className='btn btn-outline-success'>Sign-up</button>
        </form>
      </div>
    </div>
  )
}


export default Landing