import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom'
import './Header.css'
import Hidesho from './Hidesho';
import Hideshono from './Hideshono';
function Headerwithuser() {
    const isMobile = useMediaQuery(
        {query : '(max-width : 576px)'}
    )
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
            <div className="container-fluid">
                <Link className="navbar-brand text-white ms-5" to='/'>logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white active" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='Blog'>Blog</Link>
                        </li>
                    </ul>
                    {isMobile ? <Hideshono/> : null}
                </div>
                    {isMobile ? null : <Hidesho/>}
            </div>
        </nav>
    )
}

export default Headerwithuser
