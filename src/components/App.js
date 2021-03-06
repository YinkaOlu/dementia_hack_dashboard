'use strict';
import React from 'react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DashBoardHeader from './header/index'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component{
    render(){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <DashBoardHeader/>
            </MuiThemeProvider>
    )
    }
}

export default App