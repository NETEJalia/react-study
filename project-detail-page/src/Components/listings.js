import React, {Component} from 'react';
import ListData from "./../list.json";

function displayData () {
    console.log(ListData);
}

displayData();

class Listings extends Component {
    render() {
        return (
            <div>
                <h1>List</h1>
                <ul>
                    {ListData.map((listDetail, index) => {
                        return (
                            <li>
                                <h2>{listDetail.title}</h2>
                                <p>{listDetail.name}</p>
                                <p>{listDetail.appID}</p>
                                <ul>
                                    {listDetail.subItems.map((item, index) => {
                                        return (<li>
                                            {item.number}
                                            {item.author}
                                            </li>);
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default Listings;
