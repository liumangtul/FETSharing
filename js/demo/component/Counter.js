import React,{Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {onIncrement,onDecrement} from "../action"

/**
 * Components
 * */
//UI组件
class Counter extends Component {
    render() {
        return (
            <div>
                <button className="ui olive button" onClick={this.props.onIncrement}>Increment</button>
                <button className="ui olive button" onClick={this.props.onDecrement}>Decrement</button>
                <h1>{this.props.counter.count}</h1>
            </div>
        )
    }
}
//容器组件
export default connect(
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