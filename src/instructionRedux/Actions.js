'use strict';
import {EDIT_INSTRUCTION} from "./ActionTypes"

export function editInstruction(id, editedInstruction) {
    return{
        type: EDIT_INSTRUCTION,
        id: id,
        editedInstruction: editedInstruction
    }
}
