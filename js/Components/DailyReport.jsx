import React from 'react';

class DailyReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        console.log(this.props.eatenFood);
        console.log(this.props.date);

        return (
            <div className="dailyReport__container">
                <h3>It's your daily report of {this.props.date}</h3>

                <ul className="report__list">
                    <h3>Breakfast</h3>
                    {this.props.eatenFood.breakfast.map((el, index) => {
                        return <div>
                            {el[0].food.label.toLowerCase()}
                            <div>{Math.ceil(el[0].food.nutrients.ENERC_KCAL) + " kcal"}</div>
                        </div>

                    })}
                </ul>

                <ul className="report__list">
                    <h3>Lunch</h3>
                    {this.props.eatenFood.lunch.map((el, index) => {
                        return <div>
                            {el[0].food.label.toLowerCase()}
                            <div>{Math.ceil(el[0].food.nutrients.ENERC_KCAL) + " kcal"}</div>
                        </div>

                    })}
                </ul>

                <ul className="report__list">
                    <h3>Dinner</h3>
                    {this.props.eatenFood.dinner.map((el, index) => {
                        return <div>
                            {el[0].food.label.toLowerCase()}
                            <div>{Math.ceil(el[0].food.nutrients.ENERC_KCAL) + " kcal"}</div>
                        </div>

                    })}
                </ul>

            </div>
        );
    }
}

export default DailyReport;