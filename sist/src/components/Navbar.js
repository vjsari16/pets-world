import React from 'react'
import { useSelector } from 'react-redux'
import './nav.css'
export default function Navbar() {
    const cartstate = useSelector(state=>state.cartReducer)
    return (
        <div className='navbar'>
            <div  style={{ backgroundColor:"grey"}}>
                <nav className="navbar navbar-expand-lg px-4  " >

                    <a className="navbar-brand" href="/">Pets-World</a>
                    <button className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item  ">
                                <a className="nav-link" href="/login">Login </a>
                            </li>
                            <li className="nav-item  ">
                                <a className="nav-link" href="/home">Home </a>
                            </li>
                            <li className="nav-item  ">
                                <a className="nav-link" href="/Products">Puppies </a>
                            </li>
                            <li className="nav-item  ">
                                <a className="nav-link" href="/Drinks">Other </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/cart">Cart {cartstate.cartItems.length}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
  )
}
