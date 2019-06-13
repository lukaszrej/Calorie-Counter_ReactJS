import React from 'react';

class FormUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,

            weight: this.props.userDetails.weight,
            height: this.props.userDetails.height,
            age: this.props.userDetails.age,
            gender: this.props.userDetails.gender,
            activity: this.props.userDetails.activity
        }
    }

    letsStart = () => {
        this.setState({
            start: !this.state.start
        })
    };

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

        let dailyNeedLocal = '';
        if (gender === "Male") {
            dailyNeedLocal = activity * (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            dailyNeedLocal = activity * (10 * weight) + (6.25 * height) - (5 * age) - 166;
        }

        let newCurrUserDetails = {weight: weight, height: height, age: age, gender: gender, activity: activity};

        if (typeof setDailyNeed === "function") {
            setDailyNeed(dailyNeedLocal);
        }

        if (typeof setFormSubmitted === 'function') {
            setFormSubmitted();
        }

        if (typeof updateUser === 'function') {
            updateUser(newCurrUserDetails);
        }
    };

    render() {
        return (
            <div className="container__flex--user">

                <h3>Control your calorie intake</h3>

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
                        <select name="activity" value={this.state.activity} onChange={this.changeInput}>
                            <option value="1.2">Sedentary (little or no exercise)</option>
                            <option value="1.375">Lightly active (light exercise 1-3 days/week)</option>
                            <option value="1.55">Moderately active (moderate exercise 3-5 days/week)</option>
                            <option value="1.725">Very active (hard exercise 6-7 days a week)</option>
                            <option value="1.9">Extra active (very hard exercise & physical job</option>
                        </select>
                    </label>

                    <label><input type="submit" value="Submit"/></label>

                </form>

            </div>
        );
    }
}

export default FormUser;