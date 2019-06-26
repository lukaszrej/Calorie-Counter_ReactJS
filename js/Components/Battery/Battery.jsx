import React from 'react';

function Battery(props) {

    return (
        <div className="battery__container">
            <div>
                {props.total >= 0 &&
                <div><i className="material-icons">battery_charging_full</i></div>}
            </div>
        </div>
    )
}

export default Battery;