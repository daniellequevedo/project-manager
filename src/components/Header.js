import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/tasks">Tasks</NavLink>
                <NavLink to="/teammembers">Team Members</NavLink>
            </nav>
        </header>
    );
}

export default Header;