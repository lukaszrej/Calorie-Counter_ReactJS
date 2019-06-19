import React from 'react';
import {Link} from 'react-router-dom';

function Archive(props) {

    console.log(props.history, 'history (archive)');

    return (
        <div className="addReport__container">
            <h3>Archive</h3>
            <p>Here is a site with your added daily reports. &#x1F525;</p>
            <ul>{props.history.map((el) => {
                return (
                    <div>
                        <Link to={`/archive/${el.date}`}>
                            <p>{el.date && el.date}</p>
                            {el.eatenFood.breakfast && el.eatenFood.breakfast.map((element) => {
                                return <p>{element[0].food.label}</p>
                            })}
                            {el.eatenFood.lunch && el.eatenFood.lunch.map((element) => {
                                return <p>{element[0].food.label}</p>
                            })}
                            {el.eatenFood.dinner && el.eatenFood.dinner.map((element) => {
                                return <p>{element[0].food.label}</p>
                            })}
                            <p>Your daily calorie intake is: {el.total && el.total} kcal from {props.dailyNeed}</p>
                            <p>Daily calorie intake to daily calorie need:
                                { Number((Math.ceil(el.total) / props.dailyNeed) * 100).toFixed(2) + "%"}</p>
                        </Link>
                    </div>
                )
            })}
            </ul>
        </div>
    )
}

export default Archive;