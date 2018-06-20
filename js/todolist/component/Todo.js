import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {delTodo,toggleTodo} from '../action';

class Todo extends Component{
    render(){
        const {
            todo,
            delTodo,
            toggleTodo
        } = this.props;
        return(
            <li>
                <p>ID:{todo.id}, Name:{todo.name},<b style={{color:todo.completed?'red':'green'}}>isLock:{todo.completed}</b></p>
                <button onClick={()=>{delTodo(todo.id)}}>Del</button>
                <button onClick={()=>{toggleTodo(todo.id)}}>{todo.completed?'unLock':'lock'}</button>
            </li>
        )
    }
}

export default connect(
    (state,props) =>{
        return{
            todo:props.todo
        }
    },
    (dispatch)=>({
        ...bindActionCreators({
            delTodo,
            toggleTodo
        },dispatch)
    })
)(Todo);
