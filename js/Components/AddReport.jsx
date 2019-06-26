import React from 'react';

class AddReport extends React.Component {

    render() {

        return (

            <div>

                <div>
                    <div className="addReport__container">
                        <h3>Add your daily report here</h3>
                    </div>

                    <div className="addReport__container">
                        <label>
                            <input type="date" name="date" value={this.props.date} onChange={this.props.handleChange}/>
                        </label>

                        {this.props.loaderVisibility && <div className="loader"></div>}

                        <form onSubmit={this.props.handleSubmitReport}>

                            {/* b r e a k f a s t */}
                            <label>
                                <div className="addMeal">
                                    <div><h3>Breakfast</h3></div>
                                    <input type="text" name="breakfastInput" placeholder="Search food"
                                           value={this.props.breakfastInput}
                                           onChange={(e) => this.props.handleChange(e)}/>
                                </div>
                            </label>

                            <button onClick={(e) => this.props.handleClick(e, 'breakfastMeal')}>Find</button>

                            {this.props.showBreakfastList &&
                            <ul className="result__list">{this.props.breakfastMeal && this.props.breakfastMeal.map((el, index) => {

                                return <div
                                    key={el.food.foodId + index} name="breakfast"
                                    onClick={e => this.props.handleListItemClick(e, "breakfast", el.food.foodId)}>
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

                            {/*l u n c h */}
                            <label>
                                <div className="addMeal">
                                    <div><h3>Lunch</h3></div>
                                    <input type="text" name="lunchInput" placeholder="Search food"
                                           value={this.props.lunchInput}
                                           onChange={this.props.handleChange}/>
                                </div>
                            </label>
                            <button onClick={(e) => this.props.handleClick(e, "lunchMeal")}>Find</button>

                            {this.props.showLunchList &&
                            <ul className="result__list">{this.props.lunchMeal && this.props.lunchMeal.map((el, index) => {
                                return <div
                                    key={el.food.foodId + index} name="lunch"
                                    onClick={e => this.props.handleListItemClick(e, "lunch", el.food.foodId)}>
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
                                           value={this.props.dinnerInput}
                                           onChange={this.props.handleChange}/>
                                </div>
                            </label>
                            <button onClick={(e) => this.props.handleClick(e, "dinnerMeal")}>Find</button>

                            {this.props.showDinnerList &&
                            <ul className="result__list">{this.props.dinnerMeal && this.props.dinnerMeal.map((el, index) => {
                                return <div
                                    key={el.food.foodId + index} name="dinner"
                                    onClick={e => this.props.handleListItemClick(e, "dinner", el.food.foodId)}>
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

                            <input type="submit" value={'Send for ' + this.props.date}/>
                        </form>
                    </div>

                </div>

            </div>

        );
    }
}

export default AddReport;