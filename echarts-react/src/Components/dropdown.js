import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import Chart from './barChart';
import populationDataFemale from './../DataFemale.js';
import populationDataMale from './../DataMale.js';

class dropdown extends Component {
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
        <div>
            <div>
                <select defaultValue={ this.state.genderSelected } onChange={ this.handleChange } >
                    <option value='All'>All Genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>                
                </select>
            <p>{this.state.genderSelected}</p>
            </div>
            <div>
                <Chart genderSelected={this.state.genderSelected} />
            </div>
        </div>
    );
  }
}

export default dropdown;