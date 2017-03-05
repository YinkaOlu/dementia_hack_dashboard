import React from 'react'
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton'
import {connect} from 'react-redux'
import {addInstruction} from '../../../instructionRedux/Actions'

const emptyInstruction = {
        "createdAt": "",
        "title": "",
        "author": "",
        "tags": "",
        "steps": []
    }
const emptyStep = {
    "title": "",
    "message": "",
    "media": {
        "audio": {name: "", data: null},
        "video": {name: "", data: null},
        "picture": {name: "", data: null}
    },
    "failureCount": 0
}

class BasicInstructionComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            author: "",
            tags: ""
        };
    }
    createStepTitle(e){
        let newInstruction = this.state.instruction;
        newInstruction.title = e.target.value;
        this.setState({title: newInstruction.title, instruction: newInstruction});
    }
    createStepAuthor(e){
        let newInstruction = this.state.instruction;
        newInstruction.author = e.target.value;
        this.setState({author: newInstruction.author, instruction: newInstruction});
    }
    createStepTags(e){
        let newInstruction = this.state.instruction;
        newInstruction.tags = e.target.value;
        this.setState({tags: newInstruction.tags, instruction: newInstruction});
    }
    render(){
        return(
            <div>
                <TextField
                    floatingLabelText="Describe Instruction in a few words"
                    defaultValue={this.state.title}
                    onChange={this.createStepTitle.bind(this)}
                /><br />
                <TextField
                    floatingLabelText="Author"
                    defaultValue={this.state.author}
                    onChange={this.createStepAuthor.bind(this)}
                /><br />
                <TextField
                    floatingLabelText="A few tags"
                    defaultValue={this.state.tags}
                    onChange={this.createStepTags.bind(this)}
                /><br />
            </div>
        )
    }
}

class StepInstructionComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {steps: emptyInstruction.steps, createIndex: 0, instruction: emptyInstruction}
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
    static propTypes = {
        dispatchInstruction: React.PropTypes.func
    };
    editInstruction(){
        const self = this;
        const newInstruction = self.state.instruction;
        newInstruction.steps = self.state.steps;
    }
    createStepTitle(e){
        let newSteps = this.state.steps;
        newSteps[this.state.createIndex].title = e.target.value;
        this.setState({steps: newSteps});
    }
    createStepMessage(e){
        let newSteps = this.state.steps;
        newSteps[this.state.createIndex].message = e.target.value;
        this.setState({steps: newSteps});
    }
    addAnotherStep(){
        emptyInstruction.steps = this.state.steps;
        const newIndex = this.state.createIndex + 1;
        this.setState({steps: emptyInstruction.steps, instruction: emptyInstruction, currentStep: null});
        this.props.addInstruction(this.state.instruction);
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
                                onChange={this.createStepTitle.bind(this)}
                            />
                            <br />
                            <TextField
                                defaultValue={step.message}
                                floatingLabelText="Step Message"
                                onChange={this.createStepMessage.bind(this)}
                            />
                            <br />
                            <Chip>
                                {step.media.audio.name}
                            </Chip>
                            <br />
                            <FlatButton onClick={e=>this.props.dispatchInstruction(this.state.instruction.id, this.state.instruction)} label="Save Changes"/>
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
            dispatch(addInstruction(id, message));
        }
    }
}

export const StepInstructionCreate = connect(mapStateToProps, mapDispatchToProps)(StepInstructionComponent);
export const BasicInstructionCreate = connect(mapStateToProps, mapDispatchToProps)(BasicInstructionComponent);