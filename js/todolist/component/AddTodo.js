import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from '../action';

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.onAddTodo=this.onAddTodo.bind(this);
    }
    onAddTodo(){
        const name = this.refs.inout.value;
        this.props.addTodo({
            name:name,
            id:this.props.todos[this.props.todos.length-1].id + 1,
            completed:false
        });
    }

    render(){
        return(
            <section className="field">
                <div className="ui huge input">
                    <input type="text" ref="inout"/>
                </div>
                <button className="ui huge secondary submit button" onClick={this.onAddTodo}>ENTER</button>
            </section>
        )
    }
}

export default connect(
    (state,props)=>{
        console.log(state,props)
        return{
            todos:state.todos
        }
    },
    (dispatch,props)=>({
        ...bindActionCreators({
            addTodo
        },dispatch)
    })
)(AddTodo);