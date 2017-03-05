import React from 'react'
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton'
import {connect} from 'react-redux'
import {editInstruction} from '../../../instructionRedux/Actions'

class BasicInstructionComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: props.instruction.title, author: props.instruction.author, tags: props.instruction.tags,}
    }
    static defaultProps = {
        title: "New Title",
        author: "Enter Author",
        tags: "Enter instruction tags"
    };
    static propTypes = {
        title: React.PropTypes.string,
        author: React.PropTypes.string,
        tags: React.PropTypes.string
    };
    render(){
        return(
            <div>
                <TextField
                    defaultValue={this.state.title}
                    floatingLabelText="Instruction Title"
                /><br />
                <TextField
                    defaultValue={this.state.author}
                    floatingLabelText="Author"
                /><br />
                <TextField
                    defaultValue={this.state.tags}
                    floatingLabelText="Instruction Tags"
                /><br />
            </div>
        )
    }
}

class StepInstructionComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {steps: props.instruction.steps, stepIndex: 0, instruction: props.instruction}
    }
    static defaultProps = {
        steps: [
            {
                "title": "Step Title",
                "message": "Step Message",
                "media": {
                    "audio": {name: "Audio Track", data: null},
                    "video": ""
                }
            }
        ],
    };
    editInstruction(){
        const self = this;
        const newInstruction = self.state.instruction;
        newInstruction.steps = self.state.steps;
        self.dispatchInstruction(self.state.instruction.id, self.state.instruction);
    }
    render(){
        return(
            <div>
                        {this.state.steps.map((step, index)=>{
                            return(
                            <div>
                                <br />
                                <TextField
                                    defaultValue={step.title}
                                    floatingLabelText="Step Title"
                                />
                                <br />
                                <TextField
                                    defaultValue={step.message}
                                    floatingLabelText="Step Message"
                                />
                                <br />
                                <Chip>
                                    {step.media.audio.name}
                                </Chip>
                                <br />
                                <FlatButton onClick={this.editInstruction.bind(this)} label="Save Changes"/>
                                <br />
                                <Divider />
                            </div>
                            )
                        })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { instructions: state.instructions }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchInstruction: (id, message) => {
            dispatch((id, message))
        }
    }
}

export const StepInstructionEdit = connect(mapStateToProps, mapDispatchToProps)(StepInstructionComponent);
export const BasicInstructionEdit = connect(mapStateToProps, mapDispatchToProps)(BasicInstructionComponent);