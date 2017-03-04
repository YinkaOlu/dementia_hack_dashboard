'use strict';
import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

import testInstructions from "./testInstructions"


export default class Instructions extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="row">
                    <FlatButton label="Create New Instructions"/>
                </div>
                <div className="row">
                    <DropDownMenu>
                        <MenuItem value={1} primaryText="Edit" />
                        <MenuItem value={2} primaryText="Delete" />
                    </DropDownMenu>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Created At</TableHeaderColumn>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            <TableHeaderColumn>Author</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {testInstructions.map((instruction, index) =>
                        {
                            return(
                                <TableRow>
                                    <TableRowColumn>{index + 1}</TableRowColumn>
                                    <TableRowColumn>{instruction.title}</TableRowColumn>
                                    <TableRowColumn>{instruction.author}</TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}