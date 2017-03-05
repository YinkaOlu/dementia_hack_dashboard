'use strict';
import React from 'react';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import {BasicInstructionCreate, StepInstructionCreate} from './CreateInstructions/InstructionCreateModal'
import {connect} from 'react-redux'

class CreateModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            instruction: null,
            stepIndex: 0,
            finished: false
        }
    }
    goToStep(){
        const self = this;
        console.log('Here');
        const newState = {
            stepIndex: self.state.stepIndex,
            finished: self.state.finished
        };
        if(!this.state.finished)
        {
            console.log('Not finished');
            console.log('Current Index: '+self.state.stepIndex);
            newState.stepIndex = self.state.stepIndex + 1;
        }
        else{
            console.log('Finished')
        }
        console.log(newState.stepIndex + " changed index");
        self.setState({stepIndex: newState.stepIndex, finished: newState.finished});
    }
    backToStep(){
        const self = this;
        console.log('Here');
        const newState = {
            stepIndex: self.state.stepIndex,
            finished: self.state.finished
        };
        if(this.state.stepIndex > 0)
        {
            console.log('Current Index: '+self.state.stepIndex);
            newState.stepIndex = self.state.stepIndex - 1;
        }
        else{
            console.log('Start')
        }
        console.log(newState.stepIndex + " changed index");
        self.setState({stepIndex: newState.stepIndex, finished: newState.finished});
    }
    render(){
        return(
            <div>
                <h1>New Instruction</h1>
                <Stepper activeStep={this.state.stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel>Basic Instruction Info</StepLabel>
                        <StepContent>
                            <BasicInstructionCreate/>
                            <FlatButton className="goodButton" label="Go To Step 2" onClick={this.goToStep.bind(this)}/>
                        </StepContent>
                    </Step>

                    <Step>
                        <StepLabel>Edit Steps Details</StepLabel>
                        <StepContent>
                            <StepInstructionCreate/>
                            <FlatButton className="badButton" label="Back To Step 1" onClick={this.backToStep.bind(this)}/>
                            <FlatButton className="goodButton" label="Go To Final Step" onClick={this.goToStep.bind(this)}/>
                        </StepContent>
                    </Step>

                    <Step>
                        <StepLabel>Confirm Details</StepLabel>
                        <StepContent>
                            <p>Do you want to create these instructions?</p>
                            <FlatButton className="badButton" label="Back To Step 2" onClick={this.backToStep.bind(this)}/>
                            <FlatButton className="goodButton" label="Confirm" onClick={this.goToStep.bind(this)}/>
                        </StepContent>
                    </Step>
                </Stepper>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { instructions: state.instructions }
}

export default connect(mapStateToProps)(CreateModal)