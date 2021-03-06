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
        this.state = {title: props.instruction.title, author: props.instruction.author, tags: props.instruction.tags, instruction: props.instruction}
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
    editStepTitle(e){
        let newInstruction = this.state.instruction;
        newInstruction.title = e.target.value;
        this.setState({title: newInstruction.title, instruction: newInstruction});
    }
    editStepAuthor(e){
        let newInstruction = this.state.instruction;
        newInstruction.author = e.target.value;
        this.setState({author: newInstruction.author, instruction: newInstruction});
    }
    editStepTags(e){
        let newInstruction = this.state.instruction;
        newInstruction.tags = e.target.value;
        this.setState({tags: newInstruction.tags, instruction: newInstruction});
    }
    render(){
        return(
            <div>
                <TextField
                    defaultValue={this.state.title}
                    floatingLabelText="Instruction Title"
                    onChange={this.editStepTitle.bind(this)}
                /><br />
                <TextField
                    defaultValue={this.state.author}
                    floatingLabelText="Author"
                    onChange={this.editStepAuthor.bind(this)}
                /><br />
                <TextField
                    defaultValue={this.state.tags}
                    floatingLabelText="Instruction Tags"
                    onChange={this.editStepTags.bind(this)}
                /><br />
            </div>
        )
    }
}

class StepInstructionComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {steps: props.instruction.steps, stepIndex: 0, instruction: props.instruction, selectedStep: null}
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
    editStepTitle(index, e){
        this.setState({selectedStep: index})
        let newSteps = this.state.steps;
        newSteps[0].title = e.target.value;
        this.setState({steps: newSteps});
    }
    editStepMessage(index, e){
        this.setState({selectedStep: index})
        let newSteps = this.state.steps;
        newSteps[0].message = e.target.value;
        this.setState({steps: newSteps});
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
                                    onChange={this.editStepTitle.bind(this, index)}
                                />
                                <br />
                                <TextField
                                    defaultValue={step.message}
                                    floatingLabelText="Step Message"
                                    onChange={this.editStepMessage.bind(this, index)}
                                />
                                <br />
                                <Chip>
                                    {step.media.audio.name}
                                </Chip>
                                <br />
                                <FlatButton className="goodButton" onClick={e=>this.props.dispatchInstruction(this.state.instruction.id, this.state.instruction)} label="Save Changes"/>
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
            dispatch(editInstruction(id, message));
        }
    }
}

export const StepInstructionEdit = connect(mapStateToProps, mapDispatchToProps)(StepInstructionComponent);
export const BasicInstructionEdit = connect(mapStateToProps, mapDispatchToProps)(BasicInstructionComponent);