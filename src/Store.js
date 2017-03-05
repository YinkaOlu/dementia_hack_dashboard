'use strict';
import {createStore, combineReducers} from 'redux'
import instructions from './instructionRedux/Reducer'
import dashBoardData from './dashboardRedux/Reducer'
const reducer = combineReducers({
    instructions,
    dashBoardData
})
const store = createStore(reducer);
export default store;