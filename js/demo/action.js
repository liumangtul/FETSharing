/**
 * 常量
 * */
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SHOW_MESSAGE = "SHOW_MESSAGE";



/**
 * Action Creators
 * */
let onIncrement = () => {
    return {
        type: INCREMENT
    }
};
let onDecrement = () => {
    return {
        type: DECREMENT
    }
};

let requestMessage = message => {
    return {
        type: SHOW_MESSAGE,
        message
    }
};

let onMessage = () => {
    return dispatch => {
        return fetch('./js/data.json')
            .then(res => res.json())
            .then(json => {
                dispatch(requestMessage(json));
            })

    }
}

export {
    INCREMENT,
    DECREMENT,
    SHOW_MESSAGE,
    onIncrement,
    onDecrement,
    onMessage
}