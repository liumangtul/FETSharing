import {combineReducers} from "redux"
import { counter, getMessage } from "./demo/reducer"
import todos from './todolist/reducer'

export default combineReducers({
    counter,
    getMessage,
    todos
});