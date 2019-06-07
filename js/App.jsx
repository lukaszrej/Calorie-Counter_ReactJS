import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Nav.jsx';
import FormUser from './Components/FormUser.jsx';
import AddReport from './Components/AddReport.jsx';
import UserDetails from './Components/UserDetails.jsx';
import DailyReport from './Components/DailyReport.jsx';
import Archive from './Components/Archive.jsx';
import style from './../styles/main.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {
                weight: 70,
                height: 175,
                age: 30,
                gender: '',
                activity: 1.2,
                dailyNeed: '123.00',
            },

            history: [],

            formSubmitted: false,
            showReportSite: false,
            // userDetails: localStorage.getItem('userDetails') || null
        }
    }

    setDailyNeed(dailyNeed) {
        this.setState((state) => {

            const newUserDetails = {...state.userDetails};//or const newUserDetails = Object.assign({}, state.userDetails);
            newUserDetails.dailyNeed = dailyNeed;

            return ({
                userDetails: newUserDetails
            })
        })
    }

    addToHistory(dailyReport) {
        // todo: 1. przypisac do zmiennej stary state nie mutując go (spread)
        // todo: 2. do nowej zmiennej dodac nowy obiekt, ktory przyjdzie w argumencie dailyReport
        // todo: 3. aktualizacja state history
        this.setState((state) => {
            const newHistory = {...state.history}; //1.
            newHistory.date = dailyReport.date;
            newHistory.breakfastNutrients = dailyReport.breakfastNutrients;

            return ({
                history: newHistory
            })
        });
    }

    updateUser(updatedUser) {
        this.setState((state) => {
            const newUserDetails = {...state.userDetails};
            newUserDetails.weight = updatedUser.weight;
            newUserDetails.height = updatedUser.height;
            newUserDetails.age = updatedUser.age;
            newUserDetails.gender = updatedUser.gender;
            newUserDetails.activity = updatedUser.activity;

            console.log(newUserDetails.weight, 'waga z App? raczej nie');

            return ({
                userDetails: newUserDetails
            })
        })
    }

    setFormSubmitted() {
        this.setState({
            formSubmitted: true,
            showReportSite: true
        })
    }


    render() {
        return (
            <div>
                <Nav/>
                <div className="app__container">
                    <div/>

                    <div>
                        {this.state.showReportSite &&
                        <AddReport dailyNeed={this.state.userDetails.dailyNeed}
                                   setFormSubmitted={this.setFormSubmitted.bind(this)}

                                   addToHistory={this.addToHistory.bind(this)}
                                   dailyReport={this.state.dailyReport}/>
                        }
                        {!this.state.formSubmitted &&
                        <FormUser setDailyNeed={this.setDailyNeed.bind(this)}
                                  setFormSubmitted={this.setFormSubmitted.bind(this)}
                                  updateUser={this.updateUser.bind(this)}
                                  userDetails={this.state.userDetails}/>}

                    </div>

                    <div/>
                </div>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
