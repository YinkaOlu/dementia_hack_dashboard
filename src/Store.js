'use strict';
import {createStore, combineReducers} from 'redux'
import instructions from './instructionRedux/Reducer'
const reducer = combineReducers({
    instructions
})
const store = createStore(reducer);
export default store;