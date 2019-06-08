import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <header className="header">
            <div className="container">
                <div/>
                <h1><i className="fas fa-carrot"/> Calorie Counter</h1>
                <nav className="nav">
                    <NavLink exact to={"/"} className="nav"><i className="material-icons">home</i> Home</NavLink>
                    <NavLink exact to={"/archive"} className="nav"><i
                        className="material-icons">view_list</i> Archive</NavLink>
                    <NavLink exact to={"/user"} className="nav"><i className="material-icons">face</i> User</NavLink>
                </nav>
                <div/>
            </div>
        </header>
    )
}

export default Nav;