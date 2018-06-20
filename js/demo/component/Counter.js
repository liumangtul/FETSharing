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
                {this.props.counter.count}
                <button onClick={this.props.onIncrement}>Increment</button>
                <button onClick={this.props.onDecrement}>Decrement</button>
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