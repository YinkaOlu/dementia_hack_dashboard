'use strict';
import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import Instructions from "../instructions/index"
import StaredGrade from 'material-ui/svg-icons/action/grade';
import Avatar from 'material-ui/Avatar'
import Dashboard from "../dashboard/index"
import Divider from "material-ui/Divider"

class HeadToolBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Tabs>
                    <Tab label="Dashboard">
                        <Dashboard/>
                    </Tab>
                    <Tab label="Instructions">
                        <Instructions/>
                    </Tab>
                    <Tab label="Contacts">
                        <h1>Primary Contacts</h1>
                        <List>
                            <ListItem
                                leftIcon={<StaredGrade color={"#FCD63A"} />}
                            primaryText="Arati Nerina"
                            rightAvatar={<Avatar/>}/>
                            <ListItem
                                primaryText="Taegan Wil"
                                rightAvatar={<Avatar/>}/>
                            <ListItem
                                primaryText="Mitrodora Pika"
                                rightAvatar={<Avatar/>}/>
                        </List>
                        <Divider/>
                        <h1>Secondary Contacts</h1>
                        <List>
                            <ListItem
                                primaryText="Nathan Irfan"
                                rightAvatar={<Avatar/>}/>
                            <ListItem
                                primaryText="Živa Maryam"
                                rightAvatar={<Avatar/>}/>
                            <ListItem
                                primaryText="Sylviane Hester"
                                rightAvatar={<Avatar/>}/>
                        </List>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default HeadToolBar;