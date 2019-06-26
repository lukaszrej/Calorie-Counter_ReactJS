import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Nav from './Components/Nav.jsx';
import FormUser from './Components/FormUser.jsx';
import Archive from './Components/Archive.jsx';
import ArchiveSingle from './Components/ArchiveSingle.jsx';
import MainView from './Components/MainView.jsx';

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

            for (const key in newUserDetails) {
                newUserDetails[key] = updatedUser[key];
            }

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
                                            {!this.state.formSubmitted &&
                                            <FormUser setDailyNeed={this.setDailyNeed.bind(this)}
                                                      setFormSubmitted={this.setFormSubmitted.bind(this)}
                                                      updateUser={this.updateUser.bind(this)}
                                                      userDetails={this.state.userDetails}
                                            />}
                                        </div>
                                    )
                                }}/>

                                <Route path='/dashboard' render={() => {
                                    return (
                                        <MainView
                                            dailyNeed={this.state.userDetails.dailyNeed}
                                            setFormSubmitted={this.setFormSubmitted.bind(this)}
                                            addToHistory={this.addToHistory.bind(this)}

                                            userDetails={this.state.userDetails}

                                            setDailyNeed={this.setDailyNeed.bind(this)}
                                            updateUser={this.updateUser.bind(this)}

                                            showReportSite={this.state.showReportSite}
                                            formSubmitted={this.state.formSubmitted}
                                        />
                                    )
                                }}/>
                                <Route exact path='/archive' render={() => {
                                    return (
                                        <Archive history={this.state.history}
                                                 dailyNeed={this.state.userDetails.dailyNeed}/>
                                    )
                                }}/>
                                <Route exact path='/archive/:date' render={() => {
                                    return (
                                        <ArchiveSingle
                                            historyLocal={this.state.history}
                                            dailyNeed={this.state.userDetails.dailyNeed}/>
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