import React from 'react'
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton'
import {connect} from 'react-redux'
import {addInstruction} from '../../../instructionRedux/Actions'
import {Card, CardHeader, CardText, CardMedia} from 'material-ui/Card'

const emptyInstruction = {
        "createdAt": new Date().toISOString(),
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
            tags: "",
            instruction: emptyInstruction
        };
    }
    createStepTitle(e){
        let newInstruction = this.state.instruction;
        newInstruction.title = e.target.value;
        console.log(e.target.value)
        this.setState({title: newInstruction.title, instruction: newInstruction});
    }
    createStepAuthor(e){
        let newInstruction = this.state.instruction;
        newInstruction.author = e.target.value;
        console.log(e.target.value)
        this.setState({author: newInstruction.author, instruction: newInstruction});
    }
    createStepTags(e){
        let newInstruction = this.state.instruction;
        newInstruction.tags = e.target.value;
        console.log(e.target.value)
        this.setState({tags: newInstruction.tags, instruction: newInstruction});
    }
    saveAddition(){
        const self = this;
        emptyInstruction.title = self.state.title;
        emptyInstruction.author = self.state.author;
        emptyInstruction.tags = self.state.tags;
        emptyInstruction.id = Math.floor(Math.random()*10000000000000000);
        self.setState({instruction: emptyInstruction, currentStep: null}, ()=>
        {
            console.log(self.state.instruction)
            self.props.dispatchInstruction(this.state.instruction);
        });
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
                <FlatButton onClick={this.saveAddition.bind(this)} label="Save Changes"/>
            </div>
        )
    }
}

class StepInstructionComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {file: null,
            currentStep: emptyStep,
            steps: emptyInstruction.steps,
            createIndex: 0,
            instruction: emptyInstruction,
            imagePreviewUrl: null,
            inputAudioUrl: null
        }
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
        let newStep = this.state.currentStep;
        newStep.title = e.target.value;
        this.setState({currentStep: newStep});
    }
    createStepMessage(e){
        let newStep = this.state.currentStep;
        newStep.message = e.target.value;
        this.setState({currentStep: newStep});
    }
    addAnotherStep(){
        const self = this;
        const newStep = self.state.currentStep;
        newStep.media.picture.data = document.getElementById("imageUpload").value;
        emptyInstruction.steps.push(newStep);
        console.log(emptyInstruction);
        const newIndex = self.state.createIndex + 1;
        this.setState({steps: emptyInstruction.steps,
            instruction: emptyInstruction,
            currentStep: {
                "title": "",
                "message": "",
                "media": {
                    "audio": {name: "", data: null},
                    "video": {name: "", data: null},
                    "picture": {name: "", data: null}
                },
                "failureCount": 0
            },
        createIndex: newIndex}, ()=>
        {
            self.props.dispatchInstruction(this.state.instruction);
        });
    }
    previewImage(e){
        const reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
    previewAudio(e){
        const blob = window.URL || window.webkitURL;
        let file = e.target.files[0];
        console.log(file);
        const fileURL = blob.createObjectURL(file);
        console.log(fileURL);
        this.setState({
            inputAudioUrl: fileURL
        });
    }
    render(){
        return(
            <div>
                <div>
                    <br />
                    <TextField
                        defaultValue={this.state.currentStep.title}
                        floatingLabelText="Step Title"
                        onChange={this.createStepTitle.bind(this)}
                    />
                    <br />
                    <TextField
                        defaultValue={this.state.currentStep.message}
                        floatingLabelText="Step Message"
                        onChange={this.createStepMessage.bind(this.files)}
                    />

                    <Card>
                        <CardHeader
                            title="Audio Section"/>
                        <CardMedia>
                            {this.state.inputAudioUrl ? <audio src={this.state.inputAudioUrl} controls/>: <em>No Audio</em>}
                        </CardMedia>
                        <CardText><input id="imageUpload" type="file" name="audioUpload" onChange={this.previewAudio.bind(this)}/>
                        </CardText>
                    </Card>

                    <Card>
                        <CardHeader
                        title="Image Section"/>
                        <CardMedia>
                            {this.state.imagePreviewUrl ? <img src={this.state.imagePreviewUrl}/> : <em>No Image</em>}
                        </CardMedia>
                        <CardText>
                            <input id="imageUpload" type="file" name="picUpload" accept="image/*" onChange={this.previewImage.bind(this)}/>
                        </CardText>
                    </Card>

                    <br />
                    <FlatButton className="goodButton" label="Save Step" onClick={this.addAnotherStep.bind(this)} />
                    <Divider />
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { instructions: state.instructions }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchInstruction: (message) => {
            dispatch(addInstruction(message));
        }
    }
}

export const StepInstructionCreate = connect(mapStateToProps, mapDispatchToProps)(StepInstructionComponent);
export const BasicInstructionCreate = connect(mapStateToProps, mapDispatchToProps)(BasicInstructionComponent);