'use strict';
import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Dialog from 'material-ui/Dialog'
import EditModal from './EditModal'
import {connect} from 'react-redux'

class Instructions extends React.Component{
    constructor(props){
        super(props);
        this.state = {instructions: props.instructions, showModal: false, storeState: props.storeState}
    }
    launchEditPage(){
        console.log(this.props.storeState);
        this.setState({showModal: true});
    }
    handleClose(){
        this.setState({showModal: false})
    }
    deleteInstruction(){
        alert('Delete Page')
    }
    render(){
        const editActions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose.bind(this)}
            />
        ];
        return(
            <div>
                <Dialog
                    title="Edit Instructions"
                    actions={editActions}
                    modal={false}
                    open={this.state.showModal}
                >
                    <EditModal/>
                </Dialog>
                <div className="row">
                    <FlatButton label="Create New Instructions"/>
                </div>
                <div className="row">
                    <DropDownMenu>
                        <MenuItem value={1} primaryText="Edit" onTouchTap={this.launchEditPage.bind(this)}/>
                        <MenuItem value={2} primaryText="Delete" onTouchTap={this.deleteInstruction.bind(this)}/>
                    </DropDownMenu>
                </div>
                <Table multiSelectable={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Created At</TableHeaderColumn>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            <TableHeaderColumn>Author</TableHeaderColumn>
                            <TableHeaderColumn>Tags</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.state.instructions.map((instruction, index) =>
                        {
                            return(
                                <TableRow>
                                    <TableRowColumn>{index + 1}</TableRowColumn>
                                    <TableRowColumn>{instruction.title}</TableRowColumn>
                                    <TableRowColumn>{instruction.author}</TableRowColumn>
                                    <TableRowColumn><em>{instruction.tags}</em></TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { instructions: state.instructions }
}
export default connect(mapStateToProps)(Instructions);