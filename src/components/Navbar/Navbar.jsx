import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavbarComponent = () => {
    return (
        <>
            <nav className="navbar" style={{ position: 'sticky', top: '0' }}>
                <h3 className="logo">
                    <NavLink to='/' className='nav-item'>
                        <img src='logo192.png' alt='logo' width='30px' height='30px' />
                    </NavLink>&nbsp;
                    <span>Asset Management</span>
                </h3>
                <ul className="nav-links">
                    <NavLink to='/' className='nav-item'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/about' className='nav-item'>
                        <li>About</li>
                    </NavLink>
                    <NavLink to='/login' className='nav-item'>
                        <li>Login</li>
                    </NavLink>
                </ul>
            </nav>
        </>
    )
}

export default NavbarComponent