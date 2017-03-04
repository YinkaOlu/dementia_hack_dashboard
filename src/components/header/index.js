'use strict';
import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import HeaderAvatar from "./HeaderAvatar"
import HeadTabs from "./HeadTabs"



class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {openSideBar: false}
    }

    toggleLibrary = () =>{
        this.setState({openSideBar: !this.state.openSideBar})
    };
    render(){
        return(
            <div>
                <AppBar
                    title="KIWI DASHBOARD"
                />
                <HeadTabs/>
                <Drawer open={this.state.openSideBar} >
                    <AppBar
                        title="Settings"
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                        onClick={this.toggleLibrary}
                    />
                </Drawer>
            </div>
        )
    }
}

export default Header