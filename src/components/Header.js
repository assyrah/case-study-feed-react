import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <nav className="header header-nav container">
                <div className="logo-container">
                    <Link className="navbar-item" to="/">
                        <img src={require('../assets/adrenalin.svg')} className="logo" alt="logo"/>
                    </Link>
                </div>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <div className="header-nav-links">
                    <NavLink activeClassName="active" className="navbar-item" to="/">
                        Culture
                    </NavLink>
                    <NavLink activeClassName="active" className="navbar-item" to="/">
                        Work
                    </NavLink>
                    <NavLink activeClassName="active" className="navbar-item" to="/">
                        Clients
                    </NavLink>
                    <NavLink activeClassName="active" className="navbar-item" to="/">
                        Services
                    </NavLink>
                    <NavLink activeClassName="active" className="navbar-item" to="/">
                        Careers
                    </NavLink>
                    <NavLink activeClassName="active" className="navbar-item" to="/">
                        Contact
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Header;