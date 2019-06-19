import React from 'react';

class DailyReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className="dailyReport__container">
                <h3>Current report</h3>
                <h4 className="date__container">{this.props.date}</h4>

                <ul className="report__list">
                    <h4>Breakfast</h4>
                    {this.props.eatenFood.breakfast.map((el, index) => {

                        return <div key={el.map((el) => el.food.foodId + index)}>
                            {el[0].food.label.toLowerCase()}
                            <div>{Math.ceil(el[0].food.nutrients.ENERC_KCAL) + " kcal"}</div>
                        </div>

                    })}
                </ul>

                <ul className="report__list">
                    <h4>Lunch</h4>
                    {this.props.eatenFood.lunch.map((el, index) => {

                        return <div key={el.map((el) => el.food.foodId + index)}>
                            {el[0].food.label.toLowerCase()}
                            <div>{Math.ceil(el[0].food.nutrients.ENERC_KCAL) + " kcal"}</div>
                        </div>

                    })}
                </ul>

                <ul className="report__list">
                    <h4>Dinner</h4>
                    {this.props.eatenFood.dinner.map((el, index) => {

                        return <div key={el.map((el) => el.food.foodId + index)}>
                            {el[0].food.label.toLowerCase()}
                            <div>{Math.ceil(el[0].food.nutrients.ENERC_KCAL) + " kcal"}</div>
                        </div>

                    })}
                </ul>

                <ul className="addReport__container">
                    <h4>Total: <span>{this.props.total}</span></h4>
                </ul>

            </div>
        );
    }
}

export default DailyReport;