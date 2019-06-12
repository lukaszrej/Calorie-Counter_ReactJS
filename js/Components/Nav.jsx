import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <header className="header">
            <div className="container">
                <div/>
                <h1><i className="fas fa-carrot"/> Calorie Counter</h1>
                <nav className="nav">
                    <NavLink exact to={"/"} className="nav__link"><i className="material-icons">home</i>Dashboard</NavLink>
                    <NavLink exact to={"/archive"} className="nav__link"><i
                        className="material-icons">view_list</i>Archive</NavLink>
                </nav>
                <div/>
            </div>
        </header>
    )
}

export default Nav;