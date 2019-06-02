import React from 'react';

class Archive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Archive...',
        }
    }

    render() {
        return (
            <div className={"profile__container"}>
                <h2>{this.state.text}</h2>
            </div>
        );
    }
}

export default Archive;