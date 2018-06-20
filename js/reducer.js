import {combineReducers} from "redux/index";
import { counter, getMessage } from "./demo/reducer";

export default combineReducers({
    counter,
    getMessage
});