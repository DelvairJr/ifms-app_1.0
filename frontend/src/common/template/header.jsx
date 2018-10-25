import React from 'react'
import Navbar from './navbar'
import logo from '../../imgs/ifms-logo2.png'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>IF</b >Na</span>
            <span className='logo-lg'>
                <img src={logo}
                    className="logo" alt="User Image" />
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navbar />
        </nav>
    </header>
)