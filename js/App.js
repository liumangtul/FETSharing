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
                   <ul className="ui segment">
                       <li className="ui inverted violet button"><Link to="/"  replace>Counter</Link></li>
                       <li className="ui inverted olive button" ><Link to="/message" replace>Message</Link></li>
                       <li className="ui inverted yellow button"><Link to="/todolist" replace>TodoList</Link></li>
                   </ul>
                   <Route component={Counter} path="/" exact></Route>
                   <Route component={Message} path="/message" exact></Route>
                   <Route component={TodoList} path="/todolist" exact></Route>
               </div>
            </Router>
        </div>
    )
}