import React from 'react';
import {Link} from 'react-router-dom';

function Archive(props) {

    console.log(props.history, 'history (archive)');


    return (
        <div className="archive__container">
            <h3>Archive</h3>
            <p>Here is a site with your added daily reports. &#x1F525;</p>

            <div className="archive__panels">
                {props.history.map((el) => {
                    return (
                        <div className="archive__single">
                            <Link to={`/archive/${el.date}`}>
                                <h3>{el.date && el.date}</h3>
                                {el.eatenFood.breakfast && el.eatenFood.breakfast.map((element) => {
                                    return <p>{element[0].food.label}</p>
                                })}
                                {el.eatenFood.lunch && el.eatenFood.lunch.map((element) => {
                                    return <p>{element[0].food.label}</p>
                                })}
                                {el.eatenFood.dinner && el.eatenFood.dinner.map((element) => {
                                    return <p>{element[0].food.label}</p>
                                })}
                                <p>Calorie intake: {el.total && el.total} kcal</p>
                                <p>Calorie intake to calorie need: {Number((Math.ceil(el.total) / props.dailyNeed)
                                    * 100).toFixed(2) + "%"}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Archive;