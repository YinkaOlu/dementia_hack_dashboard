'use strict';
import {EDIT_INSTRUCTION} from "./ActionTypes"
import {editInstruction} from "./Actions"

const demoInstructions = [
    {
        "id": 1,
        "createdAt": "Mon, March 4th, 2017",
        "title": "Random Instruction Test",
        "author": "Support Person One",
        "tags": "dances",
        "steps": [
            {
                "title": "Step 1. Hammer Time",
                "message": "Dance Randomly like a fool",
                "media": {
                    "audio": {name: "AudioTrack 1", data: null},
                    "video": {name: "VideoTrack 1", data: null},
                    "picture": {name: "Picture 1", data: null}
                },
                "failureCount": 100
            },
            {
                "title": "Step 2. Hit the NaeNae",
                "message": "Do the whip, then the NaeNae",
                "media": {
                    "audio": {name: "AudioTrack 1", data: null},
                    "video": {name: "VideoTrack 1", data: null},
                    "picture": {name: "Picture 1", data: null}
                },
                "failureCount": 200
            }
        ]
    },
    {
        "id": 2,
        "createdAt": "Tues, March 5th, 2017",
        "title": "Random Instruction Test 2",
        "author": "Support Person Two",
        "tags": "dances",
        "steps": [
            {
                "title": "Step 1. Hammer Time",
                "body": "Dance Randomly like a fool",
                "media": {
                    "audio": "",
                    "video": ""
                }
            },
            {
                "title": "Step 2. Hit the NaeNae",
                "body": "Do the whip, then the NaeNae",
                "media": {
                    "audio": "",
                    "video": ""
                }
            }
        ]
    }
];

export default function instructions(state = demoInstructions, action) {
    switch (action.type){
        case EDIT_INSTRUCTION:
            return state.map((instruction) =>
            {
                if(instruction.id = action.id){
                    return action.editedInstruction
                }
                else{
                    return instruction
                }
            });
        default:
            return state
    }
}