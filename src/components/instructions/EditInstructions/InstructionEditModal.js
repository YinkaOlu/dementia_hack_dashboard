import React from 'react'
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';

export class BasicInstructionEdit extends React.Component{
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

export class StepInstructionEdit extends React.Component{
    constructor(props){
        super(props);
        this.state = {steps: props.instruction.steps, stepIndex: 0}
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
                                <Divider />
                            </div>
                            )
                        })}
            </div>
        )
    }
}
