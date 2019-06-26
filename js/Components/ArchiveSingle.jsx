import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class ArchiveSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className="archiveSingle__container">
                <h3>Single One</h3>
                <p>Here is your daily reports of {this.props.match.params.date} &#x1F525;.</p>

                <div className="archive__panels">
                    {this.props.historyLocal.map((el) => {
                        return (
                            <div className="archive__single">
                                <Link to={`/archive/${el.date}`}>
                                    <h3>{el.date && el.date}</h3>
                                    <p>Calorie intake: {el.total && el.total} kcal</p>
                                    <p>Calorie intake to calorie
                                        need: {Number((Math.ceil(el.total) / this.props.dailyNeed)
                                            * 100).toFixed(2) + "%"}</p>
                                    <ul>
                                        {el.eatenFood.breakfast && el.eatenFood.breakfast.map((element) => {
                                            return <li>{element[0].food.label}</li>
                                        })}
                                        {el.eatenFood.lunch && el.eatenFood.lunch.map((element) => {
                                            return <li>{element[0].food.label}</li>
                                        })}
                                        {el.eatenFood.dinner && el.eatenFood.dinner.map((element) => {
                                            return <li>{element[0].food.label}</li>
                                        })}
                                    </ul>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}


export default withRouter(ArchiveSingle);