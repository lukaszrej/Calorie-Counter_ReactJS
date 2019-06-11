import React from 'react';
import DailyReport from './DailyReport.jsx';
import UserDetails from "./UserDetails.jsx";

class AddReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            date: '2019-06-09',

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

            breakfastNutrients: '',
            lunchNutrients: '',
            dinnerNutrients: '',

            showBreakfastList: false,
            showLunchList: false,
            showDinnerList: false,

            loaderVisibility: false
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target; // destructuring

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

                console.log(json.hints, 'hiiiiints');

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

        const eatenFood = {...this.state.eatenFood}; // state copied

        for (const meal in eatenFood) {
            if (meal === mealName) {
                eatenFood[meal].push(choosen); // or: eatenFood.meal.push(choosen);
            }
        }

        this.setState({
            [input]: "",
            [showList]: false,
            eatenFood: eatenFood,
        })
    };

    handleSubmitReport = (e) => {
        e.preventDefault();

        const dailyReport = {};
        const date = this.state.date;
        const eatenFood = this.state.eatenFood;
        dailyReport.date = date;
        dailyReport.eatenFood = eatenFood;

        console.log(dailyReport, 'daily report');

        this.setState({
            dailyReport: dailyReport
        });


    };

    render() {

        const eatenFood = this.state.eatenFood;
        console.log(eatenFood, 'eatenfooddd');

        return (
            <div className="dashboard">
                <div className="addReport__container">

                    <h3>Your daily calorie need is: {this.props.dailyNeed}</h3>

                    {this.state.loaderVisibility && <div className="loader"></div>}

                    <label>
                        <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
                    </label>

                    <form onSubmit={this.handleSubmitReport.bind(this)}>

                        {this.state.date &&
                        <h3>{this.state.date}</h3>
                        }

                        {/* b r e a k f a s t */}
                        <label>
                            <div className="addMeal">
                                <div><h3>Breakfast</h3></div>
                                <input type="text" name="breakfastInput" placeholder="Search food"
                                       value={this.state.breakfastInput}
                                       onChange={(e) => this.handleChange(e)}/>
                            </div>
                        </label>

                        <button onClick={(e) => this.handleClick(e, "breakfastMeal")}>Find</button>

                        {this.state.showBreakfastList &&
                        <ul className="result__list">{this.state.breakfastMeal && this.state.breakfastMeal.map((el, index) => {
                            return <div
                                key={el.food.foodId + index} name="breakfast"
                                onClick={e => this.handleListItemClick(e, "breakfast", el.food.foodId)}>
                                {el.food.label.toLowerCase()}

                                <div>
                                    {!isNaN(Math.ceil(el.food.nutrients.ENERC_KCAL)) &&
                                    Math.ceil(el.food.nutrients.ENERC_KCAL) + " kcal"}

                                    {!isNaN(Math.ceil(el.food.nutrients.PROCNT)) && " | " +
                                    Math.ceil(el.food.nutrients.PROCNT) + " g protein"}

                                    {!isNaN(Math.ceil(el.food.nutrients.CHOCDF)) && " | " +
                                    Math.ceil(el.food.nutrients.CHOCDF) + " g carbs"}

                                    {!isNaN(Math.ceil(el.food.nutrients.FAT)) && " | " +
                                    Math.ceil(el.food.nutrients.FAT) + " g fat "}
                                </div>

                            </div>;
                        })}
                        </ul>
                        }

                        {/* l u n c h */}
                        <label>
                            <div className="addMeal">
                                <div><h3>Lunch</h3></div>
                                <input type="text" name="lunchInput" placeholder="Search food"
                                       value={this.state.lunchInput}
                                       onChange={this.handleChange}/>
                            </div>
                        </label>
                        <button onClick={(e) => this.handleClick(e, "lunchMeal")}>Find</button>

                        {this.state.showLunchList &&
                        <ul className="result__list">{this.state.lunchMeal && this.state.lunchMeal.map((el, index) => {
                            return <div
                                key={el.food.foodId + index} name="lunch"
                                onClick={e => this.handleListItemClick(e, "lunch", el.food.foodId)}>
                                {el.food.label.toLowerCase()}

                                <div>
                                    {!isNaN(Math.ceil(el.food.nutrients.ENERC_KCAL)) &&
                                    Math.ceil(el.food.nutrients.ENERC_KCAL) + " kcal"}

                                    {!isNaN(Math.ceil(el.food.nutrients.PROCNT)) && " | " +
                                    Math.ceil(el.food.nutrients.PROCNT) + " g protein"}

                                    {!isNaN(Math.ceil(el.food.nutrients.CHOCDF)) && " | " +
                                    Math.ceil(el.food.nutrients.CHOCDF) + " g carbs"}

                                    {!isNaN(Math.ceil(el.food.nutrients.FAT)) && " | " +
                                    Math.ceil(el.food.nutrients.FAT) + " g fat "}
                                </div>

                            </div>;
                        })}


                        </ul>
                        }

                        {/* d i n n e r */}
                        <label>
                            <div className="addMeal">
                                <div><h3>Dinner</h3></div>
                                <input type="text" name="dinnerInput" placeholder="Search food"
                                       value={this.state.dinnerInput}
                                       onChange={this.handleChange}/>
                            </div>
                        </label>
                        <button onClick={(e) => this.handleClick(e, "dinnerMeal")}>Find</button>

                        {this.state.showDinnerList &&
                        <ul className="result__list">{this.state.dinnerMeal && this.state.dinnerMeal.map((el, index) => {
                            return <div
                                key={el.food.foodId + index} name="dinner"
                                onClick={e => this.handleListItemClick(e, "dinner", el.food.foodId)}>
                                {el.food.label.toLowerCase()}

                                <div>
                                    {!isNaN(Math.ceil(el.food.nutrients.ENERC_KCAL)) &&
                                    Math.ceil(el.food.nutrients.ENERC_KCAL) + " kcal"}

                                    {!isNaN(Math.ceil(el.food.nutrients.PROCNT)) && " | " +
                                    Math.ceil(el.food.nutrients.PROCNT) + " g protein"}

                                    {!isNaN(Math.ceil(el.food.nutrients.CHOCDF)) && " | " +
                                    Math.ceil(el.food.nutrients.CHOCDF) + " g carbs"}

                                    {!isNaN(Math.ceil(el.food.nutrients.FAT)) && " | " +
                                    Math.ceil(el.food.nutrients.FAT) + " g fat "}
                                </div>

                            </div>;
                        })}
                        </ul>
                        }

                        <input type="submit"/>
                    </form>

                    <div className="popularFood__container">
                        <h2>Don't cheat</h2>
                        <h3>Select your snack or sweet you have eaten today</h3>
                        <div>Chips</div>
                        <div>Chocolate</div>
                        <div>Coca cola</div>
                        <div>Snickers</div>
                    </div>

                </div>

                <DailyReport eatenFood={this.state.eatenFood}
                             date={this.state.date}
                             dailyNeed={this.props.dailyNeed}
                             dailyReport={this.state.dailyReport}/>

                <UserDetails
                    dailyNeed={this.props.userDetails.dailyNeed}
                    userDetails={this.props.userDetails}/>

            </div>

        );
    }
}

export default AddReport;