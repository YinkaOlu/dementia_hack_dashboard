'use strict';
import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import Instructions from "../instructions/index"

class HeadToolBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Tabs>
                    <Tab label="Dashboard">

                    </Tab>
                    <Tab label="Instructions">
                        <Instructions/>
                    </Tab>
                    <Tab label="Reminder">

                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default HeadToolBar;