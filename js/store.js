import {applyMiddleware, createStore} from "redux"
import {createLogger} from "redux-logger"
import thunk from "redux-thunk"
import reducer from './reducer'

/**
 * Store
 * */
export default createStore(
    reducer,
    applyMiddleware(
        thunk,
        createLogger()
    )
);
