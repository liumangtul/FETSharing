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
                <button className="ui olive button" onClick={this.props.onMessage}>Send</button>
                <h3>{this.props.message.msg}</h3>
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