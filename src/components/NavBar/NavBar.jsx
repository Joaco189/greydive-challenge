import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className='navbar-container'>
            <h1 className='navbar-title' onClick={() => navigate("/")}>Challenge Greydive</h1>
            <div className='burguer-button'>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </div>
        </div>
    )
}

export default NavBar