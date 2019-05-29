import React from 'react';

class AddReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Your daily calorie need is: ',

            breakfast: '',
            breakfastMeal: '',
            breakfastNutrients: '',

            lunch: '',
            lunchMeal: '',
            lunchNutrients: '',

            dinner: '',

            showList: true,
            showLunchList: true,
            date: "2019-06-01"
        }
    }

    fetchData = (food) => {
        let url = `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=95cca2e7&app_key=` +
            `82a7588a4ea9d81983e0794927c8cee6&ingr=${food}`;

        fetch(url).then(res => res.json()).then(json => {
            this.setState({
                breakfastMeal: json.hints
            }, () => {
                console.log(this.state.breakfastMeal, 'this.state.breakfastMEAL');
            });
        })
    };

    fetchLunchData = (food) => {
        let url = `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=95cca2e7&app_key=` +
            `82a7588a4ea9d81983e0794927c8cee6&ingr=${food}`;

        fetch(url).then(res => res.json()).then(json => {
            this.setState({
                lunchMeal: json.hints
            }, () => {
                console.log(this.state.lunchMeal, 'this.state.lunchMEAL');
            });
        })
    };

    // dodaj uniwersalność
    handleBreakfastClick = (e) => {
        e.preventDefault();

        this.fetchData(this.state.breakfast);
    };

    handleLunchClick = (e) => {
        e.preventDefault();

        this.fetchLunchData(this.state.lunch);
    };

    handleBreakfastItem = (e, foodId) => {
        e.preventDefault();

        const {breakfastMeal} = this.state;
        const choosen = breakfastMeal.filter((el) => {
            return el.food.foodId === foodId
        });

        this.setState({
            showList: false,
            breakfast: choosen[0].food.label,
            breakfastNutrients:
                {
                    kcal: Math.ceil(choosen[0].food.nutrients.ENERC_KCAL),
                    protein: Math.ceil(choosen[0].food.nutrients.PROCNT),
                    carbs: Math.ceil(choosen[0].food.nutrients.CHOCDF),
                    fat: Math.ceil(choosen[0].food.nutrients.FAT)
                }
        })
    };

    handleLunchItem = (e, foodId) => {
        e.preventDefault();

        const {lunchMeal} = this.state;
        const choosen = lunchMeal.filter((el) => {
            return el.food.foodId === foodId
        });

        this.setState({
            showLunchList: false,
            lunch: choosen[0].food.label,
            lunchNutrients:
                {
                    kcal: Math.ceil(choosen[0].food.nutrients.ENERC_KCAL),
                    protein: Math.ceil(choosen[0].food.nutrients.PROCNT),
                    carbs: Math.ceil(choosen[0].food.nutrients.CHOCDF),
                    fat: Math.ceil(choosen[0].food.nutrients.FAT)
                }
        })
    };

    handleChange = (e) => {
        let {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    render() {

        return (
            <div className={"profile__container"}>

                <div>
                    <h2>{this.state.text}{this.props.dailyNeed}</h2>
                    <h2>Add daily report
                        <label>
                            <input type={"date"} name={"date"} value={this.state.date} onChange={this.handleChange}/>
                        </label>
                        <input type="submit"/>
                    </h2>

                    <form>

                        <h3>{this.state.date}</h3>

                        {/*BREAKFAST*/}
                        <label>Dodaj raport:
                            <div className={"addMeal"}>
                                <div><i className="material-icons">add_circle_outline</i><h3>Breakfast</h3></div>
                                <input type="text" name={"breakfast"} value={this.state.breakfast}
                                       onChange={this.handleChange}/>
                            </div>
                        </label>
                        <button onClick={this.handleBreakfastClick}>Click</button>

                        {this.state.showList &&
                        <ul>{this.state.breakfastMeal && this.state.breakfastMeal.map((el, index) => {
                            return <li key={el.food.foodId + index}
                                       onClick={e => this.handleBreakfastItem(e, el.food.foodId)}>{el.food.label}</li>;
                        })}
                        </ul>
                        }

                        {/*LUNCH*/}
                        <label>Dodaj raport:
                            <div className={"addMeal"}>
                                <div><i className="material-icons">add_circle_outline</i><h3>Lunch</h3></div>
                                <input type="text" name={"lunch"} value={this.state.lunch}
                                       onChange={this.handleChange}/>
                            </div>
                        </label>
                        <button onClick={this.handleLunchClick}>Click</button>

                        {this.state.showLunchList &&
                        <ul>{this.state.lunchMeal && this.state.lunchMeal.map((el, index) => {
                            return <li key={el.food.foodId + index}
                                       onClick={e => this.handleLunchItem(e, el.food.foodId)}>{el.food.label}</li>;
                        })}
                        </ul>
                        }

                    </form>

                    <ul>
                        <h2>Daily report</h2>

                        {this.state.breakfastNutrients &&

                        <li>
                            {this.state.breakfast + ': ' + this.state.breakfastNutrients.kcal + " Kcal oraz "}

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


                    </ul>

                </div>

            </div>
        );
    }
}

export default AddReport;