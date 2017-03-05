import React from 'react'
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';

export class BasicInstructionEdit extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: props.title, author: props.author, tags: props.tags}
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
                    hintText={this.state.title}
                    floatingLabelText="Instruction Title"
                /><br />
                <TextField
                    hintText={this.state.author}
                    floatingLabelText="Author"
                /><br />
                <TextField
                    hintText={this.state.tags}
                    floatingLabelText="Instruction Tags"
                /><br />
            </div>
        )
    }
}

export class StepInstructionEdit extends React.Component{
    constructor(props){
        super(props);
        this.state = {steps: props.steps}
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
        steps: React.PropTypes.array
    };
    render(){
        return(
            <div>
                {this.state.steps.map((step)=>{
                    return(
                        <div>
                            <TextField
                                hintText={step.title}
                                floatingLabelText="Step Title"
                            /><br />
                            <TextField
                                hintText={step.message}
                                floatingLabelText="Step Message"
                            />
                            <Chip>
                                {step.media.audio.name}
                            </Chip>
                        </div>
                    )
                })}
            </div>
        )
    }
}
