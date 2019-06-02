import React from 'react';

class AddReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            date: '',

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
            showDinnerList: false
        }
    }

    fetchData = (meal, food) => {
        const url = `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=95cca2e7&app_key=` +
            `82a7588a4ea9d81983e0794927c8cee6&ingr=${food}`;

        fetch(url).then(res => res.json()).then(json => {

            this.setState({
                [meal]: json.hints
            }, () => {
                console.log(this.state[meal], meal)
            })

        })
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

        const eatenFood = {...this.state.eatenFood}; // skopiowany obiekt ze state

        // todo: for-in
        // for (const food in eatenFood) {
        //     if (food === meal) {
        //         eatenFood[food] = json.hints
        //     }
        // }
        //
        //


        this.setState({
            [input]: "",
            [showList]: false,
            eatenFood: eatenFood,
            breakfastNutrients:
                {
                    kcal: Math.ceil(choosen[0].food.nutrients.ENERC_KCAL),
                    protein: Math.ceil(choosen[0].food.nutrients.PROCNT),
                    carbs: Math.ceil(choosen[0].food.nutrients.CHOCDF),
                    fat: Math.ceil(choosen[0].food.nutrients.FAT)
                }
        })
    };

    handleChange = (e) => {
        const {name, value} = e.target; // destructuring

        this.setState({
            [name]: value
        });
    };

    handleSubmitReport = (e) => {
        e.preventDefault();

        const dailyReport = {};
        const date = this.state.date;

        this.setState({
            dailyReport: dailyReport
        })
    };

    render() {

        const eatenFood = this.state.eatenFood;

        return (
            <div className="dashboard">
                <div className="addReport__container">

                    <h3>Your daily calorie need is: {this.props.dailyNeed}</h3>

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
                                <div><i className="material-icons">add_circle_outline</i><h3>Breakfast</h3></div>
                                <input type="text" name="breakfastInput" value={this.state.breakfastInput}
                                       onChange={(e) => this.handleChange(e)}/>
                            </div>
                        </label>
                        <button onClick={(e) => this.handleClick(e, "breakfastMeal")}>Click</button>

                        {this.state.showBreakfastList &&
                        <ul>{this.state.breakfastMeal && this.state.breakfastMeal.map((el, index) => {
                            return <li key={el.food.foodId + index} name="breakfast"
                                       onClick={e => this.handleListItemClick(e, "breakfast", el.food.foodId)}>
                                {el.food.label.toLowerCase()}</li>;
                        })}
                        </ul>
                        }

                        {/* l u n c h */}
                        <label>
                            <div className="addMeal">
                                <div><i className="material-icons">add_circle_outline</i><h3>Lunch</h3></div>
                                <input type="text" name="lunchInput" value={this.state.lunchInput}
                                       onChange={this.handleChange}/>
                            </div>
                        </label>
                        <button onClick={(e) => this.handleClick(e, "lunchMeal")}>Click</button>

                        {this.state.showLunchList &&
                        <ul>{this.state.lunchMeal && this.state.lunchMeal.map((el, index) => {
                            return <li key={el.food.foodId + index} name="lunch"
                                       onClick={e => this.handleListItemClick(e, "lunch", el.food.foodId)}>
                                {el.food.label.toLowerCase()}</li>;
                        })}
                        </ul>
                        }

                        {/* d i n n e r */}
                        <label>
                            <div className="addMeal">
                                <div><i className="material-icons">add_circle_outline</i><h3>Dinner</h3></div>
                                <input type="text" name="dinnerInput" value={this.state.dinnerInput}
                                       onChange={this.handleChange}/>
                            </div>
                        </label>
                        <button onClick={(e) => this.handleClick(e, "dinnerMeal")}>Click</button>

                        {this.state.showDinnerList &&
                        <ul>{this.state.dinnerMeal && this.state.dinnerMeal.map((el, index) => {
                            return <li key={el.food.foodId + index} name="dinner"
                                       onClick={e => this.handleListItemClick(e, "dinner", el.food.foodId)}>
                                {el.food.label.toLowerCase()}</li>;
                        })}
                        </ul>
                        }


                        <input type="submit"/>
                    </form>

                    <ul>
                        <h2>Daily report</h2>

                        {this.state.breakfastNutrients &&

                        <li>
                            {this.state.breakfastLabel + ': ' + this.state.breakfastNutrients.kcal + " Kcal oraz "}

                            {
                                !isNaN(this.state.breakfastNutrients.carbs) &&
                                this.state.breakfastNutrients.carbs + " gram węglowodanów "
                            }

                            {
                                !isNaN(this.state.breakfastNutrients.fat) &&
                                this.state.breakfastNutrients.fat + " gram tłuszczu."
                            }
                        </li>}

                        {this.state.lunchNutrients &&

                        <li>
                            {this.state.lunch + ': ' + this.state.lunchNutrients.kcal + " Kcal oraz "}

                            {
                                !isNaN(this.state.lunchNutrients.carbs) &&
                                this.state.lunchNutrients.carbs + " gram węglowodanów "
                            }

                            {
                                !isNaN(this.state.lunchNutrients.fat) &&
                                this.state.lunchNutrients.fat + " gram tłuszczu."
                            }
                        </li>}

                        <div style={{backgroundColor: "grey"}}>
                            {"total to: "
                            + (Number(this.state.breakfastNutrients.kcal) + Number(this.state.lunchNutrients.kcal))
                            + " kalorii"
                            }
                        </div>
                        <div style={{backgroundColor: "grey"}}>
                            {"do zjedzenia jeszcze: " + (this.props.dailyNeed
                                - (Number(this.state.breakfastNutrients.kcal) + Number(this.state.lunchNutrients.kcal)))
                            + " kalorii z: " + this.props.dailyNeed + " kalorii"
                            }
                        </div>


                    </ul>

                </div>

                <div style={{backgroundColor: "orange"}}>Your daily report: </div>

            </div>

        );
    }
}

export default AddReport;