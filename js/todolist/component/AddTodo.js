import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from '../action';

class AddTodo extends Component{
    nextId = 10
    constructor(props){
        super(props);
        this.onAddTodo=this.onAddTodo.bind(this);
    }
    onAddTodo(){
        const name = this.refs.inout.value;
        this.props.addTodo({
            name:name,
            id:this.nextId++,
            completed:false
        });
    }

    render(){
        return(
            <section>
                <input type="text" ref="inout"/>
                <button onClick={this.onAddTodo}>ENTER</button>
            </section>
        )
    }
}

export default connect(
    (state,props)=>{
        return{

        }
    },
    (dispatch,props)=>({
        ...bindActionCreators({
            addTodo
        },dispatch)
    })
)(AddTodo);