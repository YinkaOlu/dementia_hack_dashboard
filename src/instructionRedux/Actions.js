'use strict';
import {EDIT_INSTRUCTION, ADD_INSTRUCTION} from "./ActionTypes"

export function editInstruction(id, editedInstruction) {
    return{
        type: EDIT_INSTRUCTION,
        id: id,
        editedInstruction: editedInstruction
    }
}

export function addInstruction(addedInstruction) {
    return{
        type: ADD_INSTRUCTION,
        addedInstruction: addedInstruction
    }
}
