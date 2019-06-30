import React from 'react';

function AddBreakfast(props) {

    return (

        <div>
            <label>
                <div className="addMeal">
                    <div><h3>Breakfast</h3></div>
                    <input type="text" name="breakfastInput" placeholder="Search food"
                           value={props.breakfastInput}
                           onChange={(e) => props.handleChange(e)}/>
                </div>
            </label>

            <button onClick={(e) => props.handleClick(e, 'breakfastMeal')}>Find</button>

            {props.showBreakfastList &&
            <ul className="result__list">{props.breakfastMeal && props.breakfastMeal.map((el, index) => {

                return <div
                    key={el.food.foodId + index} name="breakfast"
                    onClick={e => props.handleListItemClick(e, "breakfast", el.food.foodId)}>
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
            </ul>}
        </div>
        
    )
}

export default AddBreakfast;