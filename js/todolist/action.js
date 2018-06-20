const TODO_LIST = 'TODO_LIST';
const DEL_TODO = 'DEL_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_TODO = 'ADD_TODO';

const todolist = (todos) =>{
    return{
        type:TODO_LIST,
        todos
    };
};

const delTodo = (id) =>{
    return{
        type:DEL_TODO,
        id
    }
};

const toggleTodo = (id) =>{
    return{
        type:TOGGLE_TODO,
        id
    }
};

const addTodo = (todo) =>{
    return{
        type:ADD_TODO,
        todo
    }
};
export {
    TODO_LIST,
    DEL_TODO,
    TOGGLE_TODO,
    ADD_TODO,
    todolist,
    delTodo,
    toggleTodo,
    addTodo
}