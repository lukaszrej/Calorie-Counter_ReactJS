import React from 'react';

function Archive(props) {

    console.log(props.history, 'historia z archive');

    return (
        <div className="addReport__container">
            <h3>Archive</h3>
            <p>Here is a site with your added daily reports. &#x1F525;</p>
            <ul>{props.history.map((el) => {
                return (
                    <div>
                        <li>{el.date}</li>
                        {console.log(el.eatenFood.breakfast.map((element) => element.map((item) =>
                            item.food.label), 'item0 label'))}

                    </div>
                )
            })}
            </ul>
        </div>
    )
}

export default Archive;