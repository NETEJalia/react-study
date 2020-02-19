import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import populationDataFemale from './../DataFemale.js';
import populationDataMale from './../DataMale.js';

class BarChart extends Component {
    getGenderData = (year) => {
        let genderData = {};
        if (this.props.genderSelected === 'All') {
            genderData = {
                female: populationDataFemale[year],
                male: populationDataMale[year]
            };
            console.log(genderData, 'all');
            return genderData;
        } else if (this.props.genderSelected === 'Male') {
            genderData = {
                female: 0,
                male: populationDataMale[year]
            };
            return genderData;
        } else if (this.props.genderSelected === 'Female') {
            genderData = {
                female: populationDataFemale[year],
                male: 0
            };
            return genderData;
        }
    }

    getOption = () => {
        let districts = [];
        let years = [];
        let gender;

        Object.entries(populationDataFemale).forEach(entry => {
            years = [...years, entry[0]];
            entry[1].forEach(e => {
            districts = [...new Set([...districts, e.name])];
            });
        });

        let options = years.map(year => {
            gender = this.getGenderData(year);

            let obj = {};
            obj.title = {
            text: `Population of Singapore by District, ${year}`
            };
            obj.series = [
            {
                stack: "group",
                data: gender.female
            },
            {
                stack: "group",
                data: gender.male
            }
            ]
            return obj;
        });
    
        return {
            baseOption: {
            timeline: {
    
            },
            color: ['#e91e63', '#354ef6'],
            title: {
                subtext: 'Data from the Singapore Department of Statistics',
                textAlign: 'left',
                left: '5%'
            },
            tooltip: {backgroundColor: '#555', borderWidth: 0, padding: 10},
            legend: {
                data: ['Female', 'Male'],
                itemGap: 35,
                itemHeight: 18,
                right: '11%',
                top: 20
            },
            calculable: true,
            grid: {
                top: 100,
                bottom: 150,
                tooltip: {
                type: 'shadow',
                label: {
                    show: true,
                    formatter: function(params) {
                    return params.value.replace('\n','');
                    }
                }
                }
            },
            xAxis: [
                {
                axisLabel: {
                    interval: 0,
                    rotate: 55,
                    textStyle: {
                    baseline: 'top',
                    color: '#333',
                    fontSize: 10,
                    fontWeight: 'bold'
                    }
                },
                axisLine: {lineStyle: {color: '#aaa'}, show: true},
                axisTick: {show: false},
                data: districts,
                splitLine: {show: false},
                type: 'category'
                }
            ],
            yAxis: [
                {
                axisLabel: {
                    textStyle: {fontSize: 10}
                },
                axisLine: {show: false},
                axisTick: {show: false},
                name: 'Population',
                splitLine: {
                    lineStyle: {
                    type: 'dotted'
                    }
                },
                type: 'value'
                }
            ],
            series: [
                {
                name: 'Female',
                type: 'bar'
                },
                {
                name: 'Male',
                type: 'bar'
                }
            ]
            },
            options: options
        };
    };
    
    render() {
    return (
        <ReactEcharts
        option={this.getOption()}
        style = {{height: '80vh', left: 50, top: 50, width: '90vw'}}
        opts={{renderer: 'svg'}}
        />
    );
    }
}

export default BarChart;