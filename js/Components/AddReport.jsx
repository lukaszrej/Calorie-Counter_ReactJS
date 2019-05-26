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

    fetchData = () => {
        let url = `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=95cca2e7&app_key=`+
        `82a7588a4ea9d81983e0794927c8cee6&ingr=${this.state.breakfast}`;

        console.log(this.state.breakfast, 'stateBreakfast');

        fetch(url).then(res => res.json()).then(json => {
            console.log(json);
            console.log(json.hints[0].food.nutrients, 'nutrients of...');
        })

        // or
        // fetch('url', {
        //      headers: {
        //          'Autorization' : 'Bearer <token>'
        //
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchData();
    };

    handleChange = (e) => {
        let {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    handleChangedPro = (e) => {
        let {name, value} = e.target;

        this.setState({
            [name]: value
        });

    };

    render() {

        return (
            <div className={"profile__container"}>

                <div>
                    <h2>{this.state.text}{this.props.dailyNeed}</h2>

                    <h2>Add report</h2>

                    <form onSubmit={this.handleSubmit}>

                        <label>Dodaj raport:
                            <div className={"addMeal"}>
                                <div><i className="material-icons">add_circle_outline</i><h3>Śniadanie</h3></div>
                                <input type="text" name={"breakfast"} value={this.state.breakfast}
                                       onChange={this.handleChangedPro}/>

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

                {/*<div>*/}
                {/*    User details*/}
                {/*</div>*/}

            </div>
        );
    }
}

export default AddReport;