import React from 'react';
import {Link} from 'react-router-dom';


function Archive(props) {

    console.log(props.history, 'historia z archive');

    return (
        <div className="addReport__container">
            <h3>Archive</h3>
            <p>Here is a site with your added daily reports. &#x1F525;</p>
            <ul>{props.history.map((el) => {
                return (
                    <div>
                        <Link to={`/archive/${el.date}`}>
                            <p>{el.date}</p>
                            <p>{el.total}</p>
                        </Link>






                        {/*{*/}

                        {/*    el.eatenFood.breakfast.map((element) => {*/}

                        {/*        console.log(element[0], 'elemennnt0')*/}

                        {/*        return <div> {element[0].food.label} </div>*/}
                        {/*    })*/}


                        {/*}*/}

                        {/*{console.log(el.eatenFood.breakfast.map((element) => element.map((item) =>*/}
                        {/*    item.food.label)), 'item label[0]find')}*/}

                    </div>
                )
            })}
            </ul>
        </div>
    )
}

export default Archive;