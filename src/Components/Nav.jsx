import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
        <nav className="navbar  bg-dark p-1 d-flex justify-content-between mb-5">
            <h1 className=' bg-dark p-3'>CoinTracker</h1>
            <Link to={'/'} className=' bg-dark p-3 text-decoration-none'><h4 className=' bg-dark p-3 '>Logout</h4></Link>
        </nav>
    </div>
  )
}

export default Nav