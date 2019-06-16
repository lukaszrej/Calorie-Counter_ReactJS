import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Nav.jsx';
import FormUser from './Components/FormUser.jsx';
import AddReport from './Components/AddReport.jsx';
import UserDetails from './Components/UserDetails.jsx';
import Archive from './Components/Archive.jsx';
import style from './../styles/main.scss';
import {HashRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {
                weight: 70,
                height: 175,
                age: 30,
                gender: 'Male',
                activity: 1.2,
                dailyNeed: null,
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
        this.setState((state) => {
            const newHistory = [...state.history];

            newHistory.push(dailyReport);

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
            <HashRouter>

                <div>
                    {this.state.showReportSite && <Nav/>}
                    <div className="app__container">
                        <div/>
                        <div>
                            <Switch>
                                <Route exact path='/' render={() => {
                                    return (
                                        <div>

                                            {this.state.showReportSite &&
                                            <AddReport dailyNeed={this.state.userDetails.dailyNeed}
                                                       setFormSubmitted={this.setFormSubmitted.bind(this)}
                                                       addToHistory={this.addToHistory.bind(this)}

                                                       userDetails={this.state.userDetails}
                                            />
                                            }
                                            {!this.state.formSubmitted &&
                                            <FormUser setDailyNeed={this.setDailyNeed.bind(this)}
                                                      setFormSubmitted={this.setFormSubmitted.bind(this)}
                                                      updateUser={this.updateUser.bind(this)}
                                                      userDetails={this.state.userDetails}/>}

                                        </div>
                                    )
                                }}/>
                                <Route exact path='/archive' render={() => {
                                    return (
                                        <Archive history={this.state.history}/>
                                    )
                                }}/>
                                <Route exact path='/user' render={() => {
                                    return (
                                        <UserDetails dailyNeed={this.state.userDetails.dailyNeed}
                                                     userDetails={this.state.userDetails}/>
                                    )
                                }}/>
                            </Switch>
                        </div>
                        <div/>
                    </div>
                </div>

            </HashRouter>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
