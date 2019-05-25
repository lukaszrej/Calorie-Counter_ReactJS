import React from 'react';

class AddReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Your daily calorie need is: ',
            breakfast: '',
            lunch: '',
            dinner: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.breakfast, 'breakfast');
        console.log(this.state.lunch, 'lunch');
        console.log(this.state.dinner, 'dinner');
    };

    handleChange = (e) => {
        let {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    render() {

        this.fetchData();

        return (
            <div className={"profile__container"}>

                <h2>{this.state.text}{this.props.dailyNeed}</h2>

                <h2>Add report</h2>

                <form onSubmit={this.handleSubmit}>

                    <label>Dodaj raport:
                        <div className={"addMeal"}>
                            <div><i className="material-icons">add_circle_outline</i><h3>Śniadanie</h3></div>
                            <input type="text" name={"breakfast"} value={this.state.breakfast} onChange={this.handleChange}/>

                        </div>
                    </label>
                    <input type="submit"/>

                    <label>Dodaj raport:
                        <div className={"addMeal"}>
                            <div><i className="material-icons">add_circle_outline</i><h3>Obiad</h3></div>
                            <input type="text" name={"lunch"} value={this.state.lunch} onChange={this.handleChange}/>

                        </div>
                    </label>
                    <input type="submit"/>


                    <label>Dodaj raport:
                        <div className={"addMeal"}>
                            <div><i className="material-icons">add_circle_outline</i><h3>Kolacja</h3></div>
                            <input type="text" name={"dinner"} value={this.state.dinner} onChange={this.handleChange}/>

                        </div>
                    </label>
                    <input type="submit"/>

                </form>

                <ul>
                    <h2>Daily report</h2>
                    <li>{this.state.breakfast}</li>
                    <li>{this.state.lunch}</li>
                    <li>{this.state.dinner}</li>
                </ul>

            </div>
        );
    }
}

export default AddReport;