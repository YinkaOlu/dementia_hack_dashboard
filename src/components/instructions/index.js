'use strict';
import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'

const testInstructions = [
    {
        createdAt: "Mon, March 4th, 2017",
        title: "Random Instruction Test",
        author: "Support Person One",
        steps: [
            {
                title: "Step 1. Hammer Time",
                body: "Dance Randomly like a fool",
                media: {
                    audio: "",
                    video: ""
                }
            },
            {
                title: "Step 2. Hit the NaeNae",
                body: "Do the whip, then the NaeNae",
                media: {
                    audio: "",
                    video: ""
                }
            }
        ]
    },
    {
        createdAt: "Tues, March 5th, 2017",
        title: "Random Instruction Test 2",
        author: "Support Person Two",
        steps: [
            {
                title: "Step 1. Hammer Time",
                body: "Dance Randomly like a fool",
                media: {
                    audio: "",
                    video: ""
                }
            },
            {
                title: "Step 2. Hit the NaeNae",
                body: "Do the whip, then the NaeNae",
                media: {
                    audio: "",
                    video: ""
                }
            }
        ]
    }
];


export default class Instructions extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <FlatButton label="Create New Instructions"/>
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