import React from 'react';
import AddReport from './AddReport.jsx';

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div>
                <AddReport dailyNeed={this.props.userDetails.dailyNeed}
                           setFormSubmitted={this.setFormSubmitted}
                           addToHistory={this.props.addToHistory}

                           userDetails={this.props.userDetails}
                           showReportSite={this.props.showReportSite}
                />
            </div>
        );
    }
}

export default MainView;

// {this.props.showReportSite &&
