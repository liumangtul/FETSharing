/**
 * Reducers
 * */
import {INCREMENT,DECREMENT,SHOW_MESSAGE} from "./action"

let counter = (state = {count: 0}, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
};

let getMessage = (state = {msg: ''}, action) => {
    switch (action.type) {
        case SHOW_MESSAGE:
            return {
                ...state,
                msg: action.message.msg
            };
        default:
            return state;
    }
};

export {
    counter,
    getMessage
}