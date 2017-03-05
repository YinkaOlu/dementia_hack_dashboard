'use strict';
import React from 'react'
import {connect} from 'react-redux'
import FlatButton from "material-ui/FlatButton"
import underscore from 'underscore'

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: props.data}
    }
    componentDidMount(){
        const groupByCategory = underscore.groupBy(this.state.data, data =>
        {
            return data.category
        });
        const categories = Object.keys(groupByCategory)
        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawMultSeries);

        function drawMultSeries() {
            const setup = [
                ['Category', 'Category']
            ]
            underscore.each(categories, category =>
            {
                setup.push([category, groupByCategory[category].length])
            });
            var data = google.visualization.arrayToDataTable(setup);

            var options = {
                title: 'Questions Asked by Main Cateogory',
                chartArea: {width: '50%'},
                hAxis: {
                    title: 'Frequency',
                    minValue: 0
                },
                vAxis: {
                    title: 'Category'
                }
            };

            var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        }
    }
    displayData(){
        const self = this;
        console.log(self.state.data)
    }
    render(){
        return(
            <div>
                <h1>Test</h1>

                <div id="chart_div"></div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {data: state.dashBoardData }
}
export default connect(mapStateToProps)(Dashboard);