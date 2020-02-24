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
            <Accordion className="side-list" defaultActiveKey="0">
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
        )
    }
}

export default Listings;


