import React from 'react';

function UserDetails(props) {

    let activity = Number(props.userDetails.activity);
    let activityText = '';
    switch (activity) {
        case 1.2:
            activityText = 'Sedentary (little or no exercise)';
            break;
        case 1.375:
            activityText = 'Lightly active (light exercise 1-3 days/week)';
            break;
        case 1.55:
            activityText = 'Moderately active (moderate exercise 3-5 days/week)';
            break;
        case 1.725:
            activityText = 'Very active (hard exercise 6-7 days a week)';
            break;
        case 1.9:
            activityText = 'Extra active (very hard exercise & physical job';
            break;
        default:
            console.log('Something went wrong, we are out of ' + activityText + '.');
    }

    return (
        <div className="addReport__container">
            <h3>User Details</h3>
            <p>Daily calorie need: {props.dailyNeed} kcal</p>
            <p>Age: {props.userDetails.age} years old</p>
            <p>Gender: {props.userDetails.gender}</p>
            <p>Weight: {props.userDetails.weight} kg</p>
            <p>Height: {props.userDetails.height} cm</p>
            <p>Activity: {activityText}</p>
        </div>
    )
}

export default UserDetails;