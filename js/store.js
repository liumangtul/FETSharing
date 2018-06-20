import {applyMiddleware, createStore, compose} from "redux"
import {createLogger} from "redux-logger"
import thunk from "redux-thunk"
import reducer from './reducer'

/**
 * Store
 * */
// export default createStore(
//     reducer,
//     applyMiddleware(
//         thunk,
//         createLogger()
//     )
// );


export default createStore(
    reducer,
    compose(applyMiddleware(
        thunk,
        createLogger()
    ),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)