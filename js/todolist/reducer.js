import {TODO_LIST,DEL_TODO,TOGGLE_TODO,ADD_TODO} from "./action";

const TODOS = [
    {
        name: 'JavaScript',
        completed: false,
        id: 0
    }, {
        name: 'html',
        completed: true,
        id: 1
    }, {
        name: 'css',
        completed: false,
        id: 2
    }
];

const todos = (todos = TODOS, action) => {
    switch (action.type) {
        case TODO_LIST:
            return todos;
        case DEL_TODO:
            return todos.filter((todo, index) => {
                if (todo.id !== action.id) {
                    return todo;
                }
            });
        case TOGGLE_TODO:
            return todos.map((todo, index) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            });
        case ADD_TODO:
            return [
                ...todos,
                action.todo
            ];
        default:
            return todos;
    }
};
export default todos;