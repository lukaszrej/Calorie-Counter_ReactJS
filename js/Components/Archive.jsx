import React from 'react';

function Archive(props) {

    console.log(props.history, 'historia z archive');
    return (
        <div className="addReport__container">
            <h3>Archive</h3>
            <ul>{props.history.map((el) => <li>{el.date}</li>)}</ul>
            <p>Here will be a site with your added daily reports. &#x1F525;</p>
        </div>
    )
}

export default Archive;