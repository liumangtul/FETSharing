import {createStore, combineReducers, bindActionCreators, applyMiddleware} from 'redux'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import {Provider, connect} from 'react-redux'
import {createLogger} from 'redux-logger'

//常量
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SHOW_MESSAGE = "SHOW_MESSAGE";


//Action Creators
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
}

let onMessage = () => {
    return dispatch => {
        return fetch('./js/data.json')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                dispatch(requestMessage(json));
            })

    }
}

//Reducers
let counter = (state = {count: 0}, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
};

let getMessage = (state = {msg: ''}, action) => {
    console.log('get', state, action)
    switch (action.type) {
        case SHOW_MESSAGE:
            return {
                ...state,
                msg: action.message.msg
            };
        default:
            return state;
    }
}

let reducers = combineReducers({
    counter,
    getMessage
});

//Store
let store = createStore(
    reducers,
    applyMiddleware(
        thunk,
        createLogger()
    )
);

//Components
//UI组件
class Counter extends Component {
    render() {
        return (
            <div>
                {this.props.counter.count}
                <button onClick={this.props.onIncrement}>Increment</button>
                <button onClick={this.props.onDecrement}>Decrement</button>
            </div>
        )
    }
}


class Message extends Component {
    componentDidMount() {
        this.props.onMessage();
    }

    render() {
        return (
            <div>
                {this.props.message.msg}
            </div>
        )
    }
}

//容器组件
let Counterup = connect(
    state => {
        return {
            counter: state.counter
        }
    },
    dispatch => ({
        ...bindActionCreators({
            onIncrement,
            onDecrement
        }, dispatch)
    })
)(Counter);

let Messageup = connect(
    state => {
        console.log(state)
        return {
            message: state.getMessage
        }
    },
    dispatch => ({
        ...bindActionCreators({
            onMessage
        }, dispatch)
    })
)(Message);

//Render
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Counterup/>
            <Messageup/>
        </div>
    </Provider>,
    document.getElementById('root')
);
