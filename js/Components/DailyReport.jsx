import React from 'react';

class DailyReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        console.log(this.props.eatenFood);

        return (
            <div className="dailyReport__container">
                <h3>It's your daily report</h3>

                <ul className="report__list">
                    {this.props.eatenFood.breakfast.map((el, index) => {
                        return <div>
                            {el[0].food.label.toLowerCase()}
                            <div>{Math.ceil(el[0].food.nutrients.ENERC_KCAL)+ " kcal"}</div>
                        </div>

                    })}
                </ul>

                {/*<p>Your breakast: {this.props.eatenFood.breakfast.map((el) => {*/}
                {/*    console.log(el[0].food.label, 'el .food');*/}


                {/*    return <div>{el[0].food.label}</div>*/}
                {/*})}</p>*/}



                {/*{this.state.breakfastNutrients &&*/}

                {/*<span>*/}
                {/*        {this.state.breakfastNutrients + ': ' + this.state.breakfastNutrients.kcal + " Kcal oraz "}*/}

                {/*    {*/}
                {/*        !isNaN(this.state.breakfastNutrients.carbs) &&*/}
                {/*        this.state.breakfastNutrients.carbs + " gram węglowodanów "*/}
                {/*    }*/}

                {/*    {*/}
                {/*        !isNaN(this.state.breakfastNutrients.fat) &&*/}
                {/*        this.state.breakfastNutrients.fat + " gram tłuszczu."*/}
                {/*    }*/}
                {/*    </span>}*/}

                {/*{this.state.lunchNutrients &&*/}

                {/*<span>*/}
                {/*        {this.state.lunch + ': ' + this.state.lunchNutrients.kcal + " Kcal oraz "}*/}

                {/*    {*/}
                {/*        !isNaN(this.state.lunchNutrients.carbs) &&*/}
                {/*        this.state.lunchNutrients.carbs + " gram węglowodanów "*/}
                {/*    }*/}

                {/*    {*/}
                {/*        !isNaN(this.state.lunchNutrients.fat) &&*/}
                {/*        this.state.lunchNutrients.fat + " gram tłuszczu."*/}
                {/*    }*/}
                {/*    </span>}*/}

                {/*<div>*/}
                {/*    {"total to: "*/}
                {/*    + (Number(this.state.breakfastNutrients.kcal) + Number(this.state.lunchNutrients.kcal))*/}
                {/*    + " kalorii"*/}
                {/*    }*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    {"do zjedzenia jeszcze: " + (this.props.dailyNeed*/}
                {/*        - (Number(this.state.breakfastNutrients.kcal) + Number(this.state.lunchNutrients.kcal)))*/}
                {/*    + " kalorii z: " + this.props.dailyNeed + " kalorii"*/}
                {/*    }*/}
                {/*</div>*/}

            </div>
        );
    }
}

export default DailyReport;