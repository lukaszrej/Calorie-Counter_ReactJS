import React from 'react';
import Battery from "./Battery.jsx";

function BatteryWrapper(props) {

    return (
        <div>
            <div className="addReport__container">
                <h3>Charge your batteries</h3>
            </div>
            <div className="addReport__container">
                <h3>Your daily calorie need is: {props.dailyNeed} kcal</h3>
                <h3>Your daily calorie intake is: {props.total} kcal</h3>
            </div>
            <div className="addReport__container">
                <Battery total={props.total}/>
            </div>
        </div>
    )
}

export default BatteryWrapper;