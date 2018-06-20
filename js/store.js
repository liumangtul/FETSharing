import {applyMiddleware, createStore} from "redux/index";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk/index";

/**
 * Store
 * */
let store = createStore(
    reducers,
    applyMiddleware(
        thunk,
        createLogger()
    )
);
