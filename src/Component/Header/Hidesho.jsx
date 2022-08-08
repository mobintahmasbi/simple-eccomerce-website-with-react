/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
function Hidesho() {
    function clearlocal(){
        localStorage.clear()
        window.location.reload()
    }
    const user = JSON.parse(localStorage.getItem('User'))
    return (
        <div className="ms-auto d-flex align-items-center text-white">
            <div className="me-4 position-relative">
                <i className="material-icons fs-3">shopping_cart</i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {user.Buy.length}
                    <span className="visually-hidden">New alerts</span>
                </span>
            </div>
            <div className="me-3 dropstart">
                <a className="dropdown-toggle text-white poo" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="material-icons fs-3">person</i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><Link className="dropdown-item" to='../Profile'>profile</Link></li>
                    <li><div className="dropdown-item" onClick={clearlocal}>sign out</div></li>
                </ul>
            </div>
        </div>
    )
}

export default Hidesho
