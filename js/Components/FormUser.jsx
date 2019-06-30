import React from 'react';
import {withRouter} from 'react-router-dom';

import getDailyNeed from './Helpers/getDailyNeed.js';
import activityOptions from './Helpers/activityOptions.js';

class FormUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: this.props.userDetails.weight,
            height: this.props.userDetails.height,
            age: this.props.userDetails.age,
            gender: this.props.userDetails.gender,
            activity: this.props.userDetails.activity
        }
    }

    changeInput = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    submitForm = (e) => {
        e.preventDefault();
        const {weight, height, age, gender, activity} = this.state;
        const {setDailyNeed, setFormSubmitted, updateUser} = this.props;

        const dailyNeedLocal = getDailyNeed({height, weight, age, gender, activity});

        let newCurrUserDetails = {
            weight: weight, height: height, age: age, gender: gender,
            activity: activity, dailyNeed: dailyNeedLocal
        };

        if (typeof setDailyNeed === "function") {
            setDailyNeed(dailyNeedLocal);
        }

        if (typeof setFormSubmitted === 'function') {
            setFormSubmitted();
        }

        if (typeof updateUser === 'function') {
            updateUser(newCurrUserDetails);
        }

        this.props.history.push('/dashboard'); // withRouter
    };

    render() {

        return (
            <div className="container__flex--user">

                <h3>Control your calorie intake!</h3>

                <h5>Tell us more about you and start using Calorie Counter.</h5>

                <form className="form__user" onSubmit={this.submitForm}>

                    <label>Weight (kg)
                        <input name="weight" type="number" value={this.state.weight}
                               onChange={this.changeInput}/>
                    </label>
                    <label>Height (cm)
                        <input name="height" type="number" value={this.state.height}
                               onChange={this.changeInput}/>
                    </label>
                    <label>Age (years)
                        <input name="age" type="number" value={this.state.age}
                               onChange={this.changeInput}/>
                    </label>

                    <label style={{display: "flex"}}>
                        <div>
                            <label htmlFor="Male">Male</label>
                            <input name="gender" type="radio" value="Male" onChange={this.changeInput}
                                   checked={(this.state.gender === "Male")}/>
                        </div>
                        <div>
                            <label htmlFor="Female">Female</label>
                            <input name="gender" type="radio" value="Female" onChange={this.changeInput}
                                   checked={(this.state.gender === "Female")}/>
                        </div>
                    </label>

                    <label htmlFor="activity">
                        <p>Physical activity level</p>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <select name="activity" value={this.state.activity} onChange={this.changeInput}>
                                {activityOptions.map((el) => {
                                    return (
                                        <option key={el.activityDescription + el.index}
                                                value={el.activityValue}>{el.activityDescription}</option>
                                    )
                                })}
                            </select>
                        </div>

                    </label>

                    <label><input type="submit" value="Start"/></label>

                </form>

            </div>
        );
    }
}

export default withRouter(FormUser);