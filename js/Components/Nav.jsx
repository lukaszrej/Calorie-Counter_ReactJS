import React from 'react';

function Nav() {
    return (
        <header className="header">
            <div className="container">
                <div/>
                <h1><i className="fas fa-carrot"/> Calorie Counter</h1>
                <nav className="nav">
                    <div className="nav"><i className="material-icons">home</i> Home</div>
                    <div className="nav"><i className="material-icons">view_list</i> Archive</div>
                    <div className="nav"><i className="material-icons">face</i> User</div>
                </nav>
                <div/>
            </div>
        </header>
    )
}

export default Nav;