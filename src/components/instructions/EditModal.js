'use strict';
import React from 'react';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';

export default class EditModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            instruction: props.instruction,
            stepIndex: 0,
            finished: false}
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
        console.log(newState.stepIndex + " changed index")
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
        console.log(newState.stepIndex + " changed index")
        self.setState({stepIndex: newState.stepIndex, finished: newState.finished});
    }
    render(){
        return(
            <div>
                <Stepper activeStep={this.state.stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel>Edit Basic Instruction Info</StepLabel>
                        <StepContent>
                            <p>Step 1</p>
                            <FlatButton label="Go To Step 2" onClick={this.goToStep.bind(this)}/>
                        </StepContent>
                    </Step>

                    <Step>
                        <StepLabel>Edit Steps Details</StepLabel>
                        <StepContent>
                            <p>Step 2</p>
                            <FlatButton label="Back To Step 1" onClick={this.backToStep.bind(this)}/>
                            <FlatButton label="Go To Final Step" onClick={this.goToStep.bind(this)}/>
                        </StepContent>
                    </Step>

                    <Step>
                        <StepLabel>Confirm Details</StepLabel>
                        <StepContent>
                            <p>Step 3</p>
                            <FlatButton label="Back To Step 2" onClick={this.backToStep.bind(this)}/>
                            <FlatButton label="Confirm" onClick={this.goToStep.bind(this)}/>
                        </StepContent>
                    </Step>
                </Stepper>
            </div>
        )
    }
}
