import React from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import Counter from './demo/component/Counter'
import Message from './demo/component/Message'
import TodoList from './todolist/component/TodoList'

export default () =>{
    return(
        <div>
            <Router>
               <div>
                   <ul>
                       <li><Link to="/" replace>Counter</Link></li>
                       <li><Link to="/message" replace>Message</Link></li>
                       <li><Link to="/todolist" replace>TodoList</Link></li>
                   </ul>
                   <Route component={Counter} path="/" exact></Route>
                   <Route component={Message} path="/message" exact></Route>
                   <Route component={TodoList} path="/todolist"></Route>
               </div>
            </Router>
        </div>
    )
}