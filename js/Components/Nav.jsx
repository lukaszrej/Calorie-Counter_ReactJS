import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div/>
                    <h1><i className="fas fa-carrot"/> Calorie Counter</h1>
                    <nav className="nav">
                        <i className="material-icons">home</i>
                        <i className="material-icons">view_list</i>
                        <i className="material-icons">face</i>
                    </nav>
                    <div/>
                </div>
            </header>
        );
    }
}

export default Nav;