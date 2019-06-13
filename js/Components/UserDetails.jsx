import React from 'react';

function UserDetails(props) {

    let activity = Number(props.userDetails.activity);
    let activityText = '';
    switch (activity) {
        case 1.2:
            activityText = 'Sedentary';
            break;
        case 1.375:
            activityText = 'Lightly active';
            break;
        case 1.55:
            activityText = 'Moderately active';
            break;
        case 1.725:
            activityText = 'Very active';
            break;
        case 1.9:
            activityText = 'Extra active';
            break;
        default:
            console.log('Something went wrong, we are out of ' + activityText + '.');
    }

    return (
        <div className="user__container">
            <h3>User Details</h3>
            <p>Calorie need: {props.dailyNeed} kcal</p>
            <p>Age: {props.userDetails.age} years old</p>
            <p>Gender: {props.userDetails.gender}</p>
            <p>Weight: {props.userDetails.weight} kg</p>
            <p>Height: {props.userDetails.height} cm</p>
            <p>Activity: {activityText}</p>
        </div>
    )
}

export default UserDetails;