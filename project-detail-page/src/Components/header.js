import React, {Component} from 'react';
import CenterData from './../data/centers.json';

class Header extends Component {
    render() {
        return (
            <div>
                {CenterData.map((CenterDetail) => {
                    return (
                        <div>
                            <h1>{CenterDetail.name}</h1>
                            <div>
                                <p>{CenterDetail.type}</p>
                                <p>{CenterDetail.IC}</p>
                                <p>{CenterDetail.sroName}</p>
                                <p>{CenterDetail.lastUpdated}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Header;