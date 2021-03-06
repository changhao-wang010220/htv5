import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../pic/logo.png'

export default function Navbar() {
    const [show, setShow] = useState(false);
    let logoStyle = {
        height:50
    }
    return (
        <nav className="navbar navbar-expand-lg bg-success bg-gradient navbar-dark py-3 fixed-top">
            <div className="container">
                <NavLink to='/' className="navbar-brand">
                    <img className='img-fluid' src={logo} style={logoStyle}></img>
                    The Nature Hub
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" onClick={() => {setShow(!show)}}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" onClick={() => {setShow(false)}}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/market" className="nav-link" onClick={() => {setShow(false)}}>Market Place</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/community" className="nav-link" onClick={() => {setShow(false)}}>Community</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/sign_in" className="nav-link" onClick={() => {setShow(false)}}>Sign in</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
