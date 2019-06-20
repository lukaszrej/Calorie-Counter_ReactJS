import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <header className="header">
            <div className="container">
                <div/>
                <div className="flex">
                    <NavLink exact to="/"><h1><i className="fas fa-carrot"/> Calorie Counter</h1></NavLink>
                    <nav className="nav">
                        <NavLink className="nav nav__link" exact to="/"><i
                            className="material-icons">home</i>Dashboard</NavLink>
                        <NavLink className="nav nav__link" exact to="/archive"><i
                            className="material-icons">view_list</i>Archive</NavLink>
                    </nav>
                </div>

                <div/>
            </div>
        </header>
    )
}

export default Nav;