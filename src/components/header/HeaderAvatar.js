import React from 'react'
import Avatar from 'material-ui/Avatar';
import {Card, CardHeader, CardActions} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Chip from 'material-ui/Chip'

class HeaderAvatar extends React.Component{
    constructor(props){
        super(props);
        this.state = {userInitials: props.userInitials, firstName: props.firstName, lastName: props.lastName}
    }
    generateGreeting(){
        const self = this;
        return `Hello ${self.state.firstName} ${self.state.lastName}`
    }
    render(){
        return(
            <div>
                <Card>
                    <CardHeader
                        avatar={<Avatar>{this.state.userInitials}</Avatar>}
                    title={<Chip>
                        {this.generateGreeting()}
                    </Chip>}/>
                    <CardActions>
                        <FlatButton label="settings"/>
                        <FlatButton label="logout"/>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default HeaderAvatar;



