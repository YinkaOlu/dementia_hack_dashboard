'use strict';
import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Dialog from 'material-ui/Dialog'
import EditModal from './EditModal'
import AddModal from './CreateModal'
import {connect} from 'react-redux'

class Instructions extends React.Component{
    constructor(props){
        super(props);
        this.state = {instructions: props.instructions, showCreateModal: false, showEditModal: false, storeState: props.storeState, instruction: null}
    }
    launchEditPage(index){
        const self = this;
        console.log(self.state.instructions[index]);
        this.setState({instruction: self.state.instructions[index], showEditModal: true});
    }
    launchCreatePage(){
        this.setState({showCreateModal: true});
    }
    handleClose(){
        this.setState({showEditModal: false, showCreateModal: false})
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
                    autoScrollBodyContent={true}
                    open={this.state.showEditModal}
                >
                    <EditModal instruction={this.state.instruction}/>
                </Dialog>
                <Dialog
                    title="Create Instructions"
                    actions={editActions}
                    modal={false}
                    autoScrollBodyContent={true}
                    open={this.state.showCreateModal}
                >
                    <AddModal/>
                </Dialog>
                <div className="row">
                    <FlatButton label="Create New Instructions" onClick={this.launchCreatePage.bind(this)}/>
                </div>
                <Table multiSelectable={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Created At</TableHeaderColumn>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            <TableHeaderColumn>Author</TableHeaderColumn>
                            <TableHeaderColumn>Tags</TableHeaderColumn>
                            <TableHeaderColumn>Actions</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.state.instructions.map((instruction, index) =>
                        {
                            return(
                                <TableRow>
                                    <TableRowColumn>{instruction.createdAt}</TableRowColumn>
                                    <TableRowColumn>{instruction.title}</TableRowColumn>
                                    <TableRowColumn>{instruction.author}</TableRowColumn>
                                    <TableRowColumn><em>{instruction.tags}</em></TableRowColumn>
                                    <TableRowColumn>
                                        <div className="row">
                                            <FlatButton label="Edit" onClick={this.launchEditPage.bind(this, index)}/>
                                            <FlatButton label="Delete"/>
                                        </div>
                                    </TableRowColumn>
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