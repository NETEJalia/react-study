import React, {Component} from 'react';
import CenterData from './../data/centers.json';

class Header extends Component {
    render() {
        return (
            <div className="banner" role="banner">
                {CenterData.map((CenterDetail) => {
                    return (
                        <div>
                            <h1>{CenterDetail.name}</h1>
                            <div className="header-details">
                                <p><strong>Type: </strong>{CenterDetail.type}</p>
                                <p><strong>IC: </strong>{CenterDetail.IC}</p>
                                <p><strong>SRO Name: </strong>{CenterDetail.sroName}</p>
                                <p><strong>Last Updated: </strong>{CenterDetail.lastUpdated}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Header;