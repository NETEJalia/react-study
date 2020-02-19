import React, { Component } from 'react';
import Chart from './barChart';
import style from './component-styles/dropdowns.scss';

class WidgetBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderSelected: 'All'
        };
        this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event) {
    this.setState({ genderSelected: event.currentTarget.value });
  }

  render() {
    return (
        <div className="widget">
            <div className="dropdown">
                <select defaultValue={ this.state.genderSelected } onChange={ this.handleChange } >
                    <option value='All'>All Genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>                
                </select>
            </div>
            <div>
                <Chart genderSelected={this.state.genderSelected} />
            </div>
        </div>
    );
  }
}

export default WidgetBody;