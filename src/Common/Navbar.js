import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { BsCart} from "react-icons/bs"
import { useSelector } from 'react-redux'

function Navbar() {

  const total = useSelector((state) => state.cart.total)

  

  

  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                       
                       <Link className='nav-link' to={"/"}>Home</Link>
                       <Link className='nav-link' to={"/login"}>login</Link>
                       <Link className='nav-link' to={"/signup"}>Signup</Link>
                       

                    </ul>
                  <Link to={"/cart"} className='position-relative p-2'>
                    <sup className='h6 position-absolute end-0 top-0 text-danger bg-dark text-white rounded-circle p-1'>{total}</sup>
                  <BsCart size={32}/>
                  </Link>

                 
                </div>
          </div>
        </nav>
        
    </div>
  )
}

export default Navbar