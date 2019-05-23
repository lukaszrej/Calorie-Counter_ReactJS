import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className={"main-container header"}>
                <h1>
                    <i className="fas fa-carrot"/> Calorie Counter
                </h1>
            </div>
        );
    }
}

export default Header;