'use strict';
import React from 'react'
import {connect} from 'react-redux'
import FlatButton from "material-ui/FlatButton"

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: props.data}
    }
    displayData(){
        const self = this;
        console.log(self.state.data)
    }
    render(){
        return(
            <div>
                <h1>Test</h1>
                <FlatButton label="test" onClick={this.displayData.bind(this)}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {data: state.dashBoardData }
}
export default connect(mapStateToProps)(Dashboard);