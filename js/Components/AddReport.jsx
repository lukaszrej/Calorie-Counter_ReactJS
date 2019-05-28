import React from 'react';

class AddReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Your daily calorie need is: ',
            breakfast: '',
            breakfastNutrients: '',
            lunch: '',
            dinner: '',
            meal: '',
            showList: true,
            date: "2019-06-01"
        }
    }

    fetchData = (food) => {
        let url = `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=95cca2e7&app_key=` +
            `82a7588a4ea9d81983e0794927c8cee6&ingr=${food}`;

        fetch(url).then(res => res.json()).then(json => {

            this.setState({
                meal: json.hints
            }, () => {
                console.log(this.state.meal, 'this.state.MEAL');
            });

            // console.log(json.hints[0].food.nutrients.CHOCDF, 'carbs');
            // console.log(json.hints[0].food.nutrients.FAT, 'fat');
            // console.log(json.hints[0].food.nutrients.PROCNT, 'proteins');
            // console.log(json.hints[0].food.nutrients.ENERC_KCAL, 'calories');
        })

    };

    // dodaj uniwersalność
    handleBreakfastClick = (e) => {
        e.preventDefault();

        this.fetchData(this.state.breakfast);
    };

    handleBreakfastItem = (e, foodId) => {
        e.preventDefault();

        const {meal} = this.state;
        const choosen = meal.filter((el) => {
            return el.food.foodId === foodId
        });

        console.log(choosen[0].food.label);

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

                        <label>Dodaj raport:
                            <div className={"addMeal"}>
                                <div><i className="material-icons">add_circle_outline</i><h3>Breakfast</h3></div>
                                <input type="text" name={"breakfast"} value={this.state.breakfast}
                                       onChange={this.handleChange}/>
                            </div>
                        </label>
                        <button onClick={this.handleBreakfastClick}>Click</button>

                        {this.state.showList &&
                        <ul>{this.state.meal && this.state.meal.map((el, index) => {
                            // console.log(el, 'L');
                            return <li key={el.food.foodId + index}
                                       onClick={e => this.handleBreakfastItem(e, el.food.foodId)}>{el.food.label}</li>;
                        })}
                        </ul>
                        }

                        {/*<label>Dodaj raport:*/}
                        {/*    <div className={"addMeal"}>*/}
                        {/*        <div><i className="material-icons">add_circle_outline</i><h3>Lunch</h3></div>*/}
                        {/*        <input type="text" name={"lunch"} value={this.state.lunch}*/}
                        {/*               onChange={this.handleChange}/>*/}
                        {/*    </div>*/}
                        {/*</label>*/}
                        {/*<input type="submit"/>*/}


                        <label>Dodaj raport:
                            <div className={"addMeal"}>
                                <div><i className="material-icons">add_circle_outline</i><h3>Dinner</h3></div>
                                <input type="text" name={"dinner"} value={this.state.dinner}
                                       onChange={this.handleChange}/>
                            </div>
                        </label>
                        <input type="submit"/>

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

                        {/*<li>{this.state.lunch}:</li>*/}
                        {/*<li>{this.state.dinner}:</li>*/}

                    </ul>

                </div>

            </div>
        );
    }
}

export default AddReport;