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
                <h3>Current report</h3>
                <h4>{this.props.date}</h4>

                <ul className="report__list">
                    <h4>Breakfast</h4>
                    {this.props.eatenFood.breakfast.map((el, index) => {
                        return <div>
                            {el[0].food.label.toLowerCase()}
                            <div>{Math.ceil(el[0].food.nutrients.ENERC_KCAL) + " kcal"}</div>
                        </div>

                    })}
                </ul>

                <ul className="report__list">
                    <h4>Lunch</h4>
                    {this.props.eatenFood.lunch.map((el, index) => {
                        return <div>
                            {el[0].food.label.toLowerCase()}
                            <div>{Math.ceil(el[0].food.nutrients.ENERC_KCAL) + " kcal"}</div>
                        </div>

                    })}
                </ul>

                <ul className="report__list">
                    <h4>Dinner</h4>
                    {this.props.eatenFood.dinner.map((el, index) => {
                        return <div>
                            {el[0].food.label.toLowerCase()}
                            <div>{Math.ceil(el[0].food.nutrients.ENERC_KCAL) + " kcal"}</div>
                        </div>

                    })}
                </ul>

                <p>Total</p>

                {console.log(this.props.dailyReport, 'dailyreport z DailyReport')}

            </div>
        );
    }
}

export default DailyReport;