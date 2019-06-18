import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ArchiveSingle extends Component {

    render() {

        {
            console.log(this.props, 'props')
        }

        return (
            <div>
                Single One
            </div>
        );
    }
}


export default withRouter(ArchiveSingle);