import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink
import './NavBar.css';

function NavBar() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/candidates" className={({ isActive }) => isActive ? 'active' : undefined}>
                        Candidates
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/vote-results" className={({ isActive }) => isActive ? 'active' : undefined}>
                        Charts
                    </NavLink>
                </li>
                {/* Add more menu items as needed */}
            </ul>
        </nav>
    );
}

export default NavBar;
