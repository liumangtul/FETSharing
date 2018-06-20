//UI组件
import React,{Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {onMessage} from "../action"

class Message extends Component {
    componentDidMount() {
        this.props.onMessage();
    }

    render() {
        return (
            <div>
                {this.props.message.msg}
                <button onClick={this.props.onMessage}>Send</button>
            </div>
        )
    }
}


//容器组件
export default connect(
    state => {
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