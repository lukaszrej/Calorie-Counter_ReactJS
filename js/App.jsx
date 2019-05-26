import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.jsx';
import Form from './Components/Form.jsx';
import AddReport from './Components/AddReport.jsx';
import History from './Components/History.jsx';
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
            formSubmitted: false,
            showReportSite: false,
            showHistorySite: false
            // userDetails: localStorage.getItem('userDetails') || null
        }
    }

    setDailyNeed(dailyNeed) {
        this.setState((state) => {

            const newUserDetails = {...state.userDetails}; // or: const newCurrUserDetails = Object.assign({}, state.userDetails);
            newUserDetails.dailyNeed = dailyNeed;

            return ({
                userDetails: newUserDetails
            })
        })
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

    showSite() {
        this.setState({
            showHistorySite: true
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div className={'main-container'}>
                    Archive {this.state.showHistorySite &&
                <History showSite={this.showSite.bind(this)}/>}
                    AddReport
                    {this.state.showReportSite &&
                    <AddReport dailyNeed={this.state.userDetails.dailyNeed}
                               setFormSubmitted={this.setFormSubmitted.bind(this)}/>}
                    {!this.state.formSubmitted &&
                    <Form setDailyNeed={this.setDailyNeed.bind(this)}
                          setFormSubmitted={this.setFormSubmitted.bind(this)}
                          updateUser={this.updateUser.bind(this)}
                          userDetails={this.state.userDetails}/>}

                    <div>{console.log(this.state.userDetails, 'state currUserDetail from App')}</div>
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
