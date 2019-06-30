import React from 'react';
import AddBreakfast from "./AddBreakfast.jsx";
import AddLunch from "./AddLunch.jsx";
import AddDinner from "./AddDinner.jsx";

class AddReport extends React.Component {

    render() {

        return (

            <div>
                <div className="addReport__container">
                    <h3>Add your daily report</h3>
                </div>

                <div className="addReport__container">
                    <label>
                        <input type="date" name="date" value={this.props.date} onChange={this.props.handleChange}/>
                    </label>

                    {this.props.loaderVisibility && <div className="loader"></div>}

                    <form onSubmit={this.props.handleSubmitReport}>

                        <AddBreakfast
                            breakfastInput={this.props.breakfastInput}
                            handleChange={this.props.handleChange}
                            handleClick={this.props.handleClick}
                            showBreakfastList={this.props.showBreakfastList}
                            breakfastMeal={this.props.breakfastMeal}
                            handleListItemClick={this.props.handleListItemClick}/>

                        <AddLunch
                            lunchInput={this.props.lunchInput}
                            handleChange={this.props.handleChange}
                            handleClick={this.props.handleClick}
                            showLunchList={this.props.showLunchList}
                            lunchMeal={this.props.lunchMeal}
                            handleListItemClick={this.props.handleListItemClick}/>

                        <AddDinner
                            dinnerInput={this.props.dinnerInput}
                            handleChange={this.props.handleChange}
                            handleClick={this.props.handleClick}
                            showDinnerList={this.props.showDinnerList}
                            dinnerMeal={this.props.dinnerMeal}
                            handleListItemClick={this.props.handleListItemClick}/>

                        <input type="submit" value={'Send for ' + this.props.date}/>

                    </form>

                </div>
            </div>

        );
    }
}

export default AddReport;

