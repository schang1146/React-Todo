// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const todo = [
    {
        task: 'Learn setState()',
    },
    {
        task: 'Style my Todo List',
    },
];

const defaultState = {
    todoList: todo,
    task: '',
    id: undefined,
    completed: false,
}

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = defaultState;
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    addTodoHandler = event => {
        event.preventDefault();
        let newTodo = {
            task: this.state.task,
        };
        this.setState({
            todoList: [...this.state.todoList, newTodo],
            task: '',
        });
    };

    clearCompletedHandler = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <h2>Todo List: MVP</h2>

                <div className='todo-list'>
                    {this.state.todoList.map(todo => (
                        <Todo todo={todo} />
                    ))}
                </div>

                <TodoForm
                    addTodoHandler={this.addTodoHandler}
                    changeHandler={this.changeHandler}
                    clearCompletedHandler={this.clearCompletedHandler}
                    task={this.state.task}
                    id={this.state.id}
                    completed={this.state.completed}
                />

            </div>
        );
    };
};

export default TodoList;