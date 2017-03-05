'use strict';
import {createStore, combineReducers} from 'redux'
import instructionReducer from './instructionRedux/Reducer'
const reducer = combineReducers({
    instructionReducer
})
const store = createStore(reducer);
export default store;