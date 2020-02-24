import React, {Component} from 'react';
import ListData from "../data/list.json";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Listings extends Component {
    render() {

        function lengthFormat (list) {
            if (list.length < 10) {
                return `0${list.length}`;
            } else {
                return list.length;
            }
        }

        function keyFormat (key) {
            return `${key}`;
        }

        return (
            <div className="side-list">
                <div className="side-list-header">
                    <h2>Applications</h2>
                    <button className="btn btn-success"><span></span>Add New Application</button>
                    <form>
                        <div className="form-group">
                            <label>Search Apps by Keyword</label>
                            <input type="text" placeholder="Enter keyword" className="form-control"></input>
                        </div>
                    </form>
                </div>
                <Accordion defaultActiveKey="0">
                    {ListData.map((listDetail) => {
                        return (
                            <Card>
                                <Card.Header>
                                    <div class="header-top">
                                        <h2>{listDetail.title}</h2>
                                        <p><strong>Name:</strong> {listDetail.name}</p>
                                        <p><strong>App #:</strong> {listDetail.appID}</p>
                                    </div>
                                    <div className="header-footer">
                                        <div className="toggle">
                                            <Accordion.Toggle as={Button} className="accordion-opener" variant="link" eventKey={keyFormat(listDetail.key)}>
                                                <span className="sr-only">Open Accordion</span>
                                            </Accordion.Toggle>
                                            <strong>Sub-Project(s)</strong>
                                        </div>
                                        <p>{lengthFormat(listDetail.subItems)}</p>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey={keyFormat(listDetail.key)}>
                                <Card.Body>
                                    <ul>
                                        {listDetail.subItems.map((item) => {
                                            return (
                                                <li><strong>{item.number}:</strong> {item.author}</li>
                                            )
                                        })}
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        );
                    })}
                    
                </Accordion>
            </div>
        )
    }
}

export default Listings;


