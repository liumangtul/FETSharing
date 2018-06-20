import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Todo from './Todo';
import AddTodo from './AddTodo';

class TodoList extends Component{
    render(){
        const {
            todos
        } = this.props;
        return(
            <section>
                <h1>Todo-List</h1>
                <AddTodo/>
                <ul>
                    {
                        todos.map((todo,index)=>{
                            return <Todo todo={todo} key={todo.id}/>
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default connect(
    (state)=>{
        console.log(state)
        return{
            todos:state.todos
        }
    },
    (dispatch)=>({
        ...bindActionCreators({

        })
    })
)(TodoList);