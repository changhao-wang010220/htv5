import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
            <div className="container">
                <NavLink to='/' className="navbar-brand">Logo</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/market" className="nav-link">Market Place</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/community" className="nav-link">Community</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/sign_in" className="nav-link">Sign in</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}
