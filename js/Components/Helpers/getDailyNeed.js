const getDailyNeed = ({weight, height, age, gender, activity}) => {
    let dailyNeedLocal = '';

    if (gender === "Male") {
        dailyNeedLocal = activity * (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        dailyNeedLocal = activity * (10 * weight) + (6.25 * height) - (5 * age) - 166;
    }

    return dailyNeedLocal
};

export default getDailyNeed;