'use strict';
import React from 'react'
import {connect} from 'react-redux'
import FlatButton from "material-ui/FlatButton"
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card} from "material-ui/Card"
import underscore from 'underscore'

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: props.data, categories: [], subCategories: []}
    }
    componentDidMount(){
        const groupByCategory = underscore.groupBy(this.state.data, data =>
        {
            return data.category
        });
        const categories = Object.keys(groupByCategory);
        this.setState({categories: categories}, () =>
        {
            const select = document.createElement("selectOne");
            google.charts.load('current', {packages: ['corechart', 'bar']});
            google.charts.setOnLoadCallback(drawMultSeries);
        });

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
                hAxis: {
                    title: 'Frequency',
                    minValue: 0
                },
                vAxis: {
                    title: 'Category'
                }
            };

            var chart = new google.visualization.BarChart(document.getElementById('bargraph_div'));
            chart.draw(data, options);
        }
    }
    displayPieChart(e){
        const selectedCategory = e.target.innerHTML.trim()
        const self = this;
        const filtered = underscore.filter(this.state.data, data =>
        {
            return data.category == selectedCategory
        });
        const groupBySubCategory = underscore.groupBy(filtered, data =>
        {
            return data.subCategory
        });
        const subCategories = Object.keys(groupBySubCategory)
        self.setState({subCategories: subCategories}, ()=>{
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);
        });
        function drawChart() {

            const setup = [
                ['Subject', 'Frequency']
            ]
            underscore.each(subCategories, subcategory =>
            {
                setup.push([subcategory, groupBySubCategory[subcategory].length])
            });
            var data = google.visualization.arrayToDataTable(setup);

            var options = {
                title: 'My Daily Activities'
            };

            var chart = new google.visualization.PieChart(document.getElementById('piegraph_div'));

            chart.draw(data, options);
        }
    }
    displayLineChart(e){

        const selectedSubCategory = e.target.innerHTML.trim()
        const self = this;
        const filteredGroup = underscore.filter(self.state.data, data =>
        {
            return data.subCategory == selectedSubCategory
        });
        google.charts.load('current', {packages: ['corechart', 'line']});
        google.charts.setOnLoadCallback(drawBasic);
        function drawBasic() {
            let setup = {};
            underscore.each(filteredGroup, (filtered) =>
            {
                console.log(filtered);
                if(setup[filtered.date]){
                    setup[filtered.date] += 1;
                }
                else{
                    setup[filtered.date] = 1;
                }
            });
            console.log(setup);
            setup = underscore.pairs(setup);
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'X');
            data.addColumn('number', 'Question Frequency');
            data.addRows(setup);

            var options = {
                hAxis: {
                    title: 'Date'
                },
                vAxis: {
                    title: 'Frequency'
                }
            };

            var chart = new google.visualization.LineChart(document.getElementById('linegraph_div'));
            chart.draw(data, options);
        }
    }
    render(){
        return(
            <div>
                <Card>
                    <div id="bargraph_div"></div>
                </Card>
                <SelectField onChange={this.displayPieChart.bind(this)}>
                    {this.state.categories.map((category) =>
                    {
                        return (<MenuItem primaryText={category}/>)
                    })}
                </SelectField>
                <Card>
                    <div id="piegraph_div"></div>
                </Card>
                <SelectField onChange={this.displayLineChart.bind(this)}>
                    {this.state.subCategories.map((category) =>
                    {
                        return (<MenuItem primaryText={category}/>)
                    })}
                </SelectField>
                <Card>
                    <div id="linegraph_div"></div>
                </Card>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {data: state.dashBoardData }
}
export default connect(mapStateToProps)(Dashboard);