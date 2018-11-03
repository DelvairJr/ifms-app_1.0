import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        
        <nav className="dropdown">
        <button className="dropbtn">&#9776;</button>
            {/* Refatorar menu */}
            <ul className="dropdown-content">
          

            </ul>
        </nav>
    </aside>