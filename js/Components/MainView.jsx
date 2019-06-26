import React from 'react';
import AddReport from './AddReport.jsx';
import UserDetails from './UserDetails.jsx';
import DailyReport from './DailyReport.jsx';
import BatteryWrapper from './Battery/BatteryWrapper.jsx'

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            date: '2019-07-01',

            breakfastMeal: '',
            breakfastInput: '',

            lunchMeal: '',
            lunchInput: '',

            dinnerMeal: '',
            dinnerInput: '',

            eatenFood: {
                breakfast: [],
                lunch: [],
                dinner: []
            },

            total: 0,

            showBreakfastList: false,
            showLunchList: false,
            showDinnerList: false,

            loaderVisibility: false
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    handleClick = (e, meal) => {
        e.preventDefault();

        let food = '';
        let showList = '';
        switch (meal) {
            case 'breakfastMeal':
                food = this.state.breakfastInput;
                showList = "showBreakfastList";
                break;
            case 'lunchMeal':
                food = this.state.lunchInput;
                showList = "showLunchList";
                break;
            case 'dinnerMeal':
                food = this.state.dinnerInput;
                showList = "showDinnerList";
                break;
            default:
                console.log(food, 'tu nie wchodzisz');
        }

        this.fetchData(meal, food);

        this.setState({
            [showList]: true
        })
    };

    fetchData = (meal, food) => {
        const url = `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=95cca2e7&app_key=` +
            `82a7588a4ea9d81983e0794927c8cee6&ingr=${food}`;

        this.setState({
            loaderVisibility: true
        });

        fetch(url).then(res => res.json())
            .then(json => {

                this.setState({
                    [meal]: json.hints,
                    loaderVisibility: false
                });

                if (json.hints.length === 0) {
                    alert('nothing found');
                    this.setState({
                        breakfastInput: '',
                        lunchInput: '',
                        dinnerInput: ''
                    })
                }

            }).catch(() => console.log('Problem with the server'));
    };

    handleListItemClick = (e, mealName, foodId) => {
        e.preventDefault();

        let input = "";
        let showList = '';
        let meal = [];

        switch (mealName) {
            case 'breakfast':
                meal = this.state.breakfastMeal;
                input = "breakfastInput";
                showList = "showBreakfastList";
                break;
            case 'lunch':
                meal = this.state.lunchMeal;
                input = "lunchInput";
                showList = "showLunchList";
                break;
            case 'dinner':
                meal = this.state.dinnerMeal;
                input = "dinnerInput";
                showList = "showDinnerList";
                break;
            default:
                console.log('tu nie wchodzisz');
        }

        const choosen = meal.filter((el) => {
            return el.food.foodId === foodId
        });

        const choosenCalorie = Math.ceil(choosen[0].food.nutrients.ENERC_KCAL);
        let total = this.state.total + choosenCalorie;

        const eatenFood = {...this.state.eatenFood};


        for (const meal in eatenFood) {
            if (meal === mealName) {
                eatenFood[meal].push(choosen);
            }
        }

        this.setState({
            [input]: "",
            [showList]: false,
            eatenFood: eatenFood,
            total: total,
        })
    };

    handleSubmitReport = (e) => {
        e.preventDefault();

        const dailyReport = {};
        const {date, eatenFood, total} = this.state;

        dailyReport.date = date;
        dailyReport.total = total;
        dailyReport.eatenFood = eatenFood;

        if (typeof this.props.addToHistory === "function") {
            this.props.addToHistory(dailyReport);
        }

        this.setState({
            eatenFood: {
                breakfast: [],
                lunch: [],
                dinner: [],
            },
            total: 0
        });

        alert('The form of ' + this.state.date + ' has been correctly submitted');

    };


    render() {

        return (
            <div className="dashboard">

                <div>
                    <UserDetails
                        dailyNeed={this.props.userDetails.dailyNeed}
                        userDetails={this.props.userDetails}/>

                    <DailyReport eatenFood={this.state.eatenFood}
                                 date={this.state.date}
                                 dailyNeed={this.props.dailyNeed}
                                 total={this.state.total}/>
                </div>

                <AddReport date={this.state.date}
                           loaderVisibility={this.state.loaderVisibility}

                           handleChange={this.handleChange}
                           handleSubmitReport={this.handleSubmitReport}
                           handleClick={this.handleClick}
                           handleListItemClick={this.handleListItemClick}

                           breakfastInput={this.state.breakfastInput}
                           lunchInput={this.state.lunchInput}
                           dinnerInput={this.state.dinnerInput}

                           showBreakfastList={this.state.showBreakfastList}
                           showLunchList={this.state.showLunchList}
                           showDinnerList={this.state.showDinnerList}

                           breakfastMeal={this.state.breakfastMeal}
                           lunchMeal={this.state.lunchMeal}
                           dinnerMeal={this.state.dinnerMeal}/>

                <BatteryWrapper dailyNeed={this.props.dailyNeed}
                                total={this.state.total}/>

            </div>
        );
    }
}

export default MainView;